import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import Form from './components/Form';
import Topbar from './components/Topbar';
import Content from './components/Content';

function App() {
  const [theme, setTheme] = useState('dark'); // Default theme is dark

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <RecoilRoot>
      <div
        className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100' : 'bg-gradient-to-br from-white via-gray-100 to-gray-200 text-gray-800'} transition-all duration-500`}
      >
        <Topbar toggleTheme={toggleTheme} theme={theme} />

        <main className="flex-1 container mx-auto px-4 sm:px-8 md:px-16 py-8 space-y-12">
          <Content />
          <Form />
        </main>

        <footer className="text-center text-gray-500 text-sm py-4 border-t border-gray-700">
          © 2025 AI Safety Incident Dashboard. All rights reserved.
        </footer>
      </div>
    </RecoilRoot>
  );
}

export default App;
