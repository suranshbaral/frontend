
import PropTypes from 'prop-types';
import {
  CartesianGrid,
  Tooltip,
  Scatter,
  ScatterChart as RechartsScatterChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

const ScatterChart = ({ data }) => {
  // Sample data for the scatter chart
  const sampleData = [
    { x: 10, y: 20 },
    { x: 20, y: 30 },
    { x: 30, y: 40 },
    { x: 40, y: 50 },
    { x: 50, y: 60 },
    // Add more data as needed
  ];

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <RechartsScatterChart
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="x" />
          <YAxis type="number" dataKey="y" name="y" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Data" data={data || sampleData} fill="#8884d8" />
        </RechartsScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

// PropTypes
ScatterChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    })
  ),
};

export default ScatterChart;
