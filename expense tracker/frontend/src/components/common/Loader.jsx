export const Loader = ({ text = 'Loading...', size = '' }) => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-5">
      <div
        className={`spinner-border text-primary ${size ? `spinner-border-${size}` : ''}`}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      {text && <div className="mt-2 text-muted small">{text}</div>}
    </div>
  );
};

export default Loader;
