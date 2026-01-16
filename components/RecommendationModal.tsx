import React from 'react';
import VideoBackground from './VideoBackground';
import { VIDEO_POOL } from '../constants';

interface RecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct: any;
  selectedCurrency: string;
  selectedCountryFilter: string;
  sortBy: string;
  includeTaxes: boolean;
  topCountry: any;
  allCountries: any[];
}

const RecommendationModal: React.FC<RecommendationModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
  selectedCurrency,
  selectedCountryFilter,
  sortBy,
  includeTaxes,
  topCountry,
  allCountries
}) => {
  if (!isOpen || !topCountry) return null;

  const getCurrencySymbol = (code: string) => {
    switch (code) {
      case 'USD': return '$';
      case 'GBP': return '£';
      case 'EUR': return '€';
      case 'JPY': return '¥';
      default: return '$';
    }
  };

  const getBaselineCountry = (currency: string) => {
    switch (currency) {
      case 'USD': return 'United States';
      case 'GBP': return 'United Kingdom';
      case 'EUR': return 'France';
      case 'JPY': return 'Japan';
      default: return 'United States';
    }
  };

  const symbol = getCurrencySymbol(selectedCurrency);
  const baselineCountry = getBaselineCountry(selectedCurrency);
  
  // Get the baseline price
  const baselinePrice = allCountries.find(c => c.country === baselineCountry)?.displayPrice || 0;
  
  // Calculate diff
  const diffVsBaseline = topCountry.displayPrice - baselinePrice;
  const isCheaper = diffVsBaseline < 0;
  const absDiff = Math.abs(diffVsBaseline);

  // Get UK comparison
  const ukPrice = allCountries.find(c => c.country === 'United Kingdom')?.displayPrice || 0;
  const diffVsUk = topCountry.displayPrice - ukPrice;
  const isCheaperThanUk = diffVsUk < 0;
  const absDiffUk = Math.abs(diffVsUk);

  const taxStatusText = includeTaxes ? "with taxes included" : "excluding taxes";
  const sortDescription = sortBy.replace(/-/g, ' ');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative bg-black rounded-2xl max-w-2xl w-full border border-white/10 shadow-2xl max-h-[90vh] overflow-hidden">
        <VideoBackground src={VIDEO_POOL[0]} overlayOpacity={0.7} className="rounded-2xl" noFade={true} />
        <div className="relative z-10 p-8 overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-[32px] font-semibold text-white">Your Best Deal</h2>
          <button 
            onClick={onClose}
            className="text-white/60 hover:text-white text-[24px] leading-none"
          >
            ×
          </button>
        </div>

        <div className="space-y-6 text-[16px] leading-relaxed">
          {/* Product & Settings */}
          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <p className="text-white/80">
              You're shopping for the <span className="text-white font-semibold">{selectedProduct.name}</span> and viewing prices in <span className="text-white font-semibold">{selectedCurrency}</span> ({taxStatusText}).
            </p>
            {selectedCountryFilter !== 'All Countries' && (
              <p className="text-white/80 mt-2">
                You've filtered to show only <span className="text-white font-semibold">{selectedCountryFilter}</span>.
              </p>
            )}
          </div>

          {/* Main Recommendation */}
          <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-xl p-6 border border-green-500/30">
            <h3 className="text-[20px] font-semibold text-white mb-3">💰 Best Country to Buy</h3>
            <p className="text-white text-[18px]">
              Based on your sort preference ({sortDescription}), the top result is <span className="font-bold text-green-400">{topCountry.country}</span>.
            </p>
            <p className="text-white/90 mt-3">
              Price: <span className="font-bold text-white">{symbol}{topCountry.displayPrice.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span>
            </p>
          </div>

          {/* vs Baseline Comparison */}
          <div className={`rounded-xl p-5 border ${isCheaper ? 'bg-green-900/20 border-green-500/30' : 'bg-red-900/20 border-red-500/30'}`}>
            <h3 className="text-[18px] font-semibold text-white mb-2">vs {baselineCountry}</h3>
            {isCheaper ? (
              <p className="text-white/90">
                You'll <span className="text-green-400 font-semibold">SAVE {symbol}{absDiff.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span> compared to buying in {baselineCountry}.
              </p>
            ) : diffVsBaseline === 0 ? (
              <p className="text-white/90">
                The price is <span className="text-white font-semibold">EXACTLY THE SAME</span> as {baselineCountry}.
              </p>
            ) : (
              <p className="text-white/90">
                You'll <span className="text-red-400 font-semibold">PAY {symbol}{absDiff.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} MORE</span> compared to buying in {baselineCountry}.
              </p>
            )}
          </div>

          {/* vs UK Comparison */}
          {baselineCountry !== 'United Kingdom' && (
            <div className={`rounded-xl p-5 border ${isCheaperThanUk ? 'bg-green-900/20 border-green-500/30' : 'bg-red-900/20 border-red-500/30'}`}>
              <h3 className="text-[18px] font-semibold text-white mb-2">vs United Kingdom</h3>
              {isCheaperThanUk ? (
                <p className="text-white/90">
                  You'll <span className="text-green-400 font-semibold">SAVE {symbol}{absDiffUk.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span> compared to buying in the UK.
                </p>
              ) : diffVsUk === 0 ? (
                <p className="text-white/90">
                  The price is <span className="text-white font-semibold">EXACTLY THE SAME</span> as the UK.
                </p>
              ) : (
                <p className="text-white/90">
                  You'll <span className="text-red-400 font-semibold">PAY {symbol}{absDiffUk.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} MORE</span> compared to buying in the UK.
                </p>
              )}
            </div>
          )}

          {/* Tax Status */}
          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <h3 className="text-[16px] font-semibold text-white mb-2">⚠️ Important</h3>
            <p className="text-white/70 text-[14px] mb-3">
              <span className="text-white font-semibold">Prices shown are {includeTaxes ? 'TAX-INCLUSIVE (Gross)' : 'TAX-EXCLUSIVE (Net)'}.</span>
            </p>
            <p className="text-white/60 text-[13px]">
              {includeTaxes ? (
                <>
                  All prices have been normalized to <span className="text-green-400 font-semibold">INCLUDE taxes</span> for fair comparison. Pre-tax prices (like USA) have had estimated taxes added. This represents your final checkout price.
                </>
              ) : (
                <>
                  All prices have been normalized to <span className="text-blue-400 font-semibold">EXCLUDE taxes</span> for fair comparison. Tax-inclusive prices (like UK VAT) have had taxes removed. This represents the base product cost before government charges.
                </>
              )}
            </p>
            <p className="text-white/60 text-[13px] mt-3 pt-3 border-t border-white/10">
              <span className="font-semibold text-white">Original: </span>
              {topCountry.country}'s official price was listed as "{topCountry.officialPrice}" ({topCountry.taxStatus}).
            </p>
          </div>

          {/* VAT Refund Info */}
          {topCountry.vatRefundEligible && (
            <div className="bg-green-900/20 rounded-xl p-5 border border-green-500/30">
              <h3 className="text-[16px] font-semibold text-white mb-2">✈️ Tourist VAT Refund Available</h3>
              <p className="text-white/80 text-[14px] mb-3">
                {topCountry.country} allows foreign visitors to reclaim VAT/GST at the airport when leaving the country.
              </p>
              <p className="text-white/70 text-[13px] mb-2">
                <span className="font-semibold text-green-400">Potential Refund:</span> Up to {(topCountry.refundPercentage * 100).toFixed(0)}% of the purchase price (~{symbol}{Math.round(topCountry.displayPrice * topCountry.refundPercentage).toLocaleString()})
              </p>
              <p className="text-white/70 text-[13px]">
                <span className="font-semibold text-green-400">Effective Price After Refund:</span> {symbol}{Math.round(topCountry.displayPrice * (1 - topCountry.refundPercentage)).toLocaleString()}
              </p>
              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-red-400 font-semibold text-[12px] mb-2">⚠️ CRITICAL DISCLAIMER:</p>
                <p className="text-white/50 text-[11px] leading-relaxed">
                  VAT refund eligibility, processes, and amounts vary significantly by country and are subject to change without notice. Refunds typically require:
                  minimum purchase amounts, specific documentation, airport processing (with fees), and proof of export. Actual refund amounts may be lower due to 
                  administrative fees (typically 10-30% of VAT). We are NOT tax advisors, customs experts, or refund specialists. This information is for general 
                  reference ONLY. You MUST verify current refund policies, eligibility requirements, and procedures with official government sources or the retailer 
                  before making any purchase decisions. We accept NO liability for refund denials, processing failures, or financial losses.
                </p>
                <p className="text-blue-400 text-[11px] mt-2">
                  <a href="/vat-refund-policy" target="_blank" className="underline hover:text-blue-300">Read our full VAT Refund Policy →</a>
                </p>
              </div>
            </div>
          )}

          {/* General Disclaimer */}
          <div className="bg-red-900/20 rounded-xl p-5 border border-red-500/30">
            <h3 className="text-[16px] font-semibold text-white mb-2">📋 Legal Disclaimer</h3>
            <p className="text-white/60 text-[12px] leading-relaxed">
              All data is for <span className="text-white font-semibold">informational purposes ONLY</span>. We are NOT tax specialists, financial advisors, customs brokers, 
              or refund experts. Prices, exchange rates, tax rates, and refund policies change frequently and without notice. International purchases may incur customs duties, 
              import VAT, shipping costs, and warranty limitations. You are solely responsible for verifying all information, understanding applicable laws and regulations, 
              and making informed purchasing decisions. By using this tool, you acknowledge that we provide NO guarantees of accuracy and accept NO liability for any financial 
              losses, denied refunds, customs issues, or other consequences arising from your use of this information.
            </p>
          </div>

          {/* CTA */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all"
            >
              Got It
            </button>
            <button
              className="flex-1 px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-all border border-white/20"
              onClick={() => window.open(`https://www.amazon.com/s?k=${encodeURIComponent(selectedProduct.name)}`, '_blank')}
            >
              Check Amazon
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationModal;
