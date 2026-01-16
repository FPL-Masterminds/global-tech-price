import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import VideoBackground from './components/VideoBackground';
import { VIDEO_POOL } from './constants';

const VatRefundPolicy: React.FC = () => {
  const heroVideoPool = [
    VIDEO_POOL[1], VIDEO_POOL[6], VIDEO_POOL[7], VIDEO_POOL[8], VIDEO_POOL[9], VIDEO_POOL[10]
  ];
  const randomHeroVideo = useMemo(() => heroVideoPool[Math.floor(Math.random() * heroVideoPool.length)], []);

  return (
    <div className="bg-black min-h-screen text-[#F5F5F7] selection:bg-white selection:text-black">
      {/* Hero Section */}
      <header className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden py-20">
        <VideoBackground src={randomHeroVideo} overlayOpacity={0.6} />
        <div className="relative z-10 px-4 text-center max-w-4xl">
          <h1 className="text-[48px] md:text-[72px] font-semibold leading-[1.05] mb-6 tracking-tight">
            VAT Refund Disclaimer
          </h1>
          <p className="text-[18px] md:text-[22px] font-semibold text-white/90 mx-auto">
            Important information about tourist tax refunds
          </p>
        </div>
      </header>

      {/* Content Section */}
      <section className="bg-black py-[80px] flex flex-col items-center px-4">
        <div className="w-[87.5%] max-w-[900px] text-white/90 space-y-10">

          {/* Red Warning Box */}
          <div className="bg-red-900/30 border-2 border-red-500 rounded-2xl p-8">
            <h2 className="text-[28px] font-bold text-red-400 mb-4">⚠️ READ THIS FIRST</h2>
            <p className="text-[16px] leading-relaxed text-white">
              <span className="font-bold">We are NOT tax advisors, customs brokers, refund specialists, or financial consultants.</span> The information on this page 
              and throughout this website regarding VAT/GST refunds is provided for <span className="font-bold">general informational purposes ONLY</span>. 
              We have NO specialized knowledge of international tax law, customs regulations, or tourist refund schemes. <span className="font-bold">You MUST do your own research 
              and verify all information independently before making any purchasing decisions.</span>
            </p>
          </div>

          {/* What Are VAT Refunds? */}
          <div>
            <h2 className="text-[32px] font-semibold mb-4 text-white">What Are Tourist VAT Refunds?</h2>
            <p className="text-[16px] leading-relaxed mb-4">
              Some countries allow foreign visitors (tourists) to reclaim the Value Added Tax (VAT) or Goods and Services Tax (GST) paid on purchases when 
              leaving the country. This is typically done at the airport before departure.
            </p>
            <p className="text-[16px] leading-relaxed text-white/80">
              When you see the <span className="px-2 py-1 rounded text-[11px] font-semibold bg-green-100 text-green-700 border border-green-400">✈️ Refund OK</span> badge 
              on our pricing table, it means that, based on publicly available information, that country <span className="italic">may</span> offer a tourist VAT refund scheme.
            </p>
          </div>

          {/* Which Countries? */}
          <div>
            <h2 className="text-[32px] font-semibold mb-4 text-white">Which Countries Have VAT Refunds?</h2>
            <p className="text-[16px] leading-relaxed mb-4">
              Based on our research (which may be outdated or incorrect), the following countries are marked as having tourist VAT refund schemes:
            </p>
            <div className="bg-neutral-900 rounded-xl p-6 space-y-3">
              <p className="text-[15px]"><span className="text-green-400 font-semibold">✅ European Union:</span> UK, France, Germany, Spain, Italy, Netherlands, Poland, Austria, Portugal, Ireland, Luxembourg, Denmark, Sweden, Norway, Czech Republic</p>
              <p className="text-[15px]"><span className="text-green-400 font-semibold">✅ Asia-Pacific:</span> Japan, Singapore, South Korea, Thailand, China, UAE, Turkey, Australia</p>
              <p className="text-[15px] mt-4"><span className="text-red-400 font-semibold">❌ NO Refund:</span> USA, Canada, Hong Kong, Malaysia, Vietnam, Taiwan, Philippines, Mexico, India, New Zealand, Chile, Brazil</p>
            </div>
            <p className="text-[14px] text-white/60 mt-4 italic">
              This list is NOT comprehensive and may be incorrect. Countries change their refund policies frequently.
            </p>
          </div>

          {/* Critical Limitations */}
          <div>
            <h2 className="text-[32px] font-semibold mb-4 text-white">Critical Limitations & Requirements</h2>
            <p className="text-[16px] leading-relaxed mb-4">
              Even in countries that offer VAT refunds, there are typically <span className="font-bold">strict requirements and limitations</span>:
            </p>
            <ul className="list-disc list-inside space-y-3 text-[15px] leading-relaxed text-white/90 ml-4">
              <li><span className="font-semibold">Minimum Purchase Amount:</span> Many countries require a minimum spend (e.g., €175 in France, ¥5,000 in Japan) before you're eligible.</li>
              <li><span className="font-semibold">Tourist Status:</span> You must be a non-resident/tourist. Proof may be required (passport, visa, departure boarding pass).</li>
              <li><span className="font-semibold">Physical Export:</span> You typically must take the item OUT of the country in your personal luggage. Shipping it may disqualify you.</li>
              <li><span className="font-semibold">Time Limits:</span> Refunds often must be claimed within a certain timeframe (e.g., 90 days of purchase).</li>
              <li><span className="font-semibold">Documentation:</span> You need original receipts, special tax-free forms from the retailer, and customs validation stamps at the airport.</li>
              <li><span className="font-semibold">Airport Processing:</span> You must present items, receipts, and forms at customs BEFORE checking in or going through security. Lines can be long.</li>
              <li><span className="font-semibold">Processing Fees:</span> Third-party refund companies (Global Blue, Planet, etc.) charge hefty fees—typically 10-30% of the VAT amount.</li>
              <li><span className="font-semibold">Electronics Exclusions:</span> Some countries exclude high-value electronics or apply different rules to them.</li>
            </ul>
          </div>

          {/* How Much Can You Actually Get Back? */}
          <div>
            <h2 className="text-[32px] font-semibold mb-4 text-white">How Much Can You Actually Get Back?</h2>
            <p className="text-[16px] leading-relaxed mb-4">
              Our tool shows the <span className="font-semibold">THEORETICAL maximum refund</span> (e.g., 20% VAT in the UK). However, the <span className="font-semibold text-red-400">actual amount you receive will almost always be LOWER</span> because:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-relaxed text-white/90 ml-4">
              <li>Refund companies take a large processing fee (often 20-30% of the VAT)</li>
              <li>There may be fixed transaction fees (€3-€5 per transaction)</li>
              <li>Currency conversion fees if you choose cash/card refund</li>
              <li>Some countries have tiered refund rates (lower rates for lower spend)</li>
            </ul>
            <div className="bg-yellow-900/20 border border-yellow-500/50 rounded-xl p-5 mt-6">
              <p className="text-[15px] text-yellow-200">
                <span className="font-bold">Example:</span> If you buy a MacBook for £1,699 (incl. 20% VAT = £283 VAT), the theoretical refund is £283. 
                But after a 25% processing fee, you'd actually receive ~£212. Our tool does NOT account for these fees.
              </p>
            </div>
          </div>

          {/* Why We Show This (And Why You Shouldn't Trust It) */}
          <div>
            <h2 className="text-[32px] font-semibold mb-4 text-white">Why We Show This Data</h2>
            <p className="text-[16px] leading-relaxed mb-4">
              Users asked for it. That's literally the only reason. We aggregated publicly available information about which countries offer tourist VAT refunds 
              because many travelers want to factor this into their purchasing decisions.
            </p>
            <p className="text-[16px] leading-relaxed text-red-400 font-semibold">
              However, we have NO expertise in this area and cannot verify the accuracy of this information. It may be outdated, incomplete, or wrong.
            </p>
          </div>

          {/* What You MUST Do */}
          <div className="bg-blue-900/20 border border-blue-500/50 rounded-2xl p-8">
            <h2 className="text-[28px] font-semibold mb-4 text-blue-300">What You MUST Do Before Relying on Refunds</h2>
            <ol className="list-decimal list-inside space-y-3 text-[15px] leading-relaxed text-white/90 ml-4">
              <li>Check the OFFICIAL government tax authority website for the country you're visiting (e.g., HMRC for UK, Customs for Japan).</li>
              <li>Confirm the minimum purchase amounts, eligibility requirements, and excluded product categories.</li>
              <li>Ask the RETAILER at the point of purchase if they participate in the tax-free shopping scheme and what forms you need.</li>
              <li>Understand the refund company's fees (Global Blue, Planet, etc.) and how much you'll ACTUALLY receive.</li>
              <li>Allow extra time at the airport for customs validation and refund processing.</li>
              <li>Keep ALL receipts, forms, and proof of purchase.</li>
              <li>DO NOT rely on our data as your sole source of information.</li>
            </ol>
          </div>

          {/* No Liability */}
          <div className="bg-red-900/30 border-2 border-red-500 rounded-2xl p-8">
            <h2 className="text-[28px] font-bold text-red-400 mb-4">⚠️ NO LIABILITY</h2>
            <p className="text-[14px] leading-relaxed text-white">
              By using this website and the VAT refund information provided, you acknowledge and agree that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[14px] leading-relaxed text-white/90 ml-4 mt-4">
              <li>Global Tech Price and its operators provide this information "as is" with NO warranties or guarantees of any kind.</li>
              <li>We are NOT responsible if refund information is incorrect, outdated, or misleading.</li>
              <li>We are NOT liable for any denied refunds, processing failures, customs issues, or financial losses you may incur.</li>
              <li>We do NOT provide professional advice of any kind (tax, legal, financial, or otherwise).</li>
              <li>You are solely responsible for verifying all information and understanding applicable laws and regulations.</li>
              <li>Any decisions you make based on this information are at your own risk.</li>
            </ul>
          </div>

          {/* Helpful Resources */}
          <div>
            <h2 className="text-[32px] font-semibold mb-4 text-white">Official Resources (Not Affiliated)</h2>
            <p className="text-[16px] leading-relaxed mb-4">
              These are third-party resources that may help you understand VAT refund schemes. We are NOT affiliated with any of them:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[15px] leading-relaxed text-white/80 ml-4">
              <li><a href="https://www.globalblue.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Global Blue</a> - Major tax refund operator</li>
              <li><a href="https://www.planetpayment.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Planet Payment</a> - Tax refund services</li>
              <li><a href="https://www.gov.uk/tax-on-shopping/taxfree-shopping" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">UK VAT Refund Info (HMRC)</a></li>
              <li><a href="https://www.japan.tax-freeshop.jp/eng/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Japan Tax-Free Shopping</a></li>
            </ul>
          </div>

          {/* Back to Dashboard */}
          <div className="text-center mt-16 pt-8 border-t border-white/10">
            <Link to="/" className="inline-block h-[56px] px-8 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all flex items-center justify-center">
              Back to Price Comparison
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black py-[160px] flex flex-col items-center overflow-hidden">
        <VideoBackground src={VIDEO_POOL[4]} overlayOpacity={0.8} />
        <div className="relative z-10 w-[87.5%] max-w-[1024px] text-center">
          <h2 className="text-[32px] md:text-[56px] font-semibold mb-12">Global Tech Price</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-left text-[14px] text-white/60 mb-20">
            <div>
              <h4 className="text-white font-semibold mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white transition-colors">Pricing Data</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link to="/vat-refund-policy" className="hover:text-white transition-colors">VAT Refund Policy</Link></li>
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

export default VatRefundPolicy;
