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
// YOU NEED TO REPLACE THESE WITH YOUR ACTUAL AMAZON ASSOCIATE IDs
const AMAZON_ASSOCIATE_IDS: { [domain: string]: string } = {
  'amazon.com': 'jupitermc-21', // Replace with your US Associate ID
  'amazon.co.uk': 'jupitermc-21', // Replace with your UK Associate ID
  'amazon.ca': 'jupitermc-21', // Replace with your CA Associate ID
  'amazon.de': 'jupitermc-21', // Replace with your DE Associate ID
  'amazon.fr': 'jupitermc-21', // Replace with your FR Associate ID
  'amazon.it': 'jupitermc-21', // Replace with your IT Associate ID
  'amazon.es': 'jupitermc-21', // Replace with your ES Associate ID
  'amazon.co.jp': 'jupitermc-21', // Replace with your JP Associate ID
  'amazon.in': 'jupitermc-21', // Replace with your IN Associate ID
  'amazon.com.au': 'jupitermc-21', // Replace with your AU Associate ID
  'amazon.sg': 'jupitermc-21', // Replace with your SG Associate ID
  'amazon.nl': 'jupitermc-21', // Replace with your NL Associate ID
  'amazon.pl': 'jupitermc-21', // Replace with your PL Associate ID
  'amazon.se': 'jupitermc-21', // Replace with your SE Associate ID
  'amazon.com.tr': 'jupitermc-21', // Replace with your TR Associate ID
  'amazon.ae': 'jupitermc-21', // Replace with your AE Associate ID
  'amazon.com.mx': 'jupitermc-21', // Replace with your MX Associate ID
  'amazon.com.br': 'jupitermc-21', // Replace with your BR Associate ID
  'amazon.cn': 'jupitermc-21', // Replace with your CN Associate ID
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
  const associateId = AMAZON_ASSOCIATE_IDS[domain] || 'jupitermc-21';
  
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
