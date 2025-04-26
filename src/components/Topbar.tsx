
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

type TopbarProps = {
  toggleTheme: () => void;
  theme: string;
};

function Topbar({ toggleTheme, theme }: TopbarProps) {
  return (
    <div className="bg-gradient-to-r  from-gray-800 via-gray-900 to-black py-6 px-8 shadow-lg border-b border-gray-700">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black px-8 py-6">
  <div className="text-center space-y-4">
    <h1 className="text-white text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
      AI Safety Incident Reporting Dashboard
    </h1>
    <p className="text-gray-300 text-lg sm:text-xl font-medium opacity-80">
      Monitor, report, and manage AI safety incidents with real-time tracking and intelligent insights.
    </p>
  </div>

        {/* Theme Toggle Button */}
        {/* <button
          onClick={toggleTheme}
          className="flex items-center justify-center p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-all duration-300"
        >
          {theme === 'dark' ? (
            <MoonIcon className="w-6 h-6 text-white" />
          ) : (
            <SunIcon className="w-6 h-6 text-white" />
          )}
        </button> */}
      </div>
    </div>
  );
}

export default Topbar;
