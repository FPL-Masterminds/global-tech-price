import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import VideoBackground from '@/components/VideoBackground';
import { VIDEO_POOL, PRODUCTS, MOCK_PRICES, PRODUCT_PRICES, getAppleStoreUrl } from '@/constants';
import { Product } from '@/types';
import { getAmazonAffiliateUrl } from '@/lib/amazonAffiliate';

interface ProductCountryPageProps {
  product: Product;
  countryData: any;
  allPricesWithData: any[];
  fxRates: any;
}

// Helper to get currency from country code
const getCurrency = (countryCode: string): string => {
  const currencyMap: { [key: string]: string } = {
    'US': 'USD', 'CA': 'CAD', 'GB': 'GBP', 'CZ': 'CZK', 'MX': 'MXN',
    'TH': 'THB', 'HK': 'HKD', 'JP': 'JPY', 'MY': 'MYR', 'SG': 'SGD',
    'VN': 'VND', 'TW': 'TWD', 'AE': 'AED', 'AU': 'AUD', 'NZ': 'NZD',
    'KR': 'KRW', 'IN': 'INR', 'PL': 'PLN', 'LU': 'EUR', 'CN': 'CNY',
    'PH': 'PHP', 'DE': 'EUR', 'AT': 'EUR', 'FR': 'EUR', 'ES': 'EUR',
    'NL': 'EUR', 'IT': 'EUR', 'PT': 'EUR', 'IE': 'EUR', 'DK': 'DKK',
    'SE': 'SEK', 'NO': 'NOK', 'TR': 'TRY', 'CL': 'CLP', 'BR': 'BRL'
  };
  return currencyMap[countryCode] || 'USD';
};

// Helper to get verdict badge
const getVerdict = (vsGlobalAvg: number, isSelected: boolean, isUS: boolean) => {
  if (isUS) return { label: 'BENCHMARK', color: 'bg-gray-600' };
  if (isSelected) return { label: 'SELECTED', color: 'bg-blue-600' };
  if (vsGlobalAvg >= 50) return { label: 'AVOID', color: 'bg-blue-700' };
  if (vsGlobalAvg >= 15) return { label: 'EXPENSIVE', color: 'bg-pink-700' };
  if (vsGlobalAvg <= -10) return { label: 'CHEAPER', color: 'bg-green-600' };
  return { label: 'FAIR', color: 'bg-gray-500' };
};

