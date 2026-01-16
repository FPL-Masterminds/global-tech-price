import React from 'react';

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
      <div className="bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-2xl max-w-2xl w-full p-8 border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto">
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
            <p className="text-white/70 text-[14px]">
              {topCountry.taxStatus === '+ Tax' ? (
                <>
                  This price is <span className="text-yellow-400 font-semibold">BEFORE local sales tax</span>. Expect to pay more at checkout depending on the region.
                </>
              ) : (
                <>
                  This price <span className="text-green-400 font-semibold">INCLUDES {topCountry.taxStatus}</span>. What you see is what you'll pay.
                </>
              )}
            </p>
            <p className="text-white/60 text-[13px] mt-3">
              If importing, check for customs duties, VAT reclaim eligibility (for travelers), and warranty differences.
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
  );
};

export default RecommendationModal;
