export const AppAlert = ({
  variant = 'danger',
  message,
  children,
  onClose,
  className = '',
}) => {
  const content = message || children;
  if (!content) return null;

  return (
    <div
      className={`alert alert-${variant} ${onClose ? 'alert-dismissible' : ''} ${className} fade show shadow-sm`}
      role="alert"
    >
      <div>{content}</div>
      {onClose && (
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
        />
      )}
    </div>
  );
};

export default AppAlert;
