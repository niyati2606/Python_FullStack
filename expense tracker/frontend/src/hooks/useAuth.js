import { useState, useCallback } from 'react';
import api from '../api/axiosInstance';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => Boolean(localStorage.getItem('token'))
  );
  const [user, setUser] = useState(
    () => localStorage.getItem('username') || ''
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = useCallback(async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('login/', { username, password });
      const { token, username: uname } = response.data;
      localStorage.setItem('token', token);
      if (uname) {
        localStorage.setItem('username', uname);
        setUser(uname);
      }
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

  const logout = useCallback(async () => {
    try {
      await api.post('logout/');
    } catch {
      // Ignore network/server errors during logout
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      setIsLoggedIn(false);
      setUser('');
    }
  }, []);

  return {
    data: { isLoggedIn, username: user },
    isLoggedIn,
    user,
    loading,
    error,
    login,
    signup,
    logout,
    setError,
  };
};

export default useAuth;
