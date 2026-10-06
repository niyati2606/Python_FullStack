import { useState, useEffect } from 'react';
import useSummary from '../hooks/useSummary';
import { currentMonth, formatCurrency } from '../utils/format';
import PageContainer from '../components/layout/PageContainer';
import MonthPicker from '../components/common/MonthPicker';
import AppCard from '../components/common/AppCard';
import AppAlert from '../components/common/AppAlert';
import Loader from '../components/common/Loader';
import EmptyState from '../components/common/EmptyState';
import CategoryPieChart from '../components/CategoryPieChart';

export const SummaryPage = () => {
  const [selectedMonth, setSelectedMonth] = useState(currentMonth());
  const { summary, loading, error, fetchSummary, setError } = useSummary();

  useEffect(() => {
    fetchSummary(selectedMonth);
  }, [fetchSummary, selectedMonth]);

  const hasData = summary && summary.by_category && summary.by_category.length > 0;

  const headerAction = (
    <MonthPicker
      value={selectedMonth}
      onChange={setSelectedMonth}
      label="Select Month"
    />
  );

  return (
    <PageContainer
      title="Expense Summary & Analytics"
      subtitle="View total expenditures and distribution across categories"
      action={headerAction}
    >
      <AppAlert
        variant="danger"
        message={error}
        onClose={() => setError(null)}
      />

      {loading && !hasData ? (
        <Loader text="Generating summary report..." />
      ) : (
        <div className="row g-4">
          {/* Total Spending Card */}
          <div className="col-12 col-md-4">
            <AppCard title="Monthly Spending" className="h-100">
              <div className="d-flex flex-column justify-content-center h-100 py-3">
                <span className="text-muted small text-uppercase fw-bold mb-1">
                  Total for {selectedMonth || 'All Time'}
                </span>
                <div className="display-5 fw-bold text-primary mb-2">
                  {formatCurrency(summary.total)}
                </div>
                <div className="text-secondary small">
                  Distributed across {summary.by_category?.length || 0} active{' '}
                  {summary.by_category?.length === 1 ? 'category' : 'categories'}.
                </div>
              </div>
            </AppCard>
          </div>

          {/* Category Pie Chart Card */}
          <div className="col-12 col-md-8">
            <AppCard title="Category Distribution" className="h-100">
              {!hasData ? (
                <EmptyState
                  message="No spending data for this period"
                  subtext="Add expenses for the selected month to see category breakdown."
                />
              ) : (
                <div className="row align-items-center">
                  <div className="col-12 col-lg-7">
                    <CategoryPieChart data={summary.by_category} />
                  </div>
                  <div className="col-12 col-lg-5">
                    <h6 className="fw-semibold text-secondary mb-3">
                      Breakdown Details
                    </h6>
                    <div className="list-group list-group-flush">
                      {summary.by_category.map((item, idx) => {
                        const percentage = summary.total > 0
                          ? ((item.total / summary.total) * 100).toFixed(1)
                          : '0.0';

                        return (
                          <div
                            key={idx}
                            className="list-group-item d-flex justify-content-between align-items-center px-0 py-2"
                          >
                            <div>
                              <div className="fw-semibold text-dark">
                                {item.category__name}
                              </div>
                              <span className="badge bg-light text-muted border">
                                {percentage}% of total
                              </span>
                            </div>
                            <span className="fw-bold text-dark">
                              {formatCurrency(item.total)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </AppCard>
          </div>
        </div>
      )}
    </PageContainer>
  );
};

export default SummaryPage;
