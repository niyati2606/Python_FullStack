import { useState, useEffect } from 'react';
import useExpenses from '../hooks/useExpenses';
import useCategories from '../hooks/useCategories';
import { currentMonth } from '../utils/format';
import PageContainer from '../components/layout/PageContainer';
import MonthPicker from '../components/common/MonthPicker';
import FormSelect from '../components/common/FormSelect';
import AppCard from '../components/common/AppCard';
import AppAlert from '../components/common/AppAlert';
import Loader from '../components/common/Loader';
import EmptyState from '../components/common/EmptyState';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseTable from '../components/ExpenseTable';

export const ExpensesPage = () => {
  const [selectedMonth, setSelectedMonth] = useState(currentMonth());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [deletingId, setDeletingId] = useState(null);

  const {
    expenses,
    loading: expensesLoading,
    error: expensesError,
    fetchExpenses,
    addExpense,
    removeExpense,
    setError: setExpenseError,
  } = useExpenses();

  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
    fetchCategories,
    addCategory,
  } = useCategories();

  // Load categories once on mount
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Refetch expenses whenever month or category filter changes
  useEffect(() => {
    fetchExpenses(selectedMonth, selectedCategory);
  }, [fetchExpenses, selectedMonth, selectedCategory]);

  const handleAddExpense = async (formData) => {
    await addExpense(formData);
    // Refresh to ensure any server-side calculated fields / order are synced
    fetchExpenses(selectedMonth, selectedCategory);
  };

  const handleDeleteExpense = async (id) => {
    setDeletingId(id);
    try {
      await removeExpense(id);
    } finally {
      setDeletingId(null);
    }
  };

  const handleClearFilters = () => {
    setSelectedMonth('');
    setSelectedCategory('');
  };

  const headerFilters = (
    <div className="d-flex flex-wrap align-items-center gap-2">
      <MonthPicker
        value={selectedMonth}
        onChange={setSelectedMonth}
        label="Month"
      />
      <div style={{ minWidth: '160px' }}>
        <FormSelect
          id="filter-category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          options={categories.map((c) => ({ value: c.id, label: c.name }))}
          placeholder="All Categories"
          className="form-select-sm mb-0"
        />
      </div>
      {(selectedMonth || selectedCategory) && (
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm"
          onClick={handleClearFilters}
        >
          Reset Filters
        </button>
      )}
    </div>
  );

  return (
    <PageContainer
      title="Expense Management"
      subtitle="Track daily expenses, categorize transactions, and monitor spending"
      action={headerFilters}
    >
      <AppAlert
        variant="danger"
        message={expensesError || categoriesError}
        onClose={() => setExpenseError(null)}
      />

      <div className="row g-4">
        {/* Left Column: Add Expense Form */}
        <div className="col-12 col-lg-4">
          <AppCard title="Add New Expense">
            <ExpenseForm
              categories={categories}
              onSubmit={handleAddExpense}
              onAddCategory={addCategory}
              loading={expensesLoading}
            />
          </AppCard>
        </div>

        {/* Right Column: Expenses List */}
        <div className="col-12 col-lg-8">
          <AppCard
            title={`Expenses (${expenses.length})`}
            headerActions={
              expenses.length > 0 && (
                <span className="badge bg-secondary">
                  {selectedMonth ? `Month: ${selectedMonth}` : 'All Time'}
                </span>
              )
            }
          >
            {expensesLoading && expenses.length === 0 ? (
              <Loader text="Loading expenses..." />
            ) : expenses.length === 0 ? (
              <EmptyState
                message="No expenses found"
                subtext={
                  selectedMonth || selectedCategory
                    ? 'No records match the current filters. Try changing or clearing filters.'
                    : 'Get started by adding your first expense on the left.'
                }
              />
            ) : (
              <ExpenseTable
                expenses={expenses}
                onDelete={handleDeleteExpense}
                deletingId={deletingId}
              />
            )}
          </AppCard>
        </div>
      </div>
    </PageContainer>
  );
};

export default ExpensesPage;
