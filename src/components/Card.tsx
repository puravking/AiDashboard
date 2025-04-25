import React, { useState } from 'react';
import { Incident } from '../data/mockIncidents';
import { motion, AnimatePresence } from 'framer-motion';

type CardProps = {
  elem: Incident;
};

function Card({ elem }: CardProps) {
  const [showDetails, setShowDetails] = useState(false);
  const { title, description, severity, reported_at } = elem;

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const getSeverityColor = () => {
    if (severity === 'High') return 'text-red-600';
    if (severity === 'Medium') return 'text-yellow-500';
    return 'text-green-600';
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl w-full sm:w-80 p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">{new Date(reported_at).toLocaleDateString()}</p>
        <p className={`text-sm mt-2 font-medium ${getSeverityColor()}`}>{severity}</p>
      </div>

      <motion.button
        onClick={toggleDetails}
        whileTap={{ scale: 0.96 }}
        className="w-full text-sm py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition duration-200"
      >
        {showDetails ? 'Hide Details' : 'View Details'}
      </motion.button>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="mt-4 text-gray-700 dark:text-gray-300 text-sm"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Card;
