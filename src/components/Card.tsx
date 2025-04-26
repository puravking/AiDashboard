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
    if (severity === 'High') return 'bg-red-400';
    if (severity === 'Medium') return 'bg-yellow-400';
    return 'bg-green-400';
  };

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-4 transition-transform transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
          {new Date(reported_at).toLocaleDateString()}
        </p>
        <p
          className={`text-sm font-semibold mt-2 text-white px-3 w-19 py-1 rounded-full ${getSeverityColor()}`}
        >
          {severity}
        </p>
      </div>

      <motion.button
        onClick={toggleDetails}
        className="flex items-center justify-center w-full text-sm py-2 px-4 mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200"
        whileTap={{ scale: 0.95 }}
      >
        {showDetails ? 'Hide Details' : 'View Details'}
      </motion.button>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            className="mt-4 text-gray-700 dark:text-gray-300 text-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
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
