
import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import VideoBackground from '@/components/VideoBackground';
import RecommendationModal from '@/components/RecommendationModal';
import { VIDEO_POOL, PRODUCTS, MOCK_PRICES, PRODUCT_PRICES, getAppleStoreUrl } from '@/constants';
import { Product } from '@/types';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [includeTaxes, setIncludeTaxes] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [fxRates, setFxRates] = useState<any>({ 
    USD: 1, GBP: 0.79, EUR: 0.92, JPY: 148, THB: 35.60, HKD: 7.80,
    MYR: 4.62, CAD: 1.35, SGD: 1.34, VND: 24500, TWD: 31.50,
    AED: 3.67, AUD: 1.52, NZD: 1.65, KRW: 1320, CNY: 7.25,
    PHP: 56.50, MXN: 17.20, INR: 83.20, PLN: 4.05, DKK: 6.88,
    SEK: 10.50, NOK: 10.80, CZK: 23.20, TRY: 32.50, CLP: 950, BRL: 4.98
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch live FX rates from Frankfurter API
  useEffect(() => {
    fetch('https://api.frankfurter.app/latest?from=USD')
      .then(res => res.json())
      .then(data => {
        console.log('FX Rates loaded:', data.rates);
        setFxRates({ USD: 1, ...data.rates });
      })
      .catch(err => {
        console.error('FX API error:', err);
        // Keep using fallback rates
      });
  }, []);

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

  // Normalize price based on tax toggle
  const normalizePrice = (item: any) => {
    let basePrice = item.priceInUsd;
    
    console.log(`[${item.country}] Original: $${basePrice}, TaxRate: ${item.taxRate}, TaxIncluded: ${item.taxIncluded}, Mode: ${includeTaxes ? 'GROSS' : 'NET'}`);
    
    if (includeTaxes) {
      // GROSS MODE: All prices should include tax
      if (!item.taxIncluded) {
        // Add tax to pre-tax prices
        basePrice = basePrice * (1 + item.taxRate);
        console.log(`  -> Added tax: $${basePrice}`);
      }
      // Already tax-included prices stay as-is
    } else {
      // NET MODE: All prices should exclude tax
      if (item.taxIncluded) {
        // Remove tax from tax-included prices
        basePrice = basePrice / (1 + item.taxRate);
        console.log(`  -> Removed tax: $${basePrice}`);
      }
      // Already pre-tax prices stay as-is
    }
    
    return basePrice;
  };

  // Currency conversion helper
  const convertPrice = (usdPrice: number) => {
    return usdPrice * (fxRates[selectedCurrency] || 1);
  };

  // Get baseline price and country for diff calculations
  const getBaseline = () => {
    switch(selectedCurrency) {
      case 'USD': return { price: 1599, country: 'US', symbol: '$' };
      case 'GBP': return { price: 1699, country: 'GB', symbol: '£' };
      case 'EUR': return { price: 1899, country: 'FR', symbol: '€' };
      case 'JPY': return { price: 248800, country: 'JP', symbol: '¥' };
      default: return { price: 1599, country: 'US', symbol: '$' };
    }
  };

  const baseline = getBaseline();

  // Currency map from country code to currency
  const getCurrency = (countryCode: string): string => {
    const currencyMap: {[key: string]: string} = {
      'GB': 'GBP', 'US': 'USD', 'TH': 'THB', 'HK': 'HKD', 'JP': 'JPY',
      'MY': 'MYR', 'CA': 'CAD', 'SG': 'SGD', 'VN': 'VND', 'TW': 'TWD',
      'AE': 'AED', 'AU': 'AUD', 'NZ': 'NZD', 'KR': 'KRW', 'CN': 'CNY',
      'PH': 'PHP', 'MX': 'MXN', 'IN': 'INR', 'PL': 'PLN', 'LU': 'EUR',
      'DE': 'EUR', 'AT': 'EUR', 'FR': 'EUR', 'ES': 'EUR', 'NL': 'EUR',
      'IT': 'EUR', 'PT': 'EUR', 'IE': 'EUR', 'DK': 'DKK', 'SE': 'SEK',
      'NO': 'NOK', 'CZ': 'CZK', 'TR': 'TRY', 'CL': 'CLP', 'BR': 'BRL'
    };
    return currencyMap[countryCode] || 'USD';
  };

  // ALL countries with displayPrice (for modal comparisons - never filtered)
  const allCountriesWithPrices = useMemo(() => {
    return MOCK_PRICES.map(item => {
      // Get official price from PRODUCT_PRICES
      const officialPrice = PRODUCT_PRICES[selectedProduct.id]?.[item.code] || '';
      
      // Parse the price string (e.g., "CZK 45,990" -> 45990, "CZK")
      let priceInUsd = 0;
      let officialCurrency = getCurrency(item.code);
      
      if (officialPrice) {
        const parts = officialPrice.split(' ');
        officialCurrency = parts[0];
        const amount = parseFloat(parts[1].replace(/,/g, ''));
        
        // Convert to USD using live FX rates
        const rate = fxRates[officialCurrency] || 1;
        priceInUsd = amount / rate;
      }
      
      // Apply tax normalization
      let normalizedPrice = priceInUsd;
      if (item.taxIncluded && !includeTaxes) {
        // Remove tax
        normalizedPrice = priceInUsd / (1 + item.taxRate);
      } else if (!item.taxIncluded && includeTaxes) {
        // Add tax
        normalizedPrice = priceInUsd * (1 + item.taxRate);
      }
      
      // Get live FX rate display - shows conversion from selected currency to country's currency
      const liveFxRate = fxRates[officialCurrency] || 1;
      const selectedCurrencyRate = fxRates[selectedCurrency] || 1;
      const rateToSelectedCurrency = liveFxRate / selectedCurrencyRate;
      const fxRateDisplay = `1 ${selectedCurrency} = ${rateToSelectedCurrency.toFixed(2)} ${officialCurrency}`;
      
      return {
        ...item,
        priceInUsd,
        displayPrice: convertPrice(normalizedPrice),
        fxRate: fxRateDisplay
      };
    });
  }, [selectedProduct.id, selectedCurrency, fxRates, includeTaxes]);

  // Filter and sort logic
  const filteredAndSortedPrices = useMemo(() => {
    // allCountriesWithPrices already has prices for selectedProduct from PRODUCT_PRICES
    let filtered = [...allCountriesWithPrices];
    
    // Filter by country
    if (selectedCountry !== 'all') {
      filtered = filtered.filter(item => item.code === selectedCountry);
    }
    
    // displayPrice is already calculated in allCountriesWithPrices
    const filteredWithDisplay = [...filtered];
    
    // Sort
    if (sortBy !== 'default') {
      filteredWithDisplay.sort((a, b) => {
        const aConverted = a.displayPrice;
        const bConverted = b.displayPrice;
        
        switch(sortBy) {
          case 'usd-high': return bConverted - aConverted;
          case 'usd-low': return aConverted - bConverted;
          case 'gbp-high': return bConverted - aConverted;
          case 'gbp-low': return aConverted - bConverted;
          case 'diffus-high': return (bConverted - baseline.price) - (aConverted - baseline.price);
          case 'diffus-low': return (aConverted - baseline.price) - (bConverted - baseline.price);
          case 'diffuk-high': return (bConverted - baseline.price) - (aConverted - baseline.price);
          case 'diffuk-low': return (aConverted - baseline.price) - (bConverted - baseline.price);
          default: return 0;
        }
      });
    }
    
    return filteredWithDisplay;
  }, [selectedCountry, sortBy, allCountriesWithPrices, baseline]);

  return (
    <div className="bg-black min-h-screen text-[#F5F5F7] selection:bg-white selection:text-black">
      {/* Hero Section */}
      <header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20">
        <VideoBackground src={sectionVideos.hero} overlayOpacity={0.5} />
        
        <div className="relative z-10 w-[87.5%] max-w-[1200px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Title */}
          <div className="text-center md:text-left">
            <h1 className="text-[48px] md:text-[72px] font-semibold leading-[1.05] mb-6 tracking-tight">
              Global Tech <br /> Price Index
            </h1>
            <p className="text-[18px] md:text-[22px] font-semibold text-white/90 max-w-[500px] mx-auto md:mx-0">
              Live FX & Tax Data. Find the best country to buy your next Tech product.
            </p>
          </div>

          {/* Right Column - Controls */}
          <div className="glass-card rounded-[28px] p-8 backdrop-blur-[20px] space-y-6">
            <div className="flex flex-col items-start">
              <label className="text-[12px] font-semibold text-white/60 mb-2 uppercase tracking-wider">Product</label>
              <select 
                value={selectedProduct.id}
                onChange={(e) => setSelectedProduct(PRODUCTS.find(p => p.id === e.target.value) || PRODUCTS[0])}
                className="w-full bg-transparent text-[18px] font-semibold border-b border-white/20 pb-1 focus:outline-none cursor-pointer"
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
                className="w-full bg-transparent text-[18px] font-semibold border-b border-white/20 pb-1 focus:outline-none cursor-pointer"
              >
                <option value="USD" className="bg-neutral-900">USD</option>
                <option value="GBP" className="bg-neutral-900">GBP</option>
                <option value="EUR" className="bg-neutral-900">EUR</option>
                <option value="JPY" className="bg-neutral-900">JPY</option>
              </select>
            </div>

            <div className="flex flex-col items-start">
              <label className="text-[12px] font-semibold text-white/60 mb-2 uppercase tracking-wider">Country</label>
              <select 
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-full bg-transparent text-[18px] font-semibold border-b border-white/20 pb-1 focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-neutral-900">All Countries</option>
                {MOCK_PRICES.map(p => (
                  <option key={p.code} value={p.code} className="bg-neutral-900">{p.country}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col items-start">
              <label className="text-[12px] font-semibold text-white/60 mb-2 uppercase tracking-wider">Sort By</label>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-transparent text-[18px] font-semibold border-b border-white/20 pb-1 focus:outline-none cursor-pointer"
              >
                <option value="default" className="bg-neutral-900">Default Order</option>
                <option value="usd-high" className="bg-neutral-900">Price USD: High → Low</option>
                <option value="usd-low" className="bg-neutral-900">Price USD: Low → High</option>
                <option value="gbp-high" className="bg-neutral-900">Price GBP: High → Low</option>
                <option value="gbp-low" className="bg-neutral-900">Price GBP: Low → High</option>
                <option value="diffus-high" className="bg-neutral-900">Diff vs US: High → Low</option>
                <option value="diffus-low" className="bg-neutral-900">Diff vs US: Low → High</option>
                <option value="diffuk-high" className="bg-neutral-900">Diff vs UK: High → Low</option>
                <option value="diffuk-low" className="bg-neutral-900">Diff vs UK: Low → High</option>
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

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full h-[56px] rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all"
            >
              Calculate Best Deal
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid Section - iTunes 2005 Style */}
      <section className="bg-black py-[124px] flex flex-col items-center">
        <div className="w-[95%] max-w-[1800px]">
          <h2 className="text-[32px] md:text-[56px] font-semibold mb-16 text-center text-white">Global Comparison</h2>
          
          <div className="overflow-x-auto rounded-lg shadow-2xl" style={{ background: 'linear-gradient(180deg, #e8e8e8 0%, #d0d0d0 50%, #c0c0c0 100%)', border: '1px solid #999' }}>
            <table className="w-full text-left border-collapse" style={{ fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', sans-serif" }}>
              <thead>
                <tr style={{ background: 'linear-gradient(180deg, #f8f8f8 0%, #e0e0e0 100%)', borderBottom: '1px solid #999', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)' }}>
                  <th className="py-2 px-4 min-w-[80px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center sticky left-0 z-20" style={{ background: 'linear-gradient(180deg, #f8f8f8 0%, #e0e0e0 100%)', borderRight: '1px solid #bbb' }}>Flag</th>
                  <th className="py-2 px-4 min-w-[140px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center" style={{ borderRight: '1px solid #bbb' }}>Country</th>
                  <th className="py-2 px-4 min-w-[140px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center" style={{ borderRight: '1px solid #bbb' }}>Official Price</th>
                  <th className="py-2 px-4 min-w-[120px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center" style={{ borderRight: '1px solid #bbb' }}>Tax Status</th>
                  <th className="py-2 px-4 min-w-[80px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center" style={{ borderRight: '1px solid #bbb' }}>Refund</th>
                  <th className="py-2 px-4 min-w-[140px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center" style={{ borderRight: '1px solid #bbb' }}>FX Rate (1 {selectedCurrency} =)</th>
                  <th className="py-2 px-4 min-w-[130px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center" style={{ borderRight: '1px solid #bbb' }}>Price in {selectedCurrency}</th>
                  <th className="py-2 px-4 min-w-[130px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center" style={{ borderRight: '1px solid #bbb' }}>Price in {selectedCurrency === 'USD' ? 'GBP' : 'USD'}</th>
                  <th className="py-2 px-4 min-w-[130px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center" style={{ borderRight: '1px solid #bbb' }}>Diff vs {MOCK_PRICES.find(p => p.code === baseline.country)?.country}</th>
                  <th className="py-2 px-4 min-w-[130px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center" style={{ borderRight: '1px solid #bbb' }}>Diff vs {selectedCurrency === 'USD' ? 'UK' : 'US'}</th>
                  <th className="py-2 px-4 min-w-[180px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center">Action</th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', sans-serif" }}>
                {filteredAndSortedPrices.map((item, idx) => (
                  <tr key={idx} className="transition-all" style={{ 
                    background: idx % 2 === 0 ? '#fff' : '#f5f5f5',
                    borderBottom: '1px solid #ddd'
                  }} onMouseEnter={(e) => e.currentTarget.style.background = '#d9e9ff'} onMouseLeave={(e) => e.currentTarget.style.background = idx % 2 === 0 ? '#fff' : '#f5f5f5'}>
                    <td className="py-3 px-4 sticky left-0 z-10 text-center" style={{ background: idx % 2 === 0 ? '#fff' : '#f5f5f5', borderRight: '1px solid #ddd' }}>
                      <img 
                        src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`}
                        alt={`${item.country} flag`}
                        className="w-8 h-6 object-cover rounded shadow-sm mx-auto"
                      />
                    </td>
                    <td className="py-3 px-4 text-[11px] font-normal text-gray-900 text-center" style={{ borderRight: '1px solid #ddd' }}>{item.country}</td>
                    <td className="py-3 px-4 text-[11px] font-normal text-gray-800 text-center whitespace-nowrap" style={{ borderRight: '1px solid #ddd' }}>
                      {(() => {
                        const price = PRODUCT_PRICES[selectedProduct.id]?.[item.code] || '—';
                        const url = getAppleStoreUrl(selectedProduct.id, item.code);
                        
                        if (url && price !== '—') {
                          return (
                            <a 
                              href={url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:underline"
                              style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
                            >
                              {price}
                            </a>
                          );
                        }
                        return price;
                      })()}
                    </td>
                    <td className="py-3 px-4 text-center" style={{ borderRight: '1px solid #ddd' }}>
                      <span className="px-2 py-0.5 rounded text-[10px] font-normal bg-white/60 text-gray-700 whitespace-nowrap" style={{ border: '1px solid #ccc' }}>
                        {item.taxStatus}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[11px] font-normal text-gray-700 text-center" style={{ borderRight: '1px solid #ddd' }}>
                      {item.vatRefundEligible ? (
                        <span title="VAT/GST refund available for tourists">✓</span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-[11px] font-normal text-gray-700 text-center whitespace-nowrap" style={{ borderRight: '1px solid #ddd' }}>{item.fxRate}</td>
                    <td className="py-3 px-4 text-[11px] font-bold text-gray-900 text-center whitespace-nowrap" style={{ borderRight: '1px solid #ddd' }}>
                      {baseline.symbol}{Math.round(item.displayPrice).toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-[11px] font-bold text-gray-900 text-center whitespace-nowrap" style={{ borderRight: '1px solid #ddd' }}>
                      {selectedCurrency === 'USD' ? '£' : '$'}{Math.round(item.displayPrice * (selectedCurrency === 'USD' ? (fxRates.GBP || 1) : (1 / (fxRates.GBP || 0.79)))).toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-[11px] font-semibold text-center whitespace-nowrap" style={{ color: (item.displayPrice - baseline.price) > 0 ? '#d32f2f' : (item.displayPrice - baseline.price) === 0 ? '#666' : '#388e3c', borderRight: '1px solid #ddd' }}>
                      {(() => {
                        const diff = Math.round(item.displayPrice - baseline.price);
                        return diff === 0 ? `+${baseline.symbol}0` : diff > 0 ? `+${baseline.symbol}${Math.abs(diff).toLocaleString()}` : `-${baseline.symbol}${Math.abs(diff).toLocaleString()}`;
                      })()}
                    </td>
                    <td className="py-3 px-4 text-[11px] font-semibold text-center whitespace-nowrap" style={{ color: (item.displayPrice - (selectedCurrency === 'USD' ? allCountriesWithPrices.find(c => c.code === 'GB')?.displayPrice || 0 : allCountriesWithPrices.find(c => c.code === 'US')?.displayPrice || 0)) > 0 ? '#d32f2f' : (item.displayPrice - (selectedCurrency === 'USD' ? allCountriesWithPrices.find(c => c.code === 'GB')?.displayPrice || 0 : allCountriesWithPrices.find(c => c.code === 'US')?.displayPrice || 0)) === 0 ? '#666' : '#388e3c', borderRight: '1px solid #ddd' }}>
                      {(() => {
                        // Get alt country price (UK if showing USD, US if showing GBP)
                        const altCountryData = selectedCurrency === 'USD' ? allCountriesWithPrices.find(c => c.code === 'GB') : allCountriesWithPrices.find(c => c.code === 'US');
                        const altCountryDisplayPrice = altCountryData?.displayPrice || 0;
                        
                        // Convert both to the alternate currency
                        const conversionRate = selectedCurrency === 'USD' ? (fxRates.GBP || 0.79) : (1 / (fxRates.GBP || 0.79));
                        const itemInAltCurrency = item.displayPrice * conversionRate;
                        const altCountryInAltCurrency = altCountryDisplayPrice * conversionRate;
                        
                        const diff = Math.round(itemInAltCurrency - altCountryInAltCurrency);
                        const symbol = selectedCurrency === 'USD' ? '£' : '$';
                        return diff === 0 ? `+${symbol}0` : diff > 0 ? `+${symbol}${Math.abs(diff).toLocaleString()}` : `-${symbol}${Math.abs(diff).toLocaleString()}`;
                      })()}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button 
                        className="px-4 py-1.5 text-[11px] font-semibold whitespace-nowrap transition-all"
                        style={{ 
                          background: 'linear-gradient(180deg, #e8e8e8 0%, #b0b0b0 50%, #9a9a9a 100%)', 
                          color: '#333',
                          border: '1px solid #888', 
                          borderRadius: '14px', 
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 3px rgba(0,0,0,0.3)',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(180deg, #6ba6ff 0%, #3478F6 50%, #2d6bc7 100%)';
                          e.currentTarget.style.color = '#fff';
                          e.currentTarget.style.borderColor = '#1e5bb8';
                          e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 3px rgba(0,0,0,0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(180deg, #e8e8e8 0%, #b0b0b0 50%, #9a9a9a 100%)';
                          e.currentTarget.style.color = '#333';
                          e.currentTarget.style.borderColor = '#888';
                          e.currentTarget.style.boxShadow = 'inset 0 1px 0 rgba(255,255,255,0.6), 0 1px 3px rgba(0,0,0,0.3)';
                        }}
                      >
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
          
          {/* Tax Status Legend - Accordion */}
          <div className="mt-8">
            <details className="group bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:bg-white/[0.07] transition-all">
              <summary className="cursor-pointer py-4 px-6 text-[14px] font-semibold text-white/80 list-none flex items-center justify-between">
                <span>Tax Status Explained</span>
                <svg 
                  className="w-5 h-5 transition-transform group-open:rotate-180" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[13px]">
                  <div>
                    <span className="px-2 py-1 rounded text-[10px] font-semibold bg-gray-100 text-gray-700">+ Tax</span>
                    <p className="text-white/60 mt-2">Sales tax is not included in the displayed price. You will pay additional tax at checkout (varies by state/region).</p>
                  </div>
                  <div>
                    <span className="px-2 py-1 rounded text-[10px] font-semibold bg-gray-100 text-gray-700">Incl. VAT</span>
                    <p className="text-white/60 mt-2">Value Added Tax is already included in the displayed price. Common in Europe (typically 15-25%).</p>
                  </div>
                  <div>
                    <span className="px-2 py-1 rounded text-[10px] font-semibold bg-gray-100 text-gray-700">Incl. GST</span>
                    <p className="text-white/60 mt-2">Goods and Services Tax is already included. Used in Australia, Singapore, and other countries (typically 7-15%).</p>
                  </div>
                  <div>
                    <span className="px-2 py-1 rounded text-[10px] font-semibold bg-gray-100 text-gray-700">Incl. ICMS</span>
                    <p className="text-white/60 mt-2">Brazilian state consumption tax is already included in the displayed price (varies by state and product category).</p>
                  </div>
                </div>
              </div>
            </details>
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
                <li><Link href="/" className="hover:text-white transition-colors">Pricing Data</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/vat-refund-policy" className="hover:text-white transition-colors">VAT Refund Policy</Link></li>
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

      {/* Recommendation Modal */}
      <RecommendationModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedProduct={selectedProduct}
        selectedCurrency={selectedCurrency}
        selectedCountryFilter={selectedCountry === 'all' ? 'All Countries' : selectedCountry}
        sortBy={sortBy}
        includeTaxes={includeTaxes}
        topCountry={filteredAndSortedPrices[0]}
        allCountries={allCountriesWithPrices}
      />
    </div>
  );
};

export default App;
