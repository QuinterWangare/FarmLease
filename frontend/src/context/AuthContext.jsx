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

  // Check if token is expired
  const isTokenExpired = (token) => {
    if (!token) return true;
    
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const expiry = payload.exp * 1000; // Convert to milliseconds
      return Date.now() >= expiry;
    } catch (error) {
      return true;
    }
  };

  // Validate and restore user session
  const validateSession = async () => {
    const currentUser = authService.getCurrentUser();
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!currentUser || !accessToken) {
      setUser(null);
      setLoading(false);
      return;
    }

    // Check if access token is expired
    if (isTokenExpired(accessToken)) {
      // Try to refresh with refresh token
      if (refreshToken && !isTokenExpired(refreshToken)) {
        try {
          await authService.refreshToken();
          setUser(currentUser);
        } catch (error) {
          // Refresh failed, clear session
          authService.clearSession();
          setUser(null);
        }
      } else {
        // Both tokens expired, clear session
        authService.clearSession();
        setUser(null);
      }
    } else {
      setUser(currentUser);
    }

    setLoading(false);
  };

  useEffect(() => {
    validateSession();

    // Listen for storage changes (cross-tab logout)
    const handleStorageChange = (e) => {
      if (e.key === 'accessToken' && !e.newValue) {
        // Token was removed in another tab, logout here too
        setUser(null);
        navigate('/login');
      }
    };

    // Listen for custom logout event
    const handleLogoutEvent = () => {
      setUser(null);
      if (window.location.pathname !== '/login') {
        navigate('/login');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('auth-logout', handleLogoutEvent);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('auth-logout', handleLogoutEvent);
    };
  }, [navigate]);

  const login = async (email, password, rememberMe = false) => {
    try {
      setLoading(true);
      const data = await authService.login(email, password, rememberMe);
      setUser(data.user);
      
      // Redirect based on role
      const role = data.user.role;
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
        case 'ADMIN':
          navigate('/admin/dashboard');
          break;
        default:
          navigate('/');
      }
      
      toast.success('Login successful!');
      return data;
    } catch (error) {
      const message = error.response?.data?.message || error.response?.data?.detail || 'Login failed. Please check your credentials.';
      toast.error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setLoading(true);
      const data = await authService.register(userData);
      toast.success('Registration successful! Please login.');
      navigate('/login');
      return data;
    } catch (error) {
      const message = error.response?.data?.message || error.response?.data?.detail || 'Registration failed';
      
      // Handle field-specific errors
      if (error.response?.data) {
        const errors = error.response.data;
        if (errors.email) {
          toast.error(`Email: ${errors.email[0]}`);
        } else if (errors.password) {
          toast.error(`Password: ${errors.password[0]}`);
        } else {
          toast.error(message);
        }
      } else {
        toast.error(message);
      }
      
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await authService.logout();
      setUser(null);
      navigate('/login');
      toast.info('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
      // Even if API call fails, clear local state
      authService.clearSession();
      setUser(null);
      navigate('/login');
    } finally {
      setLoading(false);
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
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
