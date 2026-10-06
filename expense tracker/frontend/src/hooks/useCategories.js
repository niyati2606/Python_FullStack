import { useState, useCallback } from 'react';
import api from '../api/axiosInstance';

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('categories/');
      setCategories(response.data);
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.data?.detail ||
        'Failed to fetch categories.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  const addCategory = useCallback(async (name) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('categories/', { name });
      setCategories((prev) => [...prev, response.data]);
      return response.data;
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.data?.detail ||
        'Failed to add category.';
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data: categories,
    categories,
    loading,
    error,
    fetchCategories,
    addCategory,
    setError,
  };
};

export default useCategories;
