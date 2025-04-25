import React from 'react';
import Form from './components/Form';
import Topbar from './components/Topbar';
import Content from './components/Content';
import { RecoilRoot } from 'recoil';
// import gab from './images/gabriele-malaspina-CjWsslYVnPI-unsplash.jpg'; // ✅ Make sure ima.js exports a valid image path or use a direct path

function App() {
  return (
    <RecoilRoot>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Topbar />

        <div className="flex justify-center">
          {/* <img
            src={gab}
            alt="AI Illustration"
            className="opacity- w-full max-w-5xl object-cover rounded-xl shadow-md mx-4 mt-6"
          /> */}
        </div>

        <div className="px-4 sm:px-8 md:px-16 py-8 space-y-12">
          <Content />
          <Form />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
