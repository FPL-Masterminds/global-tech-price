
import React, { useState, useEffect, useMemo } from 'react';
import VideoBackground from './components/VideoBackground';
import { VIDEO_POOL, PRODUCTS, MOCK_PRICES } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [includeTaxes, setIncludeTaxes] = useState(true);

  // Randomly select videos for different sections on mount
  // Curated hero videos: #2, #7, #8, #9, #10, #11
  const heroVideoPool = [
    VIDEO_POOL[1],  // #2
    VIDEO_POOL[6],  // #7
    VIDEO_POOL[7],  // #8
    VIDEO_POOL[8],  // #9
    VIDEO_POOL[9],  // #10
    VIDEO_POOL[10]  // #11
  ];

  const sectionVideos = useMemo(() => {
    const randomHero = heroVideoPool[Math.floor(Math.random() * heroVideoPool.length)];
    return {
      hero: randomHero,  // Random from curated favorites
      grid: VIDEO_POOL[1],
      card1: VIDEO_POOL[2],
      card2: VIDEO_POOL[3],
      footer: VIDEO_POOL[4]  // Video #5 (LOCKED - always footer)
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-[#F5F5F7] selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 h-[44px] glass-nav z-[9999] flex items-center justify-center">
        <div className="w-[87.5%] max-w-[1024px] flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <svg className="w-[14px] fill-[#F5F5F7] opacity-80" viewBox="0 0 170 170">
              <path d="M150.37,130.25c-2.45,5.66-5.35,10.87-8.71,15.66c-4.58,6.53-8.33,11.05-11.22,13.56c-4.48,4.12-9.28,6.23-14.42,6.35c-3.69,0-8.14-1.05-13.32-3.18c-5.19-2.12-9.97-3.18-14.35-3.18c-4.58,0-9.43,1.06-14.55,3.18c-5.12,2.12-9.27,3.26-12.46,3.41c-5.19,0.38-10.27-1.58-15.23-5.87c-3.14-2.71-7.22-7.57-12.24-14.58c-5.02-7.01-9-14.75-11.95-23.21C8.94,103.68,7.47,91.95,7.47,81.42c0-11.75,2.46-21.73,7.38-29.94c4.92-8.21,11.52-14.61,19.8-19.2c8.28-4.59,17.2-6.89,26.77-6.89c4.27,0,9.27,0.96,15.01,2.87c5.73,1.91,10,2.87,12.8,2.87c2.31,0,7.1-1.2,14.35-3.59c7.26-2.39,13.43-3.46,18.52-3.18c14.24,0.76,25.26,6.13,33.06,16.12c-11.75,7.1-17.63,17.25-17.63,30.43c0,10.61,3.77,19.64,11.31,27.09C136.19,108.45,142.16,113.88,149.25,117.5C150.21,122.2,150.59,126.45,150.37,130.25z M115.39,5.34c0,9.15-3.37,17.68-10.12,25.59c-7.22,8.44-16.12,13.56-25.79,12.35c-0.12-0.88-0.18-2.12-0.18-3.72c0-8.91,3.69-17.92,11.07-27.03c4.12-5.09,9.25-9.15,15.39-12.18C111.9,1.13,115.39,0,115.39,0C115.52,2.02,115.39,3.8,115.39,5.34z" />
            </svg>
            <div className="hidden md:flex space-x-6 text-[12px] font-semibold text-white/80">
              <a href="#" className="hover:text-white transition-colors">Store</a>
              <a href="#" className="hover:text-white transition-colors">Mac</a>
              <a href="#" className="hover:text-white transition-colors">iPhone</a>
              <a href="#" className="hover:text-white transition-colors">Watch</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <VideoBackground src={sectionVideos.hero} overlayOpacity={0.5} />
        
        <div className="relative z-10 text-center px-4 w-[87.5%] max-w-[1024px]">
          <h1 className="text-[48px] md:text-[80px] font-semibold leading-[1.05] mb-6 tracking-tight">
            Global Tech <br /> Price Index
          </h1>
          <p className="text-[18px] md:text-[22px] font-semibold text-white/90 max-w-[500px] mx-auto mb-10">
            Live FX & Tax Data. Find the best country to buy your next Tech product.
          </p>
          
          {/* Controls Glass Card */}
          <div className="glass-card rounded-[28px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 backdrop-blur-[20px]">
            <div className="flex flex-col items-start">
              <label className="text-[12px] font-semibold text-white/60 mb-2 uppercase tracking-wider">Product</label>
              <select 
                value={selectedProduct.id}
                onChange={(e) => setSelectedProduct(PRODUCTS.find(p => p.id === e.target.value) || PRODUCTS[0])}
                className="bg-transparent text-[18px] font-semibold border-b border-white/20 pb-1 focus:outline-none cursor-pointer"
              >
                {PRODUCTS.map(p => (
                  <option key={p.id} value={p.id} className="bg-neutral-900">{p.name}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col items-start">
              <label className="text-[12px] font-semibold text-white/60 mb-2 uppercase tracking-wider">Currency</label>
              <div className="text-[18px] font-semibold border-b border-white/20 pb-1">USD</div>
            </div>

            <div className="flex flex-col items-start">
              <label className="text-[12px] font-semibold text-white/60 mb-2 uppercase tracking-wider">Include Taxes</label>
              <div className="flex items-center space-x-3">
                <span className={`text-[14px] ${!includeTaxes ? 'text-white' : 'text-white/40'}`}>Net</span>
                <button 
                  onClick={() => setIncludeTaxes(!includeTaxes)}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${includeTaxes ? 'bg-white' : 'bg-white/20'}`}
                >
                  <div className={`w-4 h-4 rounded-full transition-transform duration-300 ${includeTaxes ? 'translate-x-6 bg-black' : 'translate-x-0 bg-white'}`} />
                </button>
                <span className={`text-[14px] ${includeTaxes ? 'text-white' : 'text-white/40'}`}>Gross</span>
              </div>
            </div>

            <button className="h-[56px] px-8 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all">
              Download CSV
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid Section */}
      <section className="bg-black py-[124px] flex flex-col items-center">
        <div className="w-[87.5%] max-w-[1400px]">
          <h2 className="text-[32px] md:text-[56px] font-semibold mb-16 text-center text-white">Global Comparison</h2>
          
          <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-3 px-6 min-w-[80px] text-[11px] font-semibold text-gray-500 uppercase tracking-wider sticky left-0 z-20 bg-gray-50">Flag</th>
                  <th className="py-3 px-6 min-w-[140px] text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Country</th>
                  <th className="py-3 px-6 min-w-[140px] text-[11px] font-semibold text-gray-500 uppercase tracking-wider text-right">Official Price</th>
                  <th className="py-3 px-6 min-w-[120px] text-[11px] font-semibold text-gray-500 uppercase tracking-wider text-center">Tax Status</th>
                  <th className="py-3 px-6 min-w-[160px] text-[11px] font-semibold text-gray-500 uppercase tracking-wider text-right">FX Rate</th>
                  <th className="py-3 px-6 min-w-[140px] text-[11px] font-semibold text-gray-500 uppercase tracking-wider text-right">Price in USD</th>
                  <th className="py-3 px-6 min-w-[120px] text-[11px] font-semibold text-gray-500 uppercase tracking-wider text-right">Diff vs US</th>
                  <th className="py-3 px-6 min-w-[140px] text-[11px] font-semibold text-gray-500 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_PRICES.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 sticky left-0 z-10 bg-white hover:bg-gray-50 border-r border-gray-100">
                      <img 
                        src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`}
                        alt={`${item.country} flag`}
                        className="w-8 h-6 object-cover rounded shadow-sm"
                      />
                    </td>
                    <td className="py-4 px-6 text-[14px] font-semibold text-gray-900">{item.country}</td>
                    <td className="py-4 px-6 text-[14px] font-normal text-gray-700 text-right">{item.officialPrice}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="px-2 py-1 rounded text-[11px] font-semibold bg-gray-100 text-gray-700 whitespace-nowrap">
                        {item.taxStatus}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-[13px] font-normal text-gray-500 text-right whitespace-nowrap">{item.fxRate}</td>
                    <td className="py-4 px-6 text-[16px] font-semibold text-gray-900 text-right whitespace-nowrap">${item.priceInUsd.toLocaleString()}</td>
                    <td className="py-4 px-6 text-[14px] font-semibold text-right whitespace-nowrap" style={{ color: item.vsUsPrice.startsWith('+') && item.vsUsPrice !== '+$0' ? '#dc2626' : item.vsUsPrice === '+$0' ? '#6b7280' : '#16a34a' }}>
                      {item.vsUsPrice}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button className="px-5 py-2 rounded-md text-[12px] font-semibold bg-black text-white hover:bg-gray-800 transition-all whitespace-nowrap">
                        Check Store
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="mt-8 text-center text-[12px] text-white/60 italic">
            Exchange rates and prices are for reference only. Tax rates may vary by region. Always check the official store for current pricing.
          </p>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="bg-black py-[124px] flex flex-col items-center">
        <div className="w-[87.5%] max-w-[800px]">
          <h2 className="text-[32px] md:text-[48px] font-semibold mb-12 text-center">Price Index FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "How are tax-inclusive prices calculated?", a: "We apply the standard VAT, GST, or Sales Tax rates for each country as of the current date. For the US and Canada, we use the average state/provincial sales tax as base." },
              { q: "Can I get a tax refund as a tourist?", a: "Yes, many countries allow foreign residents to claim back VAT or GST at the airport. Our index labels these countries clearly to help you maximize savings." },
              { q: "How often is the currency data updated?", a: "Currency exchange rates are pulled from ECB and local central banks every 15 minutes to ensure the USD equivalent remains accurate." }
            ].map((faq, idx) => (
              <details key={idx} className="group glass-card rounded-[18px] p-6 border border-white/5 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-[20px] list-none">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-180">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-white/60 leading-relaxed text-[18px]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black py-[160px] flex flex-col items-center overflow-hidden">
        <VideoBackground src={sectionVideos.footer} overlayOpacity={0.8} />
        <div className="relative z-10 w-[87.5%] max-w-[1024px] text-center">
          <h2 className="text-[32px] md:text-[56px] font-semibold mb-12">Apple Pricing Index</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left text-[14px] text-white/60 mb-20">
            <div>
              <h4 className="text-white font-semibold mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Pricing Data</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Global Maps</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trend Reports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">API Access</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Integrity</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Social</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 text-[12px] text-white/40 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p>Copyright © 2024 Apple Pricing Index Noir. All rights reserved.</p>
            <p>Made with minimalist precision for global shoppers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
