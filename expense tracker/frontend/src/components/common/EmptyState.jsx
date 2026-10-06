export const EmptyState = ({
  message = 'No data available.',
  subtext = 'Try adjusting your filters or adding a new record.',
  action = null,
}) => {
  return (
    <div className="text-center py-5 px-3">
      <div className="display-6 text-muted mb-3">📁</div>
      <h6 className="fw-semibold text-secondary mb-1">{message}</h6>
      {subtext && <p className="text-muted small mb-3">{subtext}</p>}
      {action && <div>{action}</div>}
    </div>
  );
};

export default EmptyState;
