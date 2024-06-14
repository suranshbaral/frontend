
import PropTypes from 'prop-types';
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Heatmap,
  HeatmapChart as RechartsHeatmapChart,
  ResponsiveContainer,
} from 'recharts';

const HeatMap = ({ data }) => {
  // Sample data for the heatmap chart
  const sampleData = [
    { x: 'Monday', y: 'Morning', value: 20 },
    { x: 'Monday', y: 'Afternoon', value: 25 },
    { x: 'Monday', y: 'Evening', value: 30 },
    { x: 'Tuesday', y: 'Morning', value: 22 },
    { x: 'Tuesday', y: 'Afternoon', value: 27 },
    { x: 'Tuesday', y: 'Evening', value: 32 },
    // Add more data as needed
  ];

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <RechartsHeatmapChart data={data || sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis dataKey="y" />
          <Tooltip />
          <Legend />
          <Heatmap dataKey="value" />
        </RechartsHeatmapChart>
      </ResponsiveContainer>
    </div>
  );
};

// PropTypes
HeatMap.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.string.isRequired,
      y: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

export default HeatMap;
