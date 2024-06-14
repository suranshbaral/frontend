
import PropTypes from 'prop-types';
import {
  Treemap as RechartsTreemap,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Treemap = ({ data }) => {
  // Sample data for the treemap
  const sampleData = [
    { name: 'A', size: 200 },
    { name: 'B', size: 150 },
    { name: 'C', size: 100 },
    // Add more data as needed
  ];

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <ResponsiveContainer width="100%" height={400}>
        <RechartsTreemap
          data={data || sampleData}
          dataKey="size"
          ratio={4 / 3}
          stroke="#fff"
          fill="#8884d8"
        >
          <Tooltip />
        </RechartsTreemap>
      </ResponsiveContainer>
    </div>
  );
};

// PropTypes
Treemap.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
    })
  ),
};

export default Treemap;

