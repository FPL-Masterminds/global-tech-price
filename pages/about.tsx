import React, { useMemo } from 'react';
import Link from 'next/link';
import VideoBackground from '@/components/VideoBackground';
import { VIDEO_POOL, PRODUCTS, MOCK_PRICES } from '@/constants';

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
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <VideoBackground src={aboutVideo} overlayOpacity={0.5} />
        
        <div className="relative z-10 px-8 w-full max-w-4xl text-center">
          <h1 className="text-[56px] md:text-[80px] font-semibold leading-[1.05] mb-6 tracking-tight">
            How It Works
          </h1>
          <p className="text-[24px] md:text-[32px] font-semibold text-white/90">
            Find the cheapest country to buy tech products. Live FX rates. Real savings.
          </p>
        </div>
      </header>

      {/* Content Section */}
      <section className="bg-black py-24">
        <div className="w-[87.5%] max-w-4xl mx-auto space-y-16 text-[18px] md:text-[20px] leading-relaxed">
          
          <div>
            <h2 className="text-[32px] md:text-[48px] font-semibold mb-8 text-white">Understanding the Price Grid</h2>
            <div className="space-y-6 text-white/80">
              <p>
                Tech products cost vastly different amounts around the world. A MacBook Pro might be $1,599 in the USA, but ¥248,800 in Japan, or £1,699 in the UK. Which is actually cheaper?
              </p>
              <p>
                Global Tech Price removes the guesswork. We convert all prices to a single currency using live exchange rates, so you can make instant comparisons across 35+ countries.
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-16">
            <h2 className="text-[32px] md:text-[48px] font-semibold mb-8 text-white">Reading the Data</h2>
            <div className="space-y-6 text-white/80">
              <div>
                <h3 className="text-[24px] font-semibold text-white mb-3">Currency Selector</h3>
                <p>Choose how you want to view prices: USD, GBP, EUR, or JPY. All prices will be converted to your selected currency using live exchange rates.</p>
              </div>
              <div>
                <h3 className="text-[24px] font-semibold text-white mb-3">Price Columns</h3>
                <p>See the official local price, tax status (VAT included or excluded), current FX rate, and the converted price in your chosen currency.</p>
              </div>
              <div>
                <h3 className="text-[24px] font-semibold text-white mb-3">Difference Columns</h3>
                <p>The "Diff vs" columns show how much you'd save or lose compared to buying in the baseline country.</p>
                <ul className="list-disc list-inside ml-6 mt-3 space-y-2">
                  <li><span className="text-green-500 font-semibold">Green numbers</span> mean that country is CHEAPER</li>
                  <li><span className="text-red-500 font-semibold">Red numbers</span> mean that country is MORE EXPENSIVE</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-16">
            <h2 className="text-[32px] md:text-[48px] font-semibold mb-8 text-white">Example: Shopping from Japan</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="text-white/80 mb-6">You live in Tokyo and want to buy a MacBook Pro 14" M4. Should you buy locally or import from the USA?</p>
              <div className="space-y-3 font-mono text-[16px]">
                <p><span className="text-white/60">Japan's Official Price:</span> <span className="text-white font-semibold">¥248,800</span></p>
                <p><span className="text-white/60">USA's Official Price:</span> <span className="text-white font-semibold">$1,599</span></p>
                <p><span className="text-white/60">Live Exchange Rate:</span> <span className="text-white font-semibold">1 USD = 148 JPY</span></p>
                <p className="pt-3 border-t border-white/20"><span className="text-white/60">USA Price Converted:</span> <span className="text-white font-semibold">¥236,652</span></p>
                <p className="text-[18px]"><span className="text-white/60">Potential Savings:</span> <span className="text-green-500 font-semibold">¥12,148 (about $82 USD)</span></p>
              </div>
              <p className="text-white/60 mt-6 text-[14px]">Note: Import duties, shipping, and local sales tax may apply. Always verify final costs.</p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-16">
            <h2 className="text-[32px] md:text-[48px] font-semibold mb-8 text-white">Who Uses This?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-white/80">
              <div>
                <h3 className="text-[20px] font-semibold text-white mb-3">International Travelers</h3>
                <p>Planning a trip? Find out if it's worth buying tech abroad and bringing it home.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-white mb-3">Expats & Digital Nomads</h3>
                <p>Living overseas? Compare your local prices to other markets before making a purchase.</p>
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-white mb-3">Smart Shoppers</h3>
                <p>Curious about global pricing? Track FX-driven arbitrage opportunities in real-time.</p>
              </div>
            </div>
          </div>

          <div className="pt-12 text-center">
            <Link 
              href="/" 
              className="inline-block px-12 py-4 rounded-full bg-white text-black font-semibold text-[18px] hover:bg-white/90 transition-all"
            >
              Start Comparing Prices
            </Link>
          </div>
        </div>
      </section>

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
