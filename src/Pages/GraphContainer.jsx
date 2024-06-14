
import PropTypes from 'prop-types';
import { Bar, Line } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import PieChart from './PieChart';
import AreaChart from './AreaChart';
import Histogram from './Histogram';
import ScatterChart from './ScatterChart';
import RadarChart from './RadarChart';
import GeographyChart from './GeographyChart';
import Treemap from './TreeMap';

// Define the motion variants
const fadeIn = (direction, delay) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                delay: delay,
                duration: 0.75,
            },
        },
    };
};

const GraphContainer = ({ type, title, description, animationDirection = 'up', animationDelay = 0, ...props }) => {
    // Choose the correct graph component based on the type prop
    const renderGraph = () => {
        switch (type) {
            case 'bar':
                return <Bar {...props} />;
            case 'line':
                return <Line {...props} />;
            case 'pie':
                return <PieChart {...props} />;
            case 'area':
                return <AreaChart {...props} />;
            case 'histogram':
                return <Histogram {...props} />;
            case 'scatter':
                return <ScatterChart {...props} />;
            case 'radar':
                return <RadarChart {...props} />;
            case 'geography':
                return <GeographyChart {...props} />;
            case 'treemap':
                return <Treemap {...props} />;
            default:
                return <div>Invalid graph type</div>;
        }
    };

    return (
        <motion.div variants={fadeIn(animationDirection, animationDelay)} initial="hidden" animate="show" className="bg-white p-6 rounded-lg shadow-lg">
            {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
            {description && <p className="text-gray-600 mb-4">{description}</p>}
            <div className="w-full h-full">
                {renderGraph()}
            </div>
        </motion.div>
    );
};

// Define prop types
GraphContainer.propTypes = {
    type: PropTypes.oneOf([
        'bar', 'line', 'pie', 'area', 'histogram', 'scatter', 'radar', 'geography', 'treemap'
    ]).isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    animationDirection: PropTypes.oneOf(['up', 'down']),
    animationDelay: PropTypes.number
};

export default GraphContainer;
