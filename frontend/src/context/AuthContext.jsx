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
  // DEVELOPMENT MODE: Set mock user to bypass authentication
  const DEVELOPMENT_MODE = true; // Set to false when backend is ready
  
  const mockUser = {
    id: 1,
    name: 'David M.',
    email: 'david@farmlease.com',
    role: 'LESSEE',
    phone_number: '+254712345678',
  };

  const [user, setUser] = useState(DEVELOPMENT_MODE ? mockUser : null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in on mount
    if (!DEVELOPMENT_MODE) {
      const currentUser = authService.getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
      }
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
          case 'OWNER':
            navigate('/owner/dashboard');
            break;
          case 'LESSEE':
            navigate('/lessee/dashboard');
            break;
          case 'DEALER':
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
      const message = error.response?.data?.message || 'Registration failed';
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
