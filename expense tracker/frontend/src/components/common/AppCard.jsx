export const AppCard = ({
  title,
  children,
  className = '',
  headerActions,
  footer,
}) => {
  return (
    <div className={`card shadow-sm border-0 ${className}`}>
      {(title || headerActions) && (
        <div className="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
          {title && <h5 className="card-title mb-0 fw-semibold text-dark">{title}</h5>}
          {headerActions && <div>{headerActions}</div>}
        </div>
      )}
      <div className="card-body p-4">{children}</div>
      {footer && <div className="card-footer bg-light border-top">{footer}</div>}
    </div>
  );
};

export default AppCard;
