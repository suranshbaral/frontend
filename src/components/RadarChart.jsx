
import PropTypes from 'prop-types';
import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

const RadarChart = ({ data }) => {
  // Sample data for the radar chart
  const sampleData = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'English', A: 98, B: 130, fullMark: 150 },
    { subject: 'Science', A: 86, B: 130, fullMark: 150 },
    { subject: 'History', A: 99, B: 100, fullMark: 150 },
    { subject: 'Geography', A: 85, B: 90, fullMark: 150 },
    // Add more data as needed
  ];

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <RechartsRadarChart outerRadius={150} data={data || sampleData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
};

// PropTypes
RadarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      A: PropTypes.number.isRequired,
      B: PropTypes.number.isRequired,
      fullMark: PropTypes.number.isRequired,
    })
  ),
};

export default RadarChart;
