import { formatCurrency } from '../utils/format';
import AppButton from './common/AppButton';

export const ExpenseTable = ({ expenses = [], onDelete, deletingId }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover align-middle mb-0">
        <thead className="table-light">
          <tr>
            <th scope="col" style={{ width: '15%' }}>Date</th>
            <th scope="col" style={{ width: '30%' }}>Title</th>
            <th scope="col" style={{ width: '20%' }}>Category</th>
            <th scope="col" style={{ width: '20%' }} className="text-end">Amount</th>
            <th scope="col" style={{ width: '15%' }} className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            const hasCategory = Boolean(expense.category_name && expense.category_name !== 'Uncategorized');

            return (
              <tr key={expense.id}>
                <td className="text-nowrap text-secondary small">{expense.date}</td>
                <td>
                  <div className="fw-semibold text-dark">{expense.title}</div>
                  {expense.note && (
                    <div className="text-muted small">{expense.note}</div>
                  )}
                </td>
                <td>
                  <span
                    className={`badge ${
                      hasCategory
                        ? 'bg-primary-subtle text-primary border border-primary-subtle'
                        : 'bg-light text-secondary border'
                    }`}
                  >
                    {expense.category_name || 'Uncategorized'}
                  </span>
                </td>
                <td className="text-end fw-bold text-dark text-nowrap">
                  {formatCurrency(expense.amount)}
                </td>
                <td className="text-center">
                  <AppButton
                    variant="outline-danger"
                    className="btn-sm"
                    loading={deletingId === expense.id}
                    onClick={() => onDelete(expense.id)}
                    title="Delete Expense"
                  >
                    Delete
                  </AppButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
