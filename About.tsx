import React, { useMemo } from 'react';
import VideoBackground from './components/VideoBackground';
import { VIDEO_POOL } from './constants';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const heroVideoPool = [
    VIDEO_POOL[1],  // #2
    VIDEO_POOL[6],  // #7
    VIDEO_POOL[7],  // #8
    VIDEO_POOL[8],  // #9
    VIDEO_POOL[9],  // #10
    VIDEO_POOL[10]  // #11
  ];

  const aboutVideo = useMemo(() => {
    return heroVideoPool[Math.floor(Math.random() * heroVideoPool.length)];
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section with Video */}
      <header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <VideoBackground src={aboutVideo} overlayOpacity={0.6} />
        
        <div className="relative z-10 px-8 w-full max-w-4xl text-center">
          <h1 className="text-[56px] md:text-[80px] font-semibold leading-[1.05] mb-6 tracking-tight">
            What You Actually Built
          </h1>
          <p className="text-[24px] md:text-[32px] font-semibold text-white/90 mb-20">
            A Live Currency Arbitrage Calculator
          </p>

          {/* Explanation Section */}
          <div className="text-left space-y-12 text-[18px] md:text-[20px] leading-relaxed">
            <div>
              <h2 className="text-[28px] font-semibold mb-4 text-white">How It Works</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  <span className="font-semibold text-white">The Currency Dropdown:</span> Changes your "viewfinder" - like putting on glasses that see the world in Yen, Dollars, Pounds, or Euros.
                </p>
                <p>
                  <span className="font-semibold text-white">"Price in [Currency]" Column:</span> Shows what THAT country's price looks like when converted to your selected currency (using live exchange rates updated hourly).
                </p>
                <p>
                  <span className="font-semibold text-white">"Diff vs [Country]" Columns:</span> Tell you "If I buy in THIS country instead of [baseline], how much MORE (+) or LESS (-) will I pay?"
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><span className="text-green-500 font-semibold">Green/Negative numbers</span> = CHEAPER than the baseline</li>
                  <li><span className="text-red-500 font-semibold">Red/Positive numbers</span> = MORE EXPENSIVE than the baseline</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/20 pt-12">
              <h2 className="text-[28px] font-semibold mb-4 text-white">Real Example</h2>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-white/80 mb-4">Let's say you live in Japan and you're shopping for a MacBook Pro 14" M4:</p>
                <div className="space-y-3 font-mono text-[16px]">
                  <p><span className="text-white/60">Japan's Official Price:</span> <span className="text-white font-semibold">¥248,800</span></p>
                  <p><span className="text-white/60">USA's Official Price:</span> <span className="text-white font-semibold">$1,599</span></p>
                  <p><span className="text-white/60">Current FX Rate:</span> <span className="text-white font-semibold">1 USD = 148 JPY</span></p>
                  <p className="pt-2 border-t border-white/20"><span className="text-white/60">USA Price in Yen:</span> <span className="text-white font-semibold">¥236,652</span></p>
                  <p><span className="text-white/60">Difference:</span> <span className="text-green-500 font-semibold">-¥12,148</span> <span className="text-white/60">(USA is ¥12k CHEAPER!)</span></p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-12">
              <h2 className="text-[28px] font-semibold mb-4 text-white">The Magic</h2>
              <p className="text-white/80 text-[22px] leading-relaxed">
                This tool answers a simple question: <span className="text-white font-semibold italic">"Where in the world should I buy this product to save money?"</span>
              </p>
              <p className="text-white/60 mt-4">
                Whether you're traveling, importing, or just curious about global tech pricing, we normalize prices across 35+ countries with live FX rates and tax transparency.
              </p>
            </div>

            <div className="pt-12 text-center">
              <Link 
                to="/" 
                className="inline-block px-12 py-4 rounded-full bg-white text-black font-semibold text-[18px] hover:bg-white/90 transition-all"
              >
                Start Comparing Prices
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="text-center text-white/40 text-[12px]">
          <p>© 2026 Global Tech Price. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
