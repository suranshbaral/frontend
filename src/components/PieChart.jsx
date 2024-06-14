import PropTypes from 'prop-types'; // Import PropTypes
import {
  PieChart as RechartsPieChart, // Rename imported PieChart
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts';

// Sample data
const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Component definition
const PieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsPieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

// Tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-slate-900 text-white rounded-md">
        <p className="text-lg font-semibold">{payload[0].name}</p>
        <p className="text-sm">${payload[0].value}</p>
      </div>
    );
  }
  return null; // Return null if not active
};

// Adding prop type validation
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

// Export the component as default
export default PieChart;
