/**
 * Amazon Affiliate Link Generator
 * Generates country-specific Amazon search URLs with affiliate tracking
 */

// Country code to Amazon domain mapping
const AMAZON_DOMAINS: { [key: string]: string } = {
  // Americas
  'US': 'amazon.com',
  'CA': 'amazon.ca',
  'MX': 'amazon.com.mx',
  'BR': 'amazon.com.br',
  'CL': 'amazon.com', // Chile uses US Amazon
  
  // Europe
  'GB': 'amazon.co.uk',
  'DE': 'amazon.de',
  'FR': 'amazon.fr',
  'IT': 'amazon.it',
  'ES': 'amazon.es',
  'NL': 'amazon.nl',
  'PL': 'amazon.pl',
  'SE': 'amazon.se',
  'TR': 'amazon.com.tr',
  'IE': 'amazon.co.uk', // Ireland uses UK Amazon
  'PT': 'amazon.es', // Portugal often uses Spain Amazon
  'AT': 'amazon.de', // Austria uses German Amazon
  'LU': 'amazon.de', // Luxembourg uses German Amazon
  'DK': 'amazon.co.uk', // Denmark often uses UK Amazon
  'NO': 'amazon.co.uk', // Norway uses UK Amazon
  'CZ': 'amazon.de', // Czech Republic uses German Amazon
  
  // Asia Pacific
  'JP': 'amazon.co.jp',
  'CN': 'amazon.cn',
  'IN': 'amazon.in',
  'AU': 'amazon.com.au',
  'SG': 'amazon.sg',
  'AE': 'amazon.ae',
  'KR': 'amazon.com', // South Korea uses US Amazon
  'HK': 'amazon.com', // Hong Kong uses US Amazon
  'TW': 'amazon.com', // Taiwan uses US Amazon
  'TH': 'amazon.com', // Thailand uses US Amazon
  'MY': 'amazon.sg', // Malaysia uses Singapore Amazon
  'VN': 'amazon.sg', // Vietnam uses Singapore Amazon
  'PH': 'amazon.sg', // Philippines uses Singapore Amazon
  'NZ': 'amazon.com.au', // New Zealand uses Australia Amazon
};

// Amazon Associate IDs per marketplace
// ✅ REAL ASSOCIATE IDs - CONFIGURED AND READY TO EARN!
const AMAZON_ASSOCIATE_IDS: { [domain: string]: string } = {
  // ✅ PRIMARY ACCOUNTS (YOU EARN COMMISSIONS!)
  'amazon.com': 'usjupitermc-20', // ✅ US Associate ID
  'amazon.co.uk': 'jupitermc-21', // ✅ UK Associate ID
  'amazon.de': 'dejupitermc-21', // ✅ DE Associate ID
  
  // North America (uses US ID)
  'amazon.ca': 'usjupitermc-20', // Canada → US account
  'amazon.com.mx': 'usjupitermc-20', // Mexico → US account
  'amazon.com.br': 'usjupitermc-20', // Brazil → US account
  
  // Europe (uses UK or DE IDs based on geography)
  'amazon.fr': 'dejupitermc-21', // France → DE account (EU proximity)
  'amazon.it': 'dejupitermc-21', // Italy → DE account (EU proximity)
  'amazon.es': 'dejupitermc-21', // Spain → DE account (EU proximity)
  'amazon.nl': 'dejupitermc-21', // Netherlands → DE account (EU proximity)
  'amazon.pl': 'dejupitermc-21', // Poland → DE account (EU proximity)
  'amazon.se': 'jupitermc-21', // Sweden → UK account (Scandinavia)
  'amazon.com.tr': 'dejupitermc-21', // Turkey → DE account (EU proximity)
  
  // Asia Pacific (uses US ID)
  'amazon.co.jp': 'usjupitermc-20', // Japan → US account
  'amazon.in': 'usjupitermc-20', // India → US account
  'amazon.com.au': 'usjupitermc-20', // Australia → US account
  'amazon.sg': 'usjupitermc-20', // Singapore → US account
  'amazon.ae': 'usjupitermc-20', // UAE → US account
  'amazon.cn': 'usjupitermc-20', // China → US account
};

/**
 * Generates an Amazon affiliate search URL for a specific country
 * @param productName - The name of the product to search for
 * @param countryCode - ISO 2-letter country code (e.g., 'US', 'GB', 'JP')
 * @returns Complete Amazon affiliate search URL
 */
export function getAmazonAffiliateUrl(productName: string, countryCode: string): string {
  // Get the appropriate Amazon domain for this country
  const domain = AMAZON_DOMAINS[countryCode] || 'amazon.com';
  
  // Get the associate ID for this domain
  const associateId = AMAZON_ASSOCIATE_IDS[domain] || 'usjupitermc-20';
  
  // Encode the product name for URL
  const searchQuery = encodeURIComponent(productName);
  
  // Construct the affiliate search URL
  // Format: https://www.amazon.XX/s?k={search}&tag={associate-id}
  return `https://www.${domain}/s?k=${searchQuery}&tag=${associateId}`;
}

/**
 * Get the Amazon domain for a country (without protocol)
 * @param countryCode - ISO 2-letter country code
 * @returns Amazon domain (e.g., 'amazon.co.uk')
 */
export function getAmazonDomain(countryCode: string): string {
  return AMAZON_DOMAINS[countryCode] || 'amazon.com';
}
