// import  { useState } from 'react';
import { RecoilRoot } from 'recoil';
import Form from './components/Form';
import Topbar from './components/Topbar';
import Content from './components/Content';
import Particles from './components/Particles';
import Ribbons from './components/Ribbons';

function App() {
  // const [theme, setTheme] = useState('dark');

  // const toggleTheme = () => {
  //   setTheme(theme === 'dark' ? 'light' : 'dark');
  // };

  return (
    <RecoilRoot>
      {/* Outer wrapper with shared background */}
      <div
      >
        {/* Topbar */}
        <Topbar />

        {/* Background effects (Particles + Ribbons) */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
          <div
            style={{
              height: '100vh',
              width: '100vw',
              position: 'absolute',
              top: 0,
              left: 0,
              overflow: 'hidden',
            }}
          >
            <Ribbons
              baseThickness={30}
              colors={['#ffffff']}
              speedMultiplier={0.5}
              maxAge={500}
              enableFade={false}
              enableShaderEffect={true}
            />
            
          </div>
          
          
        </div>

        {/* Main content */}
        <main className="flex-1 relative z-10 container mx-auto px-4 sm:px-8 md:px-16 py-8 space-y-12">
        <Content />
        <Form />
        </main>

        {/* Footer */}
        <footer className="relative z-10 text-center text-gray-500 text-sm py-4 border-t border-gray-700">
          © 2025 AI Safety Incident Dashboard. All rights reserved.
        </footer>
      </div>
    </RecoilRoot>
  );
}

export default App;
