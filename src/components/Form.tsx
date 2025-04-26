import { useState } from "react";
import { useRecoilState } from "recoil";
import { incidentsState } from "../state/atoms";
import { motion } from "framer-motion";

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");
  const [incidents, setIncidents] = useRecoilState(incidentsState);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !severity.trim()) {
      setError("All fields are required.");
      return;
    }

    setError("");

    const newIncident = {
      id: incidents.length + 1,
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };

    setIncidents((prev) => [...prev, newIncident]);
    setTitle("");
    setDescription("");
    setSeverity("");
  };

  return (
    <motion.div
      className="flex justify-center px-4 py-10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white w-full sm:w-[400px] rounded-2xl shadow-2xl p-6 space-y-4 border border-gray-200 dark:border-gray-700"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-semibold text-center">Report New Incident</h2>

        <motion.input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Incident Title"
          whileFocus={{ scale: 1.02 }}
          className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-gray-100 dark:bg-gray-800 ${error && !title ? "border-red-500" : "border-gray-300"}`}
        />

        <motion.textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Incident Description"
          rows={3}
          whileFocus={{ scale: 1.02 }}
          className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-gray-100 dark:bg-gray-800 resize-none ${error && !description ? "border-red-500" : "border-gray-300"}`}
        />

        <motion.select
          value={severity}
          onChange={(e) => setSeverity(e.target.value)}
          whileFocus={{ scale: 1.02 }}
          className={`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-gray-100 dark:bg-gray-800 ${error && !severity ? "border-red-500" : "border-gray-300"}`}
        >
          <option value="">Select Severity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </motion.select>

        {error && (
          <motion.p
            className="text-red-500 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.p>
        )}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300"
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default Form;
