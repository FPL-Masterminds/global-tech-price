import React, { useMemo } from 'react';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import VideoBackground from '@/components/VideoBackground';
import { VIDEO_POOL, PRODUCTS, MOCK_PRICES } from '@/constants';
import { Product } from '@/types';

interface ProductCountryPageProps {
  product: Product;
  countryData: any;
  allPrices: any[];
}

export default function ProductCountryPage({ product, countryData, allPrices }: ProductCountryPageProps) {
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

  // Calculate cheapest and most expensive
  const sortedPrices = [...allPrices].sort((a, b) => a.priceInUsd - b.priceInUsd);
  const cheapest = sortedPrices[0];
  const mostExpensive = sortedPrices[sortedPrices.length - 1];
  
  // Calculate savings vs US
  const usPrice = allPrices.find(p => p.code === 'US');
  const savingsVsUs = usPrice ? countryData.priceInUsd - usPrice.priceInUsd : 0;

  return (
    <div className="bg-black min-h-screen text-[#F5F5F7] selection:bg-white selection:text-black">
      {/* Hero Section */}
      <header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20">
        <VideoBackground src={heroVideo} overlayOpacity={0.5} />
        
        <div className="relative z-10 w-[87.5%] max-w-[1200px] text-center">
          <h1 className="text-[48px] md:text-[72px] font-semibold leading-[1.05] mb-6 tracking-tight">
            {product.name} <br />in {countryData.country}
          </h1>
          <p className="text-[18px] md:text-[22px] font-semibold text-white/90 max-w-[700px] mx-auto mb-12">
            Compare prices, taxes, and VAT refund eligibility for the {product.name} in {countryData.country}.
          </p>
          
          {/* Price Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 max-w-[600px] mx-auto mb-12 border border-white/20">
            <div className="text-[14px] text-white/70 mb-2">Official Price in {countryData.country}</div>
            <div className="text-[56px] font-semibold mb-4">{countryData.officialPrice}</div>
            <div className="text-[16px] text-white/80 mb-6">{countryData.taxStatus}</div>
            
            {savingsVsUs !== 0 && (
              <div className={`text-[20px] font-semibold ${savingsVsUs < 0 ? 'text-green-400' : 'text-red-400'}`}>
                {savingsVsUs < 0 ? `Save $${Math.abs(savingsVsUs).toFixed(2)}` : `$${savingsVsUs.toFixed(2)} more`} vs US
              </div>
            )}
            
            {countryData.vatRefundEligible && (
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="text-[14px] text-green-400 font-semibold mb-2">✓ VAT Refund Eligible for Tourists</div>
                <div className="text-[14px] text-white/70">
                  Potential {countryData.refundPercentage}% refund available
                </div>
              </div>
            )}
          </div>

          <a 
            href={`https://www.amazon.com/s?k=${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 rounded-full bg-white text-black font-semibold text-[18px] hover:bg-white/90 transition-all"
          >
            Check Amazon Price
          </a>
        </div>
      </header>

      {/* Price Comparison Section */}
      <section className="relative w-full py-20 bg-black">
        <div className="relative z-10 w-[87.5%] max-w-[1200px] mx-auto">
          <h2 className="text-[36px] md:text-[48px] font-semibold mb-12 text-center">
            Global Price Comparison
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-[14px] text-white/70 mb-2">Cheapest Country</div>
              <div className="text-[24px] font-semibold mb-2">{cheapest.country}</div>
              <div className="text-[18px] text-white/80">{cheapest.officialPrice}</div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-[14px] text-white/70 mb-2">Your Country</div>
              <div className="text-[24px] font-semibold mb-2">{countryData.country}</div>
              <div className="text-[18px] text-white/80">{countryData.officialPrice}</div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <div className="text-[14px] text-white/70 mb-2">Most Expensive</div>
              <div className="text-[24px] font-semibold mb-2">{mostExpensive.country}</div>
              <div className="text-[18px] text-white/80">{mostExpensive.officialPrice}</div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/"
              className="inline-block px-12 py-4 rounded-full bg-white text-black font-semibold text-[18px] hover:bg-white/90 transition-all"
            >
              Compare All Countries
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="relative w-full py-20 bg-black">
        <div className="relative z-10 w-[87.5%] max-w-[800px] mx-auto">
          <h2 className="text-[32px] font-semibold mb-8">
            About {product.name} Pricing in {countryData.country}
          </h2>
          
          <div className="space-y-6 text-[16px] leading-relaxed text-white/80">
            <p>
              The official price for the {product.name} in {countryData.country} is {countryData.officialPrice}. 
              This price {countryData.taxIncluded ? 'includes' : 'excludes'} local taxes.
            </p>
            
            <p>
              When comparing the {product.name} price in {countryData.country} to other countries, 
              it ranks among {countryData.priceInUsd < cheapest.priceInUsd * 1.1 ? 'the cheapest' : 
              countryData.priceInUsd > mostExpensive.priceInUsd * 0.9 ? 'the most expensive' : 'the mid-range'} options globally.
            </p>

            {countryData.vatRefundEligible && (
              <p>
                Tourists visiting {countryData.country} may be eligible for a VAT refund of up to {countryData.refundPercentage}% 
                on their purchase. This can significantly reduce the effective price of the {product.name}. 
                <Link href="/vat-refund-policy" className="text-white hover:underline ml-1">
                  Learn more about VAT refunds
                </Link>.
              </p>
            )}

            <p>
              Use our <Link href="/" className="text-white hover:underline">Global Tech Price Index</Link> to compare 
              the {product.name} price across all {allPrices.length} countries, with live exchange rates and tax normalization.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        <VideoBackground src={footerVideo} overlayOpacity={0.7} noFade />
        
        <div className="relative z-10 text-center w-[87.5%] max-w-[1200px]">
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-8 text-[14px] text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Pricing Data</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/vat-refund-policy" className="hover:text-white transition-colors">VAT Refund Policy</Link></li>
            </ul>
          </nav>
          
          <div className="flex flex-col items-center gap-2 max-w-[600px] mx-auto">
            <p className="text-[12px] text-white/50">
              © 2026 Global Tech Price Index. All rights reserved.
            </p>
            <p className="text-[11px] text-white/40">
              Disclaimer: Exchange rates and prices are for reference only. Tax rates may vary by region. 
              Always check the official store for current pricing. We are not responsible for pricing errors or changes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Don't generate any dynamic pages - we'll add them manually as we scrape prices
  return {
    paths: [],
    fallback: 'blocking'
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

  return {
    props: {
      product,
      countryData,
      allPrices: MOCK_PRICES
    }
  };
};
