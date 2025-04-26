import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { incidentsState } from "../state/atoms";
import Card from "./Card";
import { Incident } from "../data/mockIncidents";
import { motion } from "framer-motion";

function Content() {
  const allIncidents = useRecoilValue(incidentsState);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");

  const filtered = allIncidents.filter((incident) => {
    return filter === "All" || incident.severity === filter;
  });

  const sorted = filtered.sort((a: Incident, b: Incident) => {
    const dateA = new Date(a.reported_at).getTime();
    const dateB = new Date(b.reported_at).getTime();
    return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="p-6 max-w-screen-xl mx-auto bg-gray-900 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <motion.select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          whileTap={{ scale: 0.97 }}
        >
          <option value="All">All Severities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </motion.select>

        <motion.select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          whileTap={{ scale: 0.97 }}
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </motion.select>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {sorted.map((elem) => (
          <Card key={elem.id} elem={elem} />
        ))}
      </motion.div>
    </div>
  );
}

export default Content;
