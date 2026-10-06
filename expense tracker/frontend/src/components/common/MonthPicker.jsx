export const MonthPicker = ({
  value,
  onChange,
  label = 'Select Month',
  id = 'month-picker',
}) => {
  return (
    <div className="d-flex align-items-center gap-2">
      {label && (
        <label htmlFor={id} className="form-label mb-0 fw-semibold text-secondary text-nowrap">
          {label}:
        </label>
      )}
      <input
        type="month"
        id={id}
        className="form-control form-control-sm"
        style={{ maxWidth: '180px' }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default MonthPicker;
