export const PageContainer = ({ title, subtitle, action, children }) => {
  return (
    <div className="container py-4">
      {(title || action) && (
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-2 mb-4 pb-2 border-bottom">
          <div>
            {title && <h2 className="fw-bold mb-1 text-dark">{title}</h2>}
            {subtitle && <p className="text-muted mb-0 small">{subtitle}</p>}
          </div>
          {action && <div className="d-flex align-items-center gap-2">{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
};

export default PageContainer;
