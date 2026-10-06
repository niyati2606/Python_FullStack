import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { formatCurrency } from '../utils/format';

const COLORS = [
  '#0d6efd',
  '#198754',
  '#fd7e14',
  '#dc3545',
  '#0dcaf0',
  '#6610f2',
  '#ffc107',
  '#20c997',
  '#6c757d',
];

export const CategoryPieChart = ({ data = [] }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const chartData = data.map((item) => ({
    name: item.category__name || 'Uncategorized',
    value: Number(item.total) || 0,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const entry = payload[0];
      return (
        <div className="bg-white p-2 border rounded shadow-sm">
          <p className="mb-0 fw-semibold text-dark">{entry.name}</p>
          <p className="mb-0 text-primary small">
            {formatCurrency(entry.value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', height: 320 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={45}
            paddingAngle={3}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value) => (
              <span className="text-secondary small">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryPieChart;
