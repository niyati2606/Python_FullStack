export const FormInput = ({
  label,
  error,
  id,
  name,
  type = 'text',
  value,
  onChange,
  className = '',
  required = false,
  placeholder = '',
  ...rest
}) => {
  const inputId = id || name;

  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={inputId} className="form-label">
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        value={value ?? ''}
        onChange={onChange}
        className={`form-control ${error ? 'is-invalid' : ''} ${className}`}
        required={required}
        placeholder={placeholder}
        {...rest}
      />
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
};

export default FormInput;
