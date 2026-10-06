import { useState, useCallback } from 'react';
import api from '../api/axiosInstance';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => Boolean(localStorage.getItem('access_token'))
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = useCallback(async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('token/', { username, password });
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      setIsLoggedIn(true);
      return true;
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.data?.detail ||
        'Login failed. Please check your credentials.';
      setError(msg);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const signup = useCallback(async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      await api.post('register/', { username, password });
      return true;
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.data?.detail ||
        'Registration failed. Please try again.';
      setError(msg);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setIsLoggedIn(false);
  }, []);

  return {
    data: { isLoggedIn },
    isLoggedIn,
    loading,
    error,
    login,
    signup,
    logout,
    setError,
  };
};

export default useAuth;
