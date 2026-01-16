
import React, { useState, useEffect, useMemo } from 'react';
import VideoBackground from './components/VideoBackground';
import { VIDEO_POOL, PRODUCTS, MOCK_PRICES } from './constants';
import { Product } from './types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
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
              <select 
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="bg-transparent text-[18px] font-semibold border-b border-white/20 pb-1 focus:outline-none cursor-pointer"
              >
                <option value="USD" className="bg-neutral-900">USD</option>
                <option value="GBP" className="bg-neutral-900">GBP</option>
                <option value="EUR" className="bg-neutral-900">EUR</option>
                <option value="JPY" className="bg-neutral-900">JPY</option>
              </select>
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

      {/* Main Grid Section - iTunes 2005 Style */}
      <section className="bg-black py-[124px] flex flex-col items-center">
        <div className="w-[87.5%] max-w-[1400px]">
          <h2 className="text-[32px] md:text-[56px] font-semibold mb-16 text-center text-white">Global Comparison</h2>
          
          <div className="overflow-x-auto rounded-lg shadow-2xl" style={{ background: 'linear-gradient(180deg, #e8e8e8 0%, #d0d0d0 50%, #c0c0c0 100%)', border: '1px solid #999' }}>
            <table className="w-full text-left border-collapse" style={{ fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', sans-serif" }}>
              <thead>
                <tr style={{ background: 'linear-gradient(180deg, #f8f8f8 0%, #e0e0e0 100%)', borderBottom: '1px solid #999', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)' }}>
                  <th className="py-2 px-4 min-w-[80px] text-[11px] font-bold text-gray-700 uppercase tracking-wider sticky left-0 z-20" style={{ background: 'linear-gradient(180deg, #f8f8f8 0%, #e0e0e0 100%)', borderRight: '1px solid #bbb' }}>Flag</th>
                  <th className="py-2 px-4 min-w-[140px] text-[11px] font-bold text-gray-700 uppercase tracking-wider" style={{ borderRight: '1px solid #bbb' }}>Country</th>
                  <th className="py-2 px-4 min-w-[140px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-right" style={{ borderRight: '1px solid #bbb' }}>Official Price</th>
                  <th className="py-2 px-4 min-w-[120px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center" style={{ borderRight: '1px solid #bbb' }}>Tax Status</th>
                  <th className="py-2 px-4 min-w-[160px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-right" style={{ borderRight: '1px solid #bbb' }}>FX Rate</th>
                  <th className="py-2 px-4 min-w-[140px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-right" style={{ borderRight: '1px solid #bbb' }}>Price in USD</th>
                  <th className="py-2 px-4 min-w-[120px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-right" style={{ borderRight: '1px solid #bbb' }}>Diff vs US</th>
                  <th className="py-2 px-4 min-w-[120px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-right" style={{ borderRight: '1px solid #bbb' }}>Diff vs UK</th>
                  <th className="py-2 px-4 min-w-[140px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-right">Action</th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', sans-serif" }}>
                {MOCK_PRICES.map((item, idx) => (
                  <tr key={idx} className="transition-all cursor-pointer" style={{ 
                    background: idx % 2 === 0 ? '#fff' : '#f5f5f5',
                    borderBottom: '1px solid #ddd'
                  }} onMouseEnter={(e) => e.currentTarget.style.background = '#3478F6'} onMouseLeave={(e) => e.currentTarget.style.background = idx % 2 === 0 ? '#fff' : '#f5f5f5'}>
                    <td className="py-3 px-4 sticky left-0 z-10" style={{ background: idx % 2 === 0 ? '#fff' : '#f5f5f5', borderRight: '1px solid #ddd' }}>
                      <img 
                        src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`}
                        alt={`${item.country} flag`}
                        className="w-8 h-6 object-cover rounded shadow-sm"
                      />
                    </td>
                    <td className="py-3 px-4 text-[11px] font-normal text-gray-900" style={{ borderRight: '1px solid #ddd' }}>{item.country}</td>
                    <td className="py-3 px-4 text-[11px] font-normal text-gray-800 text-right" style={{ borderRight: '1px solid #ddd' }}>{item.officialPrice}</td>
                    <td className="py-3 px-4 text-center" style={{ borderRight: '1px solid #ddd' }}>
                      <span className="px-2 py-0.5 rounded text-[10px] font-normal bg-white/60 text-gray-700 whitespace-nowrap" style={{ border: '1px solid #ccc' }}>
                        {item.taxStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[11px] font-normal text-gray-700 text-right whitespace-nowrap" style={{ borderRight: '1px solid #ddd' }}>{item.fxRate}</td>
                    <td className="py-3 px-4 text-[11px] font-bold text-gray-900 text-right whitespace-nowrap" style={{ borderRight: '1px solid #ddd' }}>${item.priceInUsd.toLocaleString()}</td>
                    <td className="py-3 px-4 text-[11px] font-semibold text-right whitespace-nowrap" style={{ color: item.vsUsPrice.startsWith('+') && item.vsUsPrice !== '+$0' ? '#d32f2f' : item.vsUsPrice === '+$0' ? '#666' : '#388e3c', borderRight: '1px solid #ddd' }}>
                      {item.vsUsPrice}
                    </td>
                    <td className="py-3 px-4 text-[11px] font-semibold text-right whitespace-nowrap" style={{ color: (item.priceInUsd - 2150) > 0 ? '#d32f2f' : (item.priceInUsd - 2150) === 0 ? '#666' : '#388e3c', borderRight: '1px solid #ddd' }}>
                      {item.priceInUsd - 2150 === 0 ? '+£0' : item.priceInUsd - 2150 > 0 ? `+£${item.priceInUsd - 2150}` : `-£${Math.abs(item.priceInUsd - 2150)}`}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button className="px-4 py-1 text-[11px] font-normal text-white whitespace-nowrap" style={{ background: 'linear-gradient(180deg, #6ba6ff 0%, #3478F6 100%)', border: '1px solid #2d6bc7', borderRadius: '12px', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), 0 1px 2px rgba(0,0,0,0.2)' }}>
                        Check Amazon
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
          
          <div className="mt-8 p-6 bg-white/5 backdrop-blur-md rounded-lg border border-white/10">
            <h3 className="text-[13px] font-semibold text-white mb-3 uppercase tracking-wider">Tax Status Legend</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[11px]">
              <div>
                <span className="px-2 py-1 rounded text-[11px] font-semibold bg-gray-100 text-gray-700">+ Tax</span>
                <p className="text-white/60 mt-2">Sales tax not included</p>
              </div>
              <div>
                <span className="px-2 py-1 rounded text-[11px] font-semibold bg-gray-100 text-gray-700">Incl. VAT</span>
                <p className="text-white/60 mt-2">VAT included (20%)</p>
              </div>
              <div>
                <span className="px-2 py-1 rounded text-[11px] font-semibold bg-gray-100 text-gray-700">Incl. GST</span>
                <p className="text-white/60 mt-2">GST included (10%)</p>
              </div>
              <div>
                <span className="px-2 py-1 rounded text-[11px] font-semibold bg-gray-100 text-gray-700">Incl. ICMS</span>
                <p className="text-white/60 mt-2">Brazilian tax included</p>
              </div>
            </div>
          </div>
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
          <h2 className="text-[32px] md:text-[56px] font-semibold mb-12">Global Tech Price</h2>
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
          <div className="pt-12 border-t border-white/10 text-[12px] text-white/40 flex flex-col items-center justify-center space-y-3 text-center">
            <p>Copyright © 2026 Global Tech Price. All rights reserved.</p>
            <p className="max-w-2xl">Data for informational purposes only. We are not tax specialists, financial advisors, or refund experts. Always verify pricing and tax regulations independently.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
