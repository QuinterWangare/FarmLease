import apiClient from './apiClient';
import { API_ENDPOINTS } from '../constants';
import { jwtDecode } from 'jwt-decode';

const authService = {
  // Decode JWT and extract user info
  decodeToken: (token) => {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  },

  // Login
  login: async (email, password) => {
    console.log('Attempting login with:', { email, password: '***' });
    try {
      const response = await apiClient.post(API_ENDPOINTS.LOGIN, {
        email,
        password,
      });
      
      if (response.data.access) {
        localStorage.setItem('accessToken', response.data.access);
        localStorage.setItem('refreshToken', response.data.refresh);
        
        // Decode token to get user info
        const decodedToken = authService.decodeToken(response.data.access);
        console.log('Decoded token:', decodedToken);
        if (decodedToken) {
          const user = {
            id: decodedToken.user_id,
            email: decodedToken.email,
            role: decodedToken.role,
            is_staff: decodedToken.is_staff,
            username: decodedToken.username,
          };
          localStorage.setItem('user', JSON.stringify(user));
        }
      }
      
      return response.data;
    } catch (error) {
      console.error('Login failed:', error.response?.data);
      throw error;
    }
  },

  // Register
  register: async (userData) => {
    // Map frontend field names to backend field names
    const backendData = {
      username: userData.name,
      email: userData.email,
      password: userData.password,
      phone_number: userData.phone,
      role: userData.role // Already mapped to backend values in constants
    };
    console.log('Sending registration data:', backendData);
    const response = await apiClient.post(API_ENDPOINTS.REGISTER, backendData);
    return response.data;
  },

  // Logout
  logout: async () => {
    try {
      await apiClient.post(API_ENDPOINTS.LOGOUT);
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    }
  },

  // Get current user from localStorage or decode from token
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    
    // If no user in localStorage, try to decode from token
    const token = localStorage.getItem('accessToken');
    if (token) {
      const decodedToken = authService.decodeToken(token);
      if (decodedToken) {
        return {
          id: decodedToken.user_id,
          email: decodedToken.email,
          role: decodedToken.role,
          is_staff: decodedToken.is_staff,
          username: decodedToken.username,
        };
      }
    }
    
    return null;
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
  
  // Check if user is staff/admin
  isStaff: () => {
    const user = authService.getCurrentUser();
    return user?.is_staff || false;
  },
};

export default authService;
