// Convert any amount string or value to a valid number
export const toAmountNumber = (val) => {
  const num = Number(val);
  return isNaN(num) ? 0 : num;
};

// Format numeric or string amount into Indian Rupee (₹) currency display
export const formatCurrency = (val) => {
  const num = toAmountNumber(val);
  return `₹${num.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

// Returns current month in YYYY-MM format
export const currentMonth = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
};
