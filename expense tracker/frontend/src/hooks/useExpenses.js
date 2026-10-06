import { useState, useCallback } from 'react';
import api from '../api/axiosInstance';

export const useExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchExpenses = useCallback(async (month, category) => {
    setLoading(true);
    setError(null);
    try {
      const params = {};
      if (month) params.month = month;
      if (category) params.category = category;

      const response = await api.get('expenses/', { params });
      setExpenses(response.data);
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.data?.detail ||
        'Failed to fetch expenses.';
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  const addExpense = useCallback(async (expenseData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('expenses/', expenseData);
      setExpenses((prev) => [response.data, ...prev]);
      return response.data;
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.data?.detail ||
        'Failed to add expense.';
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const removeExpense = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await api.delete(`expenses/${id}/`);
      setExpenses((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        err.response?.data?.detail ||
        'Failed to delete expense.';
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data: expenses,
    expenses,
    loading,
    error,
    fetchExpenses,
    addExpense,
    removeExpense,
    setError,
  };
};

export default useExpenses;
