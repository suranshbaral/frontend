
import PropTypes from 'prop-types'; // Import PropTypes
import {
  AreaChart as RechartsAreaChart, // Rename imported AreaChart
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

// Sample data for the chart
const data = [
  { name: 'Jan', product1: 4000, product2: 2400 },
  { name: 'Feb', product1: 3000, product2: 2210 },
  { name: 'Mar', product1: 2000, product2: 2290 },
  { name: 'Apr', product1: 2780, product2: 2000 },
  { name: 'May', product1: 1890, product2: 2181 },
  { name: 'Jun', product1: 2390, product2: 2500 },
];

const AreaChart = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <RechartsAreaChart // Use the renamed imported AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="product1"
            stroke="#2563eb"
            fill="#3b82f6"
            stackId="1"
          />
          <Area
            type="monotone"
            dataKey="product2"
            stroke="#7c3aed"
            fill="#8b5cf6"
            stackId="1"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 text-white rounded-md shadow-lg">
        <p className="text-lg font-semibold">{label}</p>
        <div className="mt-2 space-y-1">
          {payload.map((data, index) => (
            <p key={index} className="text-sm" style={{ color: data.color }}>
              {data.name}: <span className="font-bold">${data.value}</span>
            </p>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

// Adding active to props validation
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string,
};

export default AreaChart;