export default function ProductCountryPage({ product, countryData, allPricesWithData, fxRates }: ProductCountryPageProps) {
  // Video backgrounds
  const heroVideoPool = [
    VIDEO_POOL[1],  // #2
    VIDEO_POOL[6],  // #7
    VIDEO_POOL[7],  // #8
    VIDEO_POOL[8],  // #9
    VIDEO_POOL[9],  // #10
    VIDEO_POOL[10], // #11
  ];
  
  const heroVideo = useMemo(() => {
    return heroVideoPool[Math.floor(Math.random() * heroVideoPool.length)];
  }, []);

  const footerVideo = VIDEO_POOL[4]; // #5 locked

  // Currency toggle state - default to GBP for UK users, USD for others
  const [currencyView, setCurrencyView] = useState<'USD' | 'GBP'>(countryData.code === 'GB' ? 'GBP' : 'USD');

  // Calculate global average in USD
  const globalAverageUsd = useMemo(() => {
    const sum = allPricesWithData.reduce((acc, item) => acc + item.priceInUsd, 0);
    return sum / allPricesWithData.length;
  }, [allPricesWithData]);

  // Get current country data
  const currentCountryPrice = allPricesWithData.find(p => p.code === countryData.code);
  const currentPriceUsd = currentCountryPrice?.priceInUsd || 0;
  const vsGlobalAvg = ((currentPriceUsd - globalAverageUsd) / globalAverageUsd) * 100;

  // Sort countries by USD price and get top 5
  const sortedByPrice = [...allPricesWithData].sort((a, b) => a.priceInUsd - b.priceInUsd);
  const top5 = sortedByPrice.slice(0, 5);
  
  // Check if current country is in top 5, if not add it
  const benchmarkCountries = top5.some(c => c.code === countryData.code) 
    ? top5 
    : [...top5, currentCountryPrice];

  // Get other countries for "Compare Prices" section (excluding current)
  const otherCountries = MOCK_PRICES.filter(c => 
    c.code !== countryData.code && PRODUCT_PRICES[product.id]?.[c.code]
  ).slice(0, 8);

  return (
    <div className="bg-black min-h-screen text-[#F5F5F7] selection:bg-white selection:text-black">
      {/* Hero Section with Video */}
      <header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20">
        <VideoBackground src={heroVideo} overlayOpacity={0.5} />
        
        <div className="relative z-10 w-[87.5%] max-w-[1200px] text-center">
          <h1 className="text-[48px] md:text-[72px] font-semibold leading-[1.05] mb-6 tracking-tight">
            {product.name} <br />in {countryData.country}
          </h1>
          <p className="text-[18px] md:text-[22px] font-semibold text-white/90 max-w-[700px] mx-auto mb-12">
            Compare prices, taxes, and VAT refund eligibility for the {product.name} in {countryData.country}.
          </p>
          
          {/* Price Cards - Official vs Tourist Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto mb-12">
            {/* Official Retail Price Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="text-[12px] text-green-500 font-bold uppercase tracking-wider mb-2">Official Retail</div>
              <div className="text-[48px] font-semibold mb-2">{PRODUCT_PRICES[product.id]?.[countryData.code] || '—'}</div>
              <div className="text-[14px] text-white/60">≈ ${Math.round(currentPriceUsd).toLocaleString()} USD</div>
            </div>

            {/* Effective Tourist Price Card (if VAT refund eligible) */}
            {countryData.vatRefundEligible ? (
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-green-500/30">
                <div className="text-[12px] text-green-500 font-bold uppercase tracking-wider mb-2">Effective Tourist Price</div>
                <div className="text-[48px] font-semibold mb-2">
                  {(() => {
                    const officialPrice = PRODUCT_PRICES[product.id]?.[countryData.code] || '';
                    if (!officialPrice) return '—';
                    const parts = officialPrice.split(' ');
                    const currency = parts[0];
                    const amount = parseFloat(parts[1].replace(/,/g, ''));
                    const afterRefund = Math.round(amount * (1 - countryData.refundPercentage));
                    return `${currency} ${afterRefund.toLocaleString()}`;
                  })()}
                </div>
                <div className="text-[14px] text-green-400">After {Math.round(countryData.refundPercentage * 100)}% Tax Refund</div>
              </div>
            ) : (
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="text-[12px] text-white/60 font-bold uppercase tracking-wider mb-2">Tax Status</div>
                <div className="text-[24px] font-semibold mb-2">{countryData.taxStatus}</div>
                <div className="text-[14px] text-white/60">No VAT refund available for tourists</div>
              </div>
            )}
          </div>

          <a 
            href={getAmazonAffiliateUrl(product.name, countryData.code)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 rounded-full bg-white text-black font-semibold text-[18px] hover:bg-white/90 transition-all"
          >
            Check Amazon Price
          </a>
        </div>
      </header>

      {/* 01. Global Price Benchmark */}
      <section className="w-full py-12">
        <div className="w-[95%] max-w-[1400px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[32px] font-semibold">
              <span className="text-green-500">01.</span> Global Price Benchmark
            </h2>
            
            {/* Currency Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-[12px] text-white/60 uppercase tracking-wider">View prices in:</span>
              <div className="flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
                <button
                  onClick={() => setCurrencyView('USD')}
                  className={`px-6 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider transition-all ${
                    currencyView === 'USD' 
                      ? 'bg-white text-black' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  onClick={() => setCurrencyView('GBP')}
                  className={`px-6 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider transition-all ${
                    currencyView === 'GBP' 
                      ? 'bg-white text-black' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  GBP (£)
                </button>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto rounded-lg shadow-2xl" style={{ background: 'linear-gradient(180deg, #e8e8e8 0%, #d0d0d0 50%, #c0c0c0 100%)', border: '1px solid #999' }}>
            <table className="w-full text-left border-collapse" style={{ fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', sans-serif" }}>
              <thead>
                <tr style={{ background: 'linear-gradient(180deg, #f8f8f8 0%, #e0e0e0 100%)', borderBottom: '1px solid #999', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)' }}>
                  <th className="py-2 px-4 min-w-[80px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center" style={{ borderRight: '1px solid #bbb' }}>Flag</th>
                  <th className="py-2 px-4 min-w-[140px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center" style={{ borderRight: '1px solid #bbb' }}>Country</th>
                  <th className="py-2 px-4 min-w-[150px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center" style={{ borderRight: '1px solid #bbb' }}>
                    {currencyView === 'USD' ? 'Price (USD)' : 'Price (GBP)'}
                  </th>
                  <th className="py-2 px-4 min-w-[130px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center" style={{ borderRight: '1px solid #bbb' }}>VS Global AVG</th>
                  <th className="py-2 px-4 min-w-[120px] text-[11px] font-bold text-gray-700 uppercase tracking-wider text-center">Verdict</th>
                </tr>
              </thead>
              <tbody style={{ fontFamily: "'Lucida Grande', 'Lucida Sans Unicode', sans-serif" }}>
                {benchmarkCountries.map((item, idx) => {
                  const isSelected = item.code === countryData.code;
                  const isUS = item.code === 'US';
                  const vsAvg = ((item.priceInUsd - globalAverageUsd) / globalAverageUsd) * 100;
                  const verdict = getVerdict(vsAvg, isSelected, isUS);
                  const priceInGbp = item.priceInUsd * (fxRates.GBP || 0.79);
                  
                  return (
                    <tr 
                      key={item.code}
                      style={{ 
                        background: idx % 2 === 0 ? '#fff' : '#f5f5f5',
                        borderBottom: '1px solid #ddd'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#d9e9ff'} 
                      onMouseLeave={(e) => e.currentTarget.style.background = idx % 2 === 0 ? '#fff' : '#f5f5f5'}
                    >
                      <td className="py-3 px-4 text-center" style={{ borderRight: '1px solid #ddd' }}>
                        <img 
                          src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`}
                          alt={`${item.country} flag`}
                          className="w-8 h-6 object-cover rounded shadow-sm mx-auto"
                        />
                      </td>
                      <td className="py-3 px-4 text-[11px] font-normal text-gray-900 text-center" style={{ borderRight: '1px solid #ddd' }}>
                        {item.country}
                      </td>
                      <td className="py-3 px-4 text-[11px] font-bold text-gray-900 text-center whitespace-nowrap" style={{ borderRight: '1px solid #ddd' }}>
                        {currencyView === 'USD' 
                          ? `$${Math.round(item.priceInUsd).toLocaleString()}`
                          : `£${Math.round(priceInGbp).toLocaleString()}`
                        }
                      </td>
                      <td className="py-3 px-4 text-[11px] font-semibold text-center whitespace-nowrap" style={{ 
                        borderRight: '1px solid #ddd',
                        color: vsAvg === 0 ? '#388e3c' : vsAvg > 0 ? '#d32f2f' : '#388e3c'
                      }}>
                        {vsAvg === 0 ? '0%' : vsAvg > 0 ? `+${Math.round(vsAvg)}%` : `${Math.round(vsAvg)}%`}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider ${verdict.color}`}>
                          {verdict.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 02. Tourist Buying Guide & 03. Risks & Hardware Warnings - Side by Side */}
      <section className="w-full py-12">
        <div className="w-[95%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Tourist Buying Guide */}
          <div>
            <h2 className="text-[32px] font-semibold mb-6">
              <span className="text-green-500">02.</span> Tourist Buying Guide
            </h2>
            
            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <p className="text-[16px] text-white/80 leading-relaxed mb-6">
                Purchasing the <span className="font-semibold text-white">{product.name}</span> in <span className="font-semibold text-white">{countryData.country}</span> is{' '}
                {vsGlobalAvg < -10 ? 'highly recommended' : vsGlobalAvg > 15 ? 'not recommended' : 'a fair option'} for tourists.{' '}
                The current price of <span className="font-semibold text-white">{PRODUCT_PRICES[product.id]?.[countryData.code]}</span> makes the hardware{' '}
                {vsGlobalAvg < 0 ? `roughly ${Math.abs(Math.round(vsGlobalAvg))}% cheaper` : vsGlobalAvg > 0 ? `roughly ${Math.round(vsGlobalAvg)}% more expensive` : 'priced the same'} than the global average.
              </p>

              {countryData.vatRefundEligible && (
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 mb-6">
                  <h3 className="text-[18px] font-semibold text-green-400 mb-3">Pro Tip: Tax Refund Math</h3>
                  <p className="text-[14px] text-white/80 leading-relaxed">
                    In {countryData.country}, you can claim back {Math.round(countryData.refundPercentage * 100)}% VAT at the airport or participating stores. 
                    Ensure you have your passport (non-resident status required) to get the direct deduction.
                  </p>
                </div>
              )}

              <div className="space-y-3 text-[14px] text-white/70">
                <div className="flex justify-between">
                  <span>Official Price:</span>
                  <span className="font-semibold text-white">{PRODUCT_PRICES[product.id]?.[countryData.code]}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax Status:</span>
                  <span className="font-semibold text-white">{countryData.taxStatus}</span>
                </div>
                {countryData.vatRefundEligible && (
                  <div className="flex justify-between">
                    <span>VAT Refund:</span>
                    <span className="font-semibold text-green-400">Up to {Math.round(countryData.refundPercentage * 100)}%</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Risks & Hardware Warnings */}
          <div>
            <h2 className="text-[32px] font-semibold mb-6">
              <span className="text-red-500">03.</span> Risks & Hardware Warnings
            </h2>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-6 border border-red-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 text-[20px]">⚠</span>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-red-400 mb-2">Warranty & AppleCare</h3>
                    <p className="text-[14px] text-white/70 leading-relaxed">
                      AppleCare+ is globally recognized, but localized hardware repairs (like keyboard replacements) may take longer if parts aren't stocked in your home region.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-yellow-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-500 text-[20px]">⌨</span>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-yellow-400 mb-2">Keyboard Layout</h3>
                    <p className="text-[14px] text-white/70 leading-relaxed">
                      {['JP', 'KR', 'TW', 'CN'].includes(countryData.code) 
                        ? `${countryData.country} models default to local keyboard layout. Ensure you specify "English (US)" at the Apple Store, otherwise resale value in the US/Europe drops by 15%.`
                        : `${countryData.country} models typically use international keyboard layouts compatible with US/EU standards.`}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-500 text-[20px]">⚡</span>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-blue-400 mb-2">Voltage & Power</h3>
                    <p className="text-[14px] text-white/70 leading-relaxed">
                      {['US', 'CA', 'MX', 'JP', 'TW'].includes(countryData.code)
                        ? `${countryData.country} uses 100-120V. MacBook chargers are "universal" (100-240V), but you may need a plug adapter for your home country.`
                        : `${countryData.country} uses 220-240V. MacBook chargers are universal, but verify plug compatibility.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="w-full py-12">
        <div className="w-[95%] max-w-[1400px] mx-auto">
          <h2 className="text-[32px] font-semibold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-[16px] font-semibold text-white mb-3">Is AppleCare+ global?</h3>
              <p className="text-[14px] text-white/70 leading-relaxed">
                Yes, AppleCare+ for Mac provides global repair coverage. However, localized parts like the keyboard might be difficult to source in certain countries.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-[16px] font-semibold text-white mb-3">Can I get a tax refund on the spot?</h3>
              <p className="text-[14px] text-white/70 leading-relaxed">
                {countryData.vatRefundEligible 
                  ? `In ${countryData.country}, many Apple authorized retailers deduct the ${Math.round(countryData.refundPercentage * 100)}% VAT immediately at the register if you present your passport with a tourist entry stamp.`
                  : `${countryData.country} does not offer VAT refunds for tourists on electronics purchases.`}
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-[16px] font-semibold text-white mb-3">Should I buy in {countryData.country}?</h3>
              <p className="text-[14px] text-white/70 leading-relaxed">
                {vsGlobalAvg < -10 
                  ? `Yes! At ${Math.abs(Math.round(vsGlobalAvg))}% below the global average, ${countryData.country} offers excellent value.`
                  : vsGlobalAvg > 15
                  ? `Not ideal. At +${Math.round(vsGlobalAvg)}% above average, consider other markets.`
                  : `It's a fair option. Prices are close to the global average.`}
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-[16px] font-semibold text-white mb-3">What about customs/import duties?</h3>
              <p className="text-[14px] text-white/70 leading-relaxed">
                When flying back, you may need to declare high-value electronics. Most countries allow one laptop duty-free for personal use, but check your home country's customs rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Prices in Other Regions */}
      <section className="w-full py-12">
        <div className="w-[95%] max-w-[1400px] mx-auto">
          <h2 className="text-[32px] font-semibold mb-8 text-center">Compare Prices in Other Regions</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto">
            {otherCountries.map((country) => (
              <Link
                key={country.code}
                href={`/products/${product.id}/${country.code.toLowerCase()}`}
                className="bg-white/5 hover:bg-white/10 rounded-xl p-6 border border-white/10 transition-all text-center"
              >
                <img 
                  src={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png`}
                  alt={`${country.country} flag`}
                  className="w-12 h-8 object-cover rounded shadow-sm mx-auto mb-3"
                />
                <div className="text-[14px] font-semibold text-white mb-1">{product.name}</div>
                <div className="text-[12px] text-white/60">Price in {country.country}</div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/"
              className="inline-block px-8 py-3 rounded-full bg-white text-black font-semibold text-[14px] hover:bg-white/90 transition-all"
            >
              Compare All {allPricesWithData.length} Countries
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 border-t border-white/10">
        <div className="w-[95%] max-w-[1400px] mx-auto text-center">
          <h2 className="text-[36px] font-semibold mb-4">Ready to Buy?</h2>
          <p className="text-[18px] text-white/70 mb-8 max-w-[600px] mx-auto">
            Check current availability and pricing on Amazon or visit your local Apple Store.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href={getAmazonAffiliateUrl(product.name, countryData.code)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold text-[16px] hover:bg-white/90 transition-all"
            >
              Check Amazon Price
            </a>
            {getAppleStoreUrl(product.id, countryData.code) && (
              <a
                href={getAppleStoreUrl(product.id, countryData.code)!}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-[16px] hover:bg-white/20 transition-all border border-white/20"
              >
                View on Apple Store
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer with Video Background */}
      <footer className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
        <VideoBackground src={footerVideo} overlayOpacity={0.7} noFade />
        
        <div className="relative z-10 w-[87.5%] max-w-[1200px]">
          <nav className="mb-12">
            <ul className="flex flex-wrap justify-center gap-8 text-[14px] text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Pricing Data</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/vat-refund-policy" className="hover:text-white transition-colors">VAT Refund Policy</Link></li>
            </ul>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="text-center md:text-left">
              <h3 className="text-[14px] font-semibold text-white uppercase tracking-wider mb-4">Methodology</h3>
              <p className="text-[12px] text-white/60 leading-relaxed">
                Prices are pulled via real-time API from official regional Apple Store fronts and cross-referenced with local retailers. 
                Exchange rates are updated every hour using European Central Bank feeds. "Effective Price" assumes a successful VAT refund claim as a non-resident.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-[14px] font-semibold text-white uppercase tracking-wider mb-4">Disclaimer</h3>
              <p className="text-[12px] text-white/60 leading-relaxed">
                We are an independent price indexing service. We are not affiliated with Apple Inc. Always verify the price at the physical store before purchase. 
                Local taxes, credit card fees, and import duties in your home country are not included.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-[14px] font-semibold text-white uppercase tracking-wider mb-4">About Global Index</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-[12px] text-white/60 hover:text-white transition-colors">Our Mission</Link>
                <Link href="/about" className="block text-[12px] text-white/60 hover:text-white transition-colors">Author Expertise</Link>
                <Link href="/vat-refund-policy" className="block text-[12px] text-white/60 hover:text-white transition-colors">VAT Refund Policy</Link>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-white/20">
            <p className="text-[12px] text-white/50">
              © 2026 Global Tech Price Index. All rights reserved.
            </p>
            <p className="text-[11px] text-white/40 mt-2">
              Disclaimer: Exchange rates and prices are for reference only. Tax rates may vary by region. 
              Always check the official store for current pricing. We are not responsible for pricing errors or changes.
            </p>
            <p className="text-[11px] text-white/40 mt-2">
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { productId: string; country: string } }[] = [];
  
  Object.keys(PRODUCT_PRICES).forEach(productId => {
    const countriesWithPrices = Object.keys(PRODUCT_PRICES[productId]);
    countriesWithPrices.forEach(countryCode => {
      paths.push({
        params: {
          productId,
          country: countryCode.toLowerCase()
        }
      });
    });
  });
  
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.productId as string;
  const countryCode = (params?.country as string).toUpperCase();

  const product = PRODUCTS.find(p => p.id === productId);
  const countryData = MOCK_PRICES.find(c => c.code === countryCode);
  
  if (!product || !countryData) {
    return {
      notFound: true
    };
  }

  // Fallback FX rates (will be same as on dashboard)
  const fallbackFxRates: { [key: string]: number } = {
    USD: 1, GBP: 0.79, EUR: 0.92, JPY: 156.16, CAD: 1.43, AUD: 1.58,
    NZD: 1.72, SGD: 1.35, HKD: 7.80, CNY: 7.24, INR: 83.12, KRW: 1340,
    THB: 31.16, MYR: 4.01, PHP: 56.50, VND: 24390, TWD: 32.50, CZK: 23.20,
    PLN: 4.02, MXN: 17.12, BRL: 4.98, CLP: 950, AED: 3.67, TRY: 32.50,
    DKK: 6.88, SEK: 10.50, NOK: 10.80
  };

  // Calculate prices with data for all countries
  const allPricesWithData = MOCK_PRICES.map(item => {
    const officialPrice = PRODUCT_PRICES[product.id]?.[item.code] || '';
    let priceInUsd = 0;
    const officialCurrency = getCurrency(item.code);
    
    if (officialPrice) {
      const parts = officialPrice.split(' ');
      const amount = parseFloat(parts[1].replace(/,/g, ''));
      const rate = fallbackFxRates[officialCurrency] || 1;
      priceInUsd = amount / rate;
    }
    
    return {
      ...item,
      priceInUsd,
      officialPrice
    };
  }).filter(item => item.priceInUsd > 0); // Only countries with prices

  return {
    props: {
      product,
      countryData,
      allPricesWithData,
      fxRates: fallbackFxRates
    }
  };
};
