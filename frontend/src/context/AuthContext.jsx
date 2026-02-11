import { createContext, useContext, useState, useEffect } from 'react';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in on mount
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const data = await authService.login(email, password);
      const currentUser = authService.getCurrentUser();
      setUser(currentUser);
      
      // Redirect based on role and is_staff
      if (currentUser.is_staff) {
        navigate('/admin/dashboard');
      } else {
        const role = currentUser.role;
        switch (role) {
          case 'landowner':
            navigate('/owner/dashboard');
            break;
          case 'farmer':
            navigate('/lessee/dashboard');
            break;
          case 'dealer':
            navigate('/dealer/dashboard');
            break;
          default:
            navigate('/');
        }
      }
      
      toast.success('Login successful!');
      return data;
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed';
      toast.error(message);
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const data = await authService.register(userData);
      toast.success('Registration successful! Please login.');
      navigate('/login');
      return data;
    } catch (error) {
      console.error('Registration error details:', error.response?.data);
      // Handle validation errors from backend
      const errorData = error.response?.data;
      let message = 'Registration failed';
      
      if (errorData) {
        if (typeof errorData === 'string') {
          message = errorData;
        } else if (errorData.message) {
          message = errorData.message;
        } else {
          // Handle field-specific errors
          const errors = [];
          for (const [field, msgs] of Object.entries(errorData)) {
            if (Array.isArray(msgs)) {
              errors.push(`${field}: ${msgs.join(', ')}`);
            } else {
              errors.push(`${field}: ${msgs}`);
            }
          }
          message = errors.length > 0 ? errors.join('\n') : 'Registration failed';
        }
      }
      
      toast.error(message);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      navigate('/login');
      toast.info('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    userRole: user?.role || null,
    isStaff: user?.is_staff || false,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
