import { useState, useCallback } from 'react';
import api from '../api/axiosInstance';

export const useSummary = () => {
  const [summary, setSummary] = useState({ total: 0, by_category: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSummary = useCallback(async (month) => {
    setLoading(true);
    setError(null);
    try {
      const params = month ? { month } : {};
      const response = await api.get('summary/', { params });
      setSummary(response.data);
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.data?.detail ||
        'Failed to fetch expense summary.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data: summary,
    summary,
    loading,
    error,
    fetchSummary,
    setError,
  };
};

export default useSummary;
