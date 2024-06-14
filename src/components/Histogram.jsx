
import PropTypes from 'prop-types';
import {
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart as RechartsBarChart,
  ResponsiveContainer,
} from 'recharts';

const Histogram = ({ data }) => {
  // Sample data for the histogram
  const sampleData = [
    { bin: '0-10', count: 5 },
    { bin: '10-20', count: 10 },
    { bin: '20-30', count: 8 },
    { bin: '30-40', count: 15 },
    { bin: '40-50', count: 12 },
    // Add more data as needed
  ];

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <RechartsBarChart
          data={data || sampleData}
          margin={{ top: 20, right: 60, left: 30, bottom: 5 }}
        >
          <XAxis dataKey="bin" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="count" fill="#8884d8" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
};

// PropTypes
Histogram.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      bin: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ),
};

export default Histogram;
