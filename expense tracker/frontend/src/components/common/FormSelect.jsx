export const FormSelect = ({
  label,
  error,
  id,
  name,
  value,
  onChange,
  options = [],
  placeholder = 'Select an option',
  className = '',
  required = false,
  ...rest
}) => {
  const selectId = id || name;

  return (
    <div className="mb-3">
      {label && (
        <label htmlFor={selectId} className="form-label">
          {label} {required && <span className="text-danger">*</span>}
        </label>
      )}
      <select
        id={selectId}
        name={name}
        value={value ?? ''}
        onChange={onChange}
        className={`form-select ${error ? 'is-invalid' : ''} ${className}`}
        required={required}
        {...rest}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => {
          const optValue = opt.value !== undefined ? opt.value : opt.id;
          const optLabel = opt.label !== undefined ? opt.label : opt.name;
          return (
            <option key={optValue} value={optValue}>
              {optLabel}
            </option>
          );
        })}
      </select>
      {error && <div className="invalid-feedback d-block">{error}</div>}
    </div>
  );
};

export default FormSelect;
