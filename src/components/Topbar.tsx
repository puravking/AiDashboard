import React from 'react';

function Topbar() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 transition-all duration-500 py-5 px-4 shadow-xl border-b border-blue-400/30">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-lg">
          AI Safety Incident Dashboard
        </h1>
        <p className="text-white text-sm sm:text-base mt-2 font-medium opacity-90">
          Monitor, Report, and Track AI Safety Concerns
        </p>
      </div>
    </div>
  );
}

export default Topbar;
