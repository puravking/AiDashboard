import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useRecoilValue } from 'recoil';
import { totalIncidentsState, highSeverityCountState, mediumSeverityCountState, lowSeverityCountState } from '../state/atoms';

type TopbarProps = {
  toggleTheme: () => void;
  theme: string;
};

function Topbar({ toggleTheme, theme }: TopbarProps) {
  // Fetching the total incidents count and severity counts using Recoil's useRecoilValue
  const totalIncidents = useRecoilValue(totalIncidentsState);
  const highCount = useRecoilValue(highSeverityCountState);
  const mediumCount = useRecoilValue(mediumSeverityCountState);
  const lowCount = useRecoilValue(lowSeverityCountState);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black px-8 py-10 transition-all duration-300">
      <div className="text-center space-y-6">
        <h1 className="text-white text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
          AI Safety Incident Reporting Dashboard
        </h1>
        <p className="text-gray-300 text-lg sm:text-xl font-medium opacity-80">
          Monitor, report, and manage AI safety incidents with real-time tracking and intelligent insights.
        </p>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="bg-gray-700 rounded-lg p-5 w-48">
            <h2 className="text-white text-lg font-semibold">Total Incidents</h2>
            <p className="text-gray-300 text-3xl font-bold">{totalIncidents}</p>
          </div>
          <div className="bg-red-600 rounded-lg p-5 w-48">
            <h2 className="text-white text-lg font-semibold">High Severity</h2>
            <p className="text-white text-3xl font-bold">{highCount}</p>
          </div>
          <div className="bg-yellow-500 rounded-lg p-5 w-48">
            <h2 className="text-white text-lg font-semibold">Medium Severity</h2>
            <p className="text-white text-3xl font-bold">{mediumCount}</p>
          </div>
          <div className="bg-green-500 rounded-lg p-5 w-48">
            <h2 className="text-white text-lg font-semibold">Low Severity</h2>
            <p className="text-white text-3xl font-bold">{lowCount}</p>
          </div>
        </div>
      </div>

      {/* Optional Theme Toggle Button */}
      {/* <button
        onClick={toggleTheme}
        className="absolute top-5 right-5 p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-all duration-300"
      >
        {theme === 'dark' ? (
          <MoonIcon className="w-6 h-6" />
        ) : (
          <SunIcon className="w-6 h-6" />
        )}
      </button> */}
    </div>
  );
}

export default Topbar;
