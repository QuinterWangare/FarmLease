import apiClient from './apiClient';
import { API_ENDPOINTS } from '../constants';

const authService = {
  // Login
  login: async (email, password, rememberMe = false) => {
    const response = await apiClient.post(API_ENDPOINTS.LOGIN, {
      email,
      password,
    });
    
    if (response.data.access) {
      localStorage.setItem('accessToken', response.data.access);
      localStorage.setItem('refreshToken', response.data.refresh);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }
    }
    
    return response.data;
  },

  // Register
  register: async (userData) => {
    const response = await apiClient.post(API_ENDPOINTS.REGISTER, userData);
    return response.data;
  },

  // Logout
  logout: async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (refreshToken) {
        await apiClient.post(API_ENDPOINTS.LOGOUT, { refresh: refreshToken });
      }
    } finally {
      authService.clearSession();
      // Dispatch logout event for other tabs
      window.dispatchEvent(new Event('auth-logout'));
    }
  },

  // Refresh access token
  refreshToken: async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await apiClient.post(API_ENDPOINTS.REFRESH_TOKEN, {
      refresh: refreshToken,
    });

    if (response.data.access) {
      localStorage.setItem('accessToken', response.data.access);
      return response.data.access;
    }

    throw new Error('Failed to refresh token');
  },

  // Clear session data
  clearSession: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    localStorage.removeItem('rememberMe');
  },

  // Get current user
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('accessToken');
  },

  // Get user role
  getUserRole: () => {
    const user = authService.getCurrentUser();
    return user?.role || null;
  },

  // Update user data in localStorage
  updateUser: (userData) => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      const updatedUser = { ...currentUser, ...userData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    }
    return null;
  },
};

export default authService;
