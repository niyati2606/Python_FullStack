import { useState } from 'react';
import useForm from '../hooks/useForm';
import FormInput from './common/FormInput';
import FormSelect from './common/FormSelect';
import AppButton from './common/AppButton';
import AppAlert from './common/AppAlert';

const getTodayString = () => new Date().toISOString().split('T')[0];

export const ExpenseForm = ({
  categories = [],
  onSubmit,
  onAddCategory,
  loading = false,
}) => {
  const [newCatName, setNewCatName] = useState('');
  const [showNewCatInput, setShowNewCatInput] = useState(false);
  const [addingCat, setAddingCat] = useState(false);
  const [formError, setFormError] = useState(null);

  const { values, handleChange, reset, setValues } = useForm({
    title: '',
    amount: '',
    category: '',
    date: getTodayString(),
    note: '',
  });

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    setAddingCat(true);
    setFormError(null);
    try {
      const created = await onAddCategory(newCatName.trim());
      setNewCatName('');
      setShowNewCatInput(false);
      // Select newly created category
      setValues((prev) => ({ ...prev, category: String(created.id) }));
    } catch (err) {
      setFormError('Failed to create category.');
    } finally {
      setAddingCat(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!values.title.trim()) {
      setFormError('Title is required.');
      return;
    }

    if (!values.amount || Number(values.amount) <= 0) {
      setFormError('Please enter a valid positive amount.');
      return;
    }

    if (!values.date) {
      setFormError('Date is required.');
      return;
    }

    try {
      await onSubmit({
        title: values.title.trim(),
        amount: values.amount,
        category: values.category ? Number(values.category) : null,
        date: values.date,
        note: values.note.trim(),
      });

      reset({
        title: '',
        amount: '',
        category: '',
        date: getTodayString(),
        note: '',
      });
    } catch (err) {
      setFormError(err.response?.data?.error || 'Failed to submit expense.');
    }
  };

  return (
    <div>
      <AppAlert
        variant="danger"
        message={formError}
        onClose={() => setFormError(null)}
      />

      <form onSubmit={handleSubmit}>
        <div className="row g-2">
          <div className="col-12 col-md-6">
            <FormInput
              label="Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              placeholder="e.g. Grocery Shopping"
              required
            />
          </div>

          <div className="col-12 col-md-6">
            <FormInput
              label="Amount (₹)"
              name="amount"
              type="number"
              step="0.01"
              min="0"
              value={values.amount}
              onChange={handleChange}
              placeholder="e.g. 250.00"
              required
            />
          </div>

          <div className="col-12 col-md-6">
            <FormSelect
              label="Category"
              name="category"
              value={values.category}
              onChange={handleChange}
              options={categories.map((c) => ({ value: c.id, label: c.name }))}
              placeholder="-- Select Category (Optional) --"
            />
            <div className="text-end mt-n2 mb-2">
              <button
                type="button"
                className="btn btn-link btn-sm text-decoration-none p-0"
                onClick={() => setShowNewCatInput(!showNewCatInput)}
              >
                {showNewCatInput ? '− Cancel new category' : '+ Add new category'}
              </button>
            </div>

            {showNewCatInput && (
              <div className="d-flex gap-2 mb-3">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="New category name"
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                />
                <AppButton
                  variant="outline-secondary"
                  className="btn-sm text-nowrap"
                  loading={addingCat}
                  onClick={handleCreateCategory}
                >
                  Save
                </AppButton>
              </div>
            )}
          </div>

          <div className="col-12 col-md-6">
            <FormInput
              label="Date"
              name="date"
              type="date"
              value={values.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <FormInput
              label="Note (Optional)"
              name="note"
              value={values.note}
              onChange={handleChange}
              placeholder="Optional notes or details"
            />
          </div>
        </div>

        <div className="mt-3 text-end">
          <AppButton type="submit" variant="primary" loading={loading}>
            Add Expense
          </AppButton>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
