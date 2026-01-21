
export const VIDEO_POOL = [
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/90bb1b34646b81b3b63e5a854ea00da3/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/df176a2fb2ea2b64bd21ae1c10d3af6a/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/12a9780eeb1ea015801a5f55cf2e9d3d/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/964cb3eddff1a67e3772aac9a7aceea2/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/dd17599dfa77f41517133fa7a4967535/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/408ad52e3f15bc8f01ae69d194a8cf3a/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/e923e67d71fed3e0853ec57f0348451e/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/136a8a211c6c3b1cc1fd7b1c7d836c58/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/c9ddd33ac3d964e5d33b31ce849e8f95/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/257c7359efd4b4aaebcc03aa8fc78a36/manifest/video.m3u8",
  "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/697945ca6b876878dba3b23fbd2f1561/manifest/video.m3u8"
];

export const PRODUCTS = [
  // M5 Models (Latest - Jan 2026) - US Only for now
  { id: 'mbp14-m5-16-512', name: 'MacBook Pro 14" M5 16GB 512GB', basePriceUsd: 1599 },
  { id: 'mbp14-m5-16-1tb', name: 'MacBook Pro 14" M5 16GB 1TB', basePriceUsd: 1799 },
  { id: 'mbp14-m5-24-1tb', name: 'MacBook Pro 14" M5 24GB 1TB', basePriceUsd: 1999 },
  
  // M4 Models (Nov 2024)
  { id: 'mbp14-m4-16-512', name: 'MacBook Pro 14" M4 16GB 512GB', basePriceUsd: 1599 },
  { id: 'mbp14-m4-16-1tb', name: 'MacBook Pro 14" M4 16GB 1TB', basePriceUsd: 1799 },
  { id: 'mbp14-m4-24-1tb', name: 'MacBook Pro 14" M4 24GB 1TB', basePriceUsd: 1999 },
  { id: 'mbp14-m4pro-20-512', name: 'MacBook Pro 14" M4 Pro 20GB 512GB', basePriceUsd: 1999 },
  { id: 'mbp14-m4pro-24-512', name: 'MacBook Pro 14" M4 Pro 24GB 512GB', basePriceUsd: 1999 },
  { id: 'mbp14-m4pro-24-1tb', name: 'MacBook Pro 14" M4 Pro 24GB 1TB', basePriceUsd: 2399 },
  { id: 'mbp14-m4max-36-1tb', name: 'MacBook Pro 14" M4 Max 36GB 1TB', basePriceUsd: 3199 },
  { id: 'mbp16-m4pro-24-512', name: 'MacBook Pro 16" M4 Pro 24GB 512GB', basePriceUsd: 2499 },
  { id: 'mbp16-m4pro-48-512', name: 'MacBook Pro 16" M4 Pro 48GB 512GB', basePriceUsd: 2899 },
  { id: 'mbp16-m4max-36-1tb', name: 'MacBook Pro 16" M4 Max 36GB 1TB', basePriceUsd: 3499 },
  { id: 'mbp16-m4max-48-1tb', name: 'MacBook Pro 16" M4 Max 48GB 1TB', basePriceUsd: 3999 },
  
  // M3 Models (2023)
  { id: 'mbp14-m3-8-512', name: 'MacBook Pro 14" M3 8GB 512GB', basePriceUsd: 1599 },
  { id: 'mbp14-m3-8-1tb', name: 'MacBook Pro 14" M3 8GB 1TB', basePriceUsd: 1799 },
  { id: 'mbp14-m3pro-18-512', name: 'MacBook Pro 14" M3 Pro 18GB 512GB', basePriceUsd: 1999 },
  { id: 'mbp14-m3pro-18-1tb', name: 'MacBook Pro 14" M3 Pro 18GB 1TB', basePriceUsd: 2199 },
  { id: 'mbp14-m3max-36-1tb', name: 'MacBook Pro 14" M3 Max 36GB 1TB', basePriceUsd: 3099 },
  { id: 'mbp16-m3pro-18-512', name: 'MacBook Pro 16" M3 Pro 18GB 512GB', basePriceUsd: 2499 },
  { id: 'mbp16-m3pro-36-512', name: 'MacBook Pro 16" M3 Pro 36GB 512GB', basePriceUsd: 2899 },
  { id: 'mbp16-m3max-36-1tb', name: 'MacBook Pro 16" M3 Max 36GB 1TB', basePriceUsd: 3499 }
];

// Product prices by country (scraped official prices)
export const PRODUCT_PRICES: { [productId: string]: { [countryCode: string]: string } } = {
  // M5 Models (US, CA, GB, CZ, MX, TH, HK, JP, MY, SG, VN, TW, AE, AU, NZ, KR)
  'mbp14-m5-16-512': { 'US': 'USD 1,599', 'CA': 'CAD 2,099', 'GB': 'GBP 1,599', 'CZ': 'CZK 45,990', 'MX': 'MXN 37,999', 'TH': 'THB 54,900', 'HK': 'HKD 12,999', 'JP': 'JPY 248,800', 'MY': 'MYR 6,999', 'SG': 'SGD 2,199', 'VN': 'VND 41999000', 'TW': 'TWD 52900', 'AE': 'AED 6,899', 'AU': 'AUD 2,499', 'NZ': 'NZD 2,999', 'KR': 'KRW 2390000' },
  'mbp14-m5-16-1tb': { 'US': 'USD 1,799', 'CA': 'CAD 2,399', 'GB': 'GBP 1,799', 'CZ': 'CZK 51,990', 'MX': 'MXN 42,999', 'TH': 'THB 61,900', 'HK': 'HKD 14,499', 'JP': 'JPY 278,800', 'MY': 'MYR 7,849', 'SG': 'SGD 2,499', 'VN': 'VND 46899000', 'TW': 'TWD 59900', 'AE': 'AED 7,739', 'AU': 'AUD 2,799', 'NZ': 'NZD 3,399', 'KR': 'KRW 2690000' },
  'mbp14-m5-24-1tb': { 'US': 'USD 1,999', 'CA': 'CAD 2,699', 'GB': 'GBP 1,999', 'CZ': 'CZK 57,990', 'MX': 'MXN 47,999', 'TH': 'THB 68,900', 'HK': 'HKD 15,999', 'JP': 'JPY 308,800', 'MY': 'MYR 8,699', 'SG': 'SGD 2,799', 'VN': 'VND 51799000', 'TW': 'TWD 66900', 'AE': 'AED 8,579', 'AU': 'AUD 3,099', 'NZ': 'NZD 3,799', 'KR': 'KRW 2990000' },
  
  // M4 Models (discontinued: mbp14-m4-16-512, mbp14-m4-16-1tb, mbp14-m4-24-1tb)
  'mbp14-m4pro-24-512': { 'US': 'USD 1,999', 'CA': 'CAD 2,699', 'GB': 'GBP 1,999', 'CZ': 'CZK 56,990', 'MX': 'MXN 47,999', 'TH': 'THB 69,900', 'HK': 'HKD 15,999', 'JP': 'JPY 328,800', 'MY': 'MYR 8,499', 'SG': 'SGD 2,749', 'VN': 'VND 51999000', 'TW': 'TWD 67900', 'AE': 'AED 8,499', 'AU': 'AUD 3,299', 'NZ': 'NZD 3,799', 'KR': 'KRW 2990000' },
  'mbp14-m4pro-24-1tb': { 'US': 'USD 2,399', 'CA': 'CAD 3,299', 'GB': 'GBP 2,399', 'CZ': 'CZK 68,990', 'MX': 'MXN 57,999', 'TH': 'THB 84,900', 'HK': 'HKD 18,999', 'JP': 'JPY 398,800', 'MY': 'MYR 10,499', 'SG': 'SGD 3,349', 'VN': 'VND 61799000', 'TW': 'TWD 81900', 'AE': 'AED 10,179', 'AU': 'AUD 3,999', 'NZ': 'NZD 4,599', 'KR': 'KRW 3590000' },
  'mbp14-m4max-36-1tb': { 'US': 'USD 3,199', 'CA': 'CAD 4,499', 'GB': 'GBP 3,199', 'CZ': 'CZK 92,990', 'MX': 'MXN 77,999', 'TH': 'THB 114,900', 'HK': 'HKD 24,999', 'JP': 'JPY 528,800', 'MY': 'MYR 13,999', 'SG': 'SGD 4,549', 'VN': 'VND 81399000', 'TW': 'TWD 109900', 'AE': 'AED 13,539', 'AU': 'AUD 4,999', 'NZ': 'NZD 5,999', 'KR': 'KRW 4790000' },
  'mbp16-m4pro-24-512': { 'US': 'USD 2,499', 'CA': 'CAD 3,299', 'GB': 'GBP 2,499', 'CZ': 'CZK 69,990', 'MX': 'MXN 59,999', 'TH': 'THB 89,900', 'HK': 'HKD 19,999', 'JP': 'JPY 398,800', 'MY': 'MYR 10,999', 'SG': 'SGD 3,499', 'VN': 'VND 66999000', 'TW': 'TWD 84900', 'AE': 'AED 10,499', 'AU': 'AUD 3,999', 'NZ': 'NZD 4,799', 'KR': 'KRW 3690000' },
  'mbp16-m4pro-48-512': { 'US': 'USD 2,899', 'CA': 'CAD 3,899', 'GB': 'GBP 2,899', 'CZ': 'CZK 81,990', 'MX': 'MXN 69,999', 'TH': 'THB 103,900', 'HK': 'HKD 22,999', 'JP': 'JPY 458,800', 'MY': 'MYR 12,699', 'SG': 'SGD 4,099', 'VN': 'VND 76799000', 'TW': 'TWD 98900', 'AE': 'AED 12,179', 'AU': 'AUD 4,599', 'NZ': 'NZD 5,599', 'KR': 'KRW 4290000' },
  'mbp16-m4max-36-1tb': { 'US': 'USD 3,499', 'CA': 'CAD 4,799', 'GB': 'GBP 3,499', 'CZ': 'CZK 99,990', 'MX': 'MXN 84,999', 'TH': 'THB 124,900', 'HK': 'HKD 27,499', 'JP': 'JPY 554,800', 'MY': 'MYR 15,299', 'SG': 'SGD 4,999', 'VN': 'VND 91499000', 'TW': 'TWD 119900', 'AE': 'AED 14,699', 'AU': 'AUD 5,699', 'NZ': 'NZD 6,799', 'KR': 'KRW 5190000' },
  'mbp16-m4max-48-1tb': { 'US': 'USD 3,999', 'CA': 'CAD 5,499', 'GB': 'GBP 3,999', 'CZ': 'CZK 114,990', 'MX': 'MXN 97,999', 'TH': 'THB 144,900', 'HK': 'HKD 31,249', 'JP': 'JPY 634,800', 'MY': 'MYR 17,499', 'SG': 'SGD 5,749', 'VN': 'VND 103749000', 'TW': 'TWD 134900', 'AE': 'AED 16,799', 'AU': 'AUD 6,499', 'NZ': 'NZD 7,799', 'KR': 'KRW 5990000' },
};

// Product-specific Apple Store URLs - English slugs (US, CA, UK, most countries)
export const PRODUCT_URL_SLUGS_EN: { [productId: string]: string } = {
  // M5 Models
  'mbp14-m5-16-512': '14-inch-space-black-standard-display-apple-m5-chip-with-10-core-cpu-and-10-core-gpu-16gb-memory-512gb',
  'mbp14-m5-16-1tb': '14-inch-space-black-standard-display-apple-m5-chip-with-10-core-cpu-and-10-core-gpu-16gb-memory-1tb',
  'mbp14-m5-24-1tb': '14-inch-space-black-standard-display-apple-m5-chip-with-10-core-cpu-and-10-core-gpu-24gb-memory-1tb',
  
  // M4 Models - 14-inch
  'mbp14-m4-16-512': '14-inch-space-black-standard-display-apple-m4-chip-with-10-core-cpu-and-10-core-gpu-16gb-memory-512gb',
  'mbp14-m4-16-1tb': '14-inch-space-black-standard-display-apple-m4-chip-with-10-core-cpu-and-10-core-gpu-16gb-memory-1tb',
  'mbp14-m4-24-1tb': '14-inch-space-black-standard-display-apple-m4-chip-with-10-core-cpu-and-10-core-gpu-24gb-memory-1tb',
  'mbp14-m4pro-24-512': '14-inch-space-black-standard-display-apple-m4-pro-chip-with-12-core-cpu-16-core-gpu-24gb-memory-512gb',
  'mbp14-m4pro-24-1tb': '14-inch-space-black-standard-display-apple-m4-pro-with-14-core-cpu-and-20-core-gpu-24gb-memory-1tb',
  'mbp14-m4max-36-1tb': '14-inch-space-black-standard-display-apple-m4-max-with-14-core-cpu-32-core-gpu-16-core-neural-engine-36gb-memory-1tb',
  
  // M4 Models - 16-inch
  'mbp16-m4pro-24-512': '16-inch-space-black-standard-display-apple-m4-pro-with-14-core-cpu-and-20-core-gpu-24gb-memory-512gb',
  'mbp16-m4pro-48-512': '16-inch-space-black-standard-display-apple-m4-pro-with-14-core-cpu-and-20-core-gpu-48gb-memory-512gb',
  'mbp16-m4max-36-1tb': '16-inch-space-black-standard-display-apple-m4-max-with-14-core-cpu-32-core-gpu-16-core-neural-engine-36gb-memory-1tb',
  'mbp16-m4max-48-1tb': '16-inch-space-black-standard-display-apple-m4-max-with-16-core-cpu-and-40-core-gpu-48gb-memory-1tb',
};

// Czech Republic slugs (in Czech language)
export const PRODUCT_URL_SLUGS_CZ: { [productId: string]: string } = {
  // M5 Models
  'mbp14-m5-16-512': '14palcový-vesmírně-černá-standardní-displej-čip-apple-m5-s-10jádrovým-cpu-a-10jádrovým-gpu-16-gb-paměti-512gb',
  'mbp14-m5-16-1tb': '14palcový-vesmírně-černá-standardní-displej-čip-apple-m5-s-10jádrovým-cpu-a-10jádrovým-gpu-16-gb-paměti-1tb',
  'mbp14-m5-24-1tb': '14palcový-vesmírně-černá-standardní-displej-čip-apple-m5-s-10jádrovým-cpu-a-10jádrovým-gpu-24gb-paměť-1tb',
  
  // M4 Models - 14-inch
  'mbp14-m4pro-24-512': '14palcový-vesmírně-černá-standardní-displej-čip-apple-m4-pro-s-12jádrovým-cpu-a-16jádrovým-gpu-24gb-paměť-512gb',
  'mbp14-m4pro-24-1tb': '14palcový-vesmírně-černá-standardní-displej-apple-m4-pro-s-14jádrovým-cpu-a-20jádrovým-gpu-24gb-paměť-1tb',
  'mbp14-m4max-36-1tb': '14palcový-vesmírně-černá-standardní-displej-apple-m4-max-se-14jádrovým-cpu,-32jádrovým-gpu-a-16jádrovým-neural-enginem-36-gb-paměti-1tb',
  
  // M4 Models - 16-inch
  'mbp16-m4pro-24-512': '16palcový-vesmírně-černá-standardní-displej-apple-m4-pro-s-14jádrovým-cpu-a-20jádrovým-gpu-24gb-paměť-512gb',
  'mbp16-m4pro-48-512': '16palcový-vesmírně-černá-standardní-displej-apple-m4-pro-s-14jádrovým-cpu-a-20jádrovým-gpu-48-gb-paměti-512gb',
  'mbp16-m4max-36-1tb': '16palcový-vesmírně-černá-standardní-displej-apple-m4-max-se-14jádrovým-cpu,-32jádrovým-gpu-a-16jádrovým-neural-enginem-36-gb-paměti-1tb',
  'mbp16-m4max-48-1tb': '16palcový-vesmírně-černá-standardní-displej-apple-m4-max-s-16jádrovým-cpu-a-40jádrovým-gpu-48-gb-paměti-1tb',
};

// Mexico slugs (in Spanish)
export const PRODUCT_URL_SLUGS_MX: { [productId: string]: string } = {
  // M5 Models - 14-inch
  'mbp14-m5-16-512': '14-pulgadas-negro-espacial-pantalla-de-vidrio-estándar-chip-m5-de-apple-con-cpu-de-10-núcleos-y-gpu-de-10-núcleos-16-gb-de-memoria-512gb',
  'mbp14-m5-16-1tb': '14-pulgadas-negro-espacial-pantalla-de-vidrio-estándar-chip-m5-de-apple-con-cpu-de-10-núcleos-y-gpu-de-10-núcleos-16-gb-de-memoria-1tb',
  'mbp14-m5-24-1tb': '14-pulgadas-negro-espacial-pantalla-de-vidrio-estándar-chip-m5-de-apple-con-cpu-de-10-núcleos-y-gpu-de-10-núcleos-24-gb-de-memoria-1tb',
  
  // M4 Models - 14-inch
  'mbp14-m4pro-24-512': '14-pulgadas-negro-espacial-pantalla-de-vidrio-estándar-chip-m4-pro-de-apple-con-cpu-de-12-núcleos-y-gpu-de-16-núcleos-24-gb-de-memoria-512gb',
  'mbp14-m4pro-24-1tb': '14-pulgadas-negro-espacial-pantalla-de-vidrio-estándar-chip-m4-pro-de-apple-con-cpu-de-14-núcleos-y-gpu-de-20-núcleos-24-gb-de-memoria-1tb',
  'mbp14-m4max-36-1tb': '14-pulgadas-negro-espacial-pantalla-de-vidrio-estándar-chip-m4-max-de-apple-con-cpu-de-14-núcleos,-gpu-de-32-núcleos-y-neural-engine-de-16-núcleos-36-gb-de-memoria-1tb',
  
  // M4 Models - 16-inch
  'mbp16-m4pro-24-512': '16-pulgadas-negro-espacial-pantalla-de-vidrio-estándar-chip-m4-pro-de-apple-con-cpu-de-14-núcleos-y-gpu-de-20-núcleos-24-gb-de-memoria-512gb',
  'mbp16-m4pro-48-512': '16-pulgadas-negro-espacial-pantalla-de-vidrio-estándar-chip-m4-pro-de-apple-con-cpu-de-14-núcleos-y-gpu-de-20-núcleos-48-gb-de-memoria-512gb',
  'mbp16-m4max-36-1tb': '16-pulgadas-negro-espacial-pantalla-de-vidrio-estándar-chip-m4-max-de-apple-con-cpu-de-14-núcleos,-gpu-de-32-núcleos-y-neural-engine-de-16-núcleos-36-gb-de-memoria-1tb',
  'mbp16-m4max-48-1tb': '16-pulgadas-negro-espacial-pantalla-de-vidrio-estándar-chip-m4-max-de-apple-con-cpu-de-16-núcleos-y-gpu-de-40-núcleos-48-gb-de-memoria-1tb',
};

// Thailand slugs (in Thai)
export const PRODUCT_URL_SLUGS_TH: { [productId: string]: string } = {
  // M5 Models - 14-inch
  'mbp14-m5-16-512': 'รุ่น-14-นิ้ว-ดำสเปซแบล็ค-จอภาพมาตรฐาน-ชิป-apple-m5-พร้อม-cpu-แบบ-10-core-และ-gpu-แบบ-10-core-หน่วยความจำ-16gb-512gb',
  'mbp14-m5-16-1tb': 'รุ่น-14-นิ้ว-ดำสเปซแบล็ค-จอภาพมาตรฐาน-ชิป-apple-m5-พร้อม-cpu-แบบ-10-core-และ-gpu-แบบ-10-core-หน่วยความจำ-16gb-1tb',
  // Note: M5 24GB 1TB URL missing due to timeout during scraping
  
  // M4 Models - 14-inch
  'mbp14-m4pro-24-512': 'รุ่น-14-นิ้ว-ดำสเปซแบล็ค-จอภาพมาตรฐาน-ชิป-apple-m4-pro-พร้อม-cpu-แบบ-12-core-และ-gpu-แบบ-16-core-หน่วยความจำขนาด-24gb-512gb',
  'mbp14-m4pro-24-1tb': 'รุ่น-14-นิ้ว-ดำสเปซแบล็ค-จอภาพมาตรฐาน-ชิป-apple-m4-pro-พร้อม-cpu-แบบ-14-core-และ-gpu-แบบ-20-core-หน่วยความจำขนาด-24gb-1tb',
  'mbp14-m4max-36-1tb': 'รุ่น-14-นิ้ว-ดำสเปซแบล็ค-จอภาพมาตรฐาน-ชิป-apple-m4-max-พร้อม-cpu-แบบ-14-core,-gpu-แบบ-32-core,-neural-engine-แบบ-16-core-หน่วยความจำ-36gb-1tb',
  
  // M4 Models - 16-inch
  'mbp16-m4pro-24-512': 'รุ่น-16-นิ้ว-ดำสเปซแบล็ค-จอภาพมาตรฐาน-ชิป-apple-m4-pro-พร้อม-cpu-แบบ-14-core-และ-gpu-แบบ-20-core-หน่วยความจำขนาด-24gb-512gb',
  'mbp16-m4pro-48-512': 'รุ่น-16-นิ้ว-ดำสเปซแบล็ค-จอภาพมาตรฐาน-ชิป-apple-m4-pro-พร้อม-cpu-แบบ-14-core-และ-gpu-แบบ-20-core-หน่วยความจำ-48gb-512gb',
  'mbp16-m4max-36-1tb': 'รุ่น-16-นิ้ว-ดำสเปซแบล็ค-จอภาพมาตรฐาน-ชิป-apple-m4-max-พร้อม-cpu-แบบ-14-core,-gpu-แบบ-32-core,-neural-engine-แบบ-16-core-หน่วยความจำ-36gb-1tb',
  'mbp16-m4max-48-1tb': 'รุ่น-16-นิ้ว-ดำสเปซแบล็ค-จอภาพมาตรฐาน-ชิป-apple-m4-max-พร้อม-cpu-แบบ-16-core-และ-gpu-แบบ-40-core-หน่วยความจำ-48gb-1tb',
};

// Japanese slugs (in Japanese language)
export const PRODUCT_URL_SLUGS_JP: { [productId: string]: string } = {
  // M5 Models
  'mbp14-m5-16-512': '14インチ-スペースブラック-標準ディスプレイ-10コアcpuと10コアgpu搭載apple-m5チップ-16gbメモリ-512gb',
  'mbp14-m5-16-1tb': '14インチ-スペースブラック-標準ディスプレイ-10コアcpuと10コアgpu搭載apple-m5チップ-16gbメモリ-1tb',
  'mbp14-m5-24-1tb': '14インチ-スペースブラック-標準ディスプレイ-10コアcpuと10コアgpu搭載apple-m5チップ-24gbメモリ-1tb',
  // M4 Models - 14-inch
  'mbp14-m4pro-24-512': '14インチ-スペースブラック-標準ディスプレイ-12コアcpuと16コアgpu搭載apple-m4-proチップ-24gbメモリ-512gb',
  'mbp14-m4pro-24-1tb': '14インチ-スペースブラック-標準ディスプレイ-14コアcpuと20コアgpu搭載apple-m4-proチップ-24gbメモリ-1tb',
  'mbp14-m4max-36-1tb': '14インチ-スペースブラック-標準ディスプレイ-14コアcpuと32コアgpu搭載apple-m4-maxチップ-36gbメモリ-1tb',
  // M4 Models - 16-inch
  'mbp16-m4pro-24-512': '16インチ-スペースブラック-標準ディスプレイ-14コアcpuと20コアgpu搭載apple-m4-proチップ-24gbメモリ-512gb',
  'mbp16-m4pro-48-512': '16インチ-スペースブラック-標準ディスプレイ-14コアcpuと20コアgpu搭載apple-m4-proチップ-48gbメモリ-512gb',
  'mbp16-m4max-36-1tb': '16インチ-スペースブラック-標準ディスプレイ-14コアcpuと32コアgpu搭載apple-m4-maxチップ-36gbメモリ-1tb',
  'mbp16-m4max-48-1tb': '16インチ-スペースブラック-標準ディスプレイ-16コアcpuと40コアgpu搭載apple-m4-maxチップ-48gbメモリ-1tb',
};

// Helper function to get full Apple Store URL for a product in a country
export function getAppleStoreUrl(productId: string, countryCode: string): string | null {
  // Vietnam, Taiwan, and South Korea use configuration-based systems without individual product URLs
  if (countryCode === 'VN') {
    return 'https://www.apple.com/vn/shop/buy-mac/macbook-pro';
  }
  if (countryCode === 'TW') {
    return 'https://www.apple.com/tw/shop/buy-mac/macbook-pro';
  }
  if (countryCode === 'KR') {
    return 'https://www.apple.com/kr/shop/buy-mac/macbook-pro';
  }
  
  // Czech Republic, Mexico, Thailand, and Japan use localized slugs; all others use English
  let slug: string | undefined;
  if (countryCode === 'CZ') {
    slug = PRODUCT_URL_SLUGS_CZ[productId];
  } else if (countryCode === 'MX') {
    slug = PRODUCT_URL_SLUGS_MX[productId];
  } else if (countryCode === 'TH') {
    slug = PRODUCT_URL_SLUGS_TH[productId];
  } else if (countryCode === 'JP') {
    slug = PRODUCT_URL_SLUGS_JP[productId];
  } else {
    slug = PRODUCT_URL_SLUGS_EN[productId];
  }
    
  if (!slug) return null;
  
  const countryPaths: { [key: string]: string } = {
    'GB': '/uk',
    'US': '',
    'CA': '/ca',
    'CZ': '/cz',
    'TH': '/th',
    'HK': '/hk',
    'JP': '/jp',
    'MY': '/my',
    'SG': '/sg',
    'VN': '/vn',
    'TW': '/tw',
    'AE': '/ae',
    'AU': '/au',
    'NZ': '/nz',
    'KR': '/kr',
    'CN': '/cn',
    'PH': '/ph',
    'MX': '/mx',
    'IN': '/in',
    'PL': '/pl',
    'LU': '/lu',
    'DE': '/de',
    'AT': '/at',
    'FR': '/fr',
    'ES': '/es',
    'NL': '/nl',
    'IT': '/it',
    'PT': '/pt',
    'IE': '/ie',
    'DKK': '/dk',
    'SE': '/se',
    'NO': '/no',
    'TR': '/tr',
    'CL': '/cl',
    'BR': '/br',
  };
  
  const countryPath = countryPaths[countryCode];
  if (countryPath === undefined) return null;
  
  return `https://www.apple.com${countryPath}/shop/buy-mac/macbook-pro/${slug}`;
}

export const MOCK_PRICES = [
  { country: "United Kingdom", code: "GB", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 0.79 GBP", priceInUsd: 0, vsUsPrice: "", taxRate: 0.20, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.20, appleStoreUrl: "https://www.apple.com/uk/shop/buy-mac/macbook-pro" },
  { country: "United States", code: "US", officialPrice: "", taxStatus: "Tax Extra", fxRate: "1 USD = 1.00 USD", priceInUsd: 0, vsUsPrice: "", taxRate: 0.07, taxIncluded: false, vatRefundEligible: false, refundPercentage: 0, appleStoreUrl: "https://www.apple.com/shop/buy-mac/macbook-pro" },
  { country: "Thailand", code: "TH", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 35.60 THB", priceInUsd: 0, vsUsPrice: "", taxRate: 0.07, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.07, appleStoreUrl: "https://www.apple.com/th/shop/buy-mac/macbook-pro" },
  { country: "Hong Kong", code: "HK", officialPrice: "", taxStatus: "Tax Extra", fxRate: "1 USD = 7.80 HKD", priceInUsd: 0, vsUsPrice: "", taxRate: 0.00, taxIncluded: false, vatRefundEligible: false, refundPercentage: 0, appleStoreUrl: "https://www.apple.com/hk/shop/buy-mac/macbook-pro" },
  { country: "Japan", code: "JP", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 148.00 JPY", priceInUsd: 0, vsUsPrice: "", taxRate: 0.10, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.10, appleStoreUrl: "https://www.apple.com/jp/shop/buy-mac/macbook-pro" },
  { country: "Malaysia", code: "MY", officialPrice: "", taxStatus: "Tax Extra", fxRate: "1 USD = 4.62 MYR", priceInUsd: 0, vsUsPrice: "", taxRate: 0.10, taxIncluded: false, vatRefundEligible: false, refundPercentage: 0, appleStoreUrl: "https://www.apple.com/my/shop/buy-mac/macbook-pro" },
  { country: "Canada", code: "CA", officialPrice: "", taxStatus: "Tax Extra", fxRate: "1 USD = 1.35 CAD", priceInUsd: 0, vsUsPrice: "", taxRate: 0.13, taxIncluded: false, vatRefundEligible: false, refundPercentage: 0, appleStoreUrl: "https://www.apple.com/ca/shop/buy-mac/macbook-pro" },
  { country: "Singapore", code: "SG", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 1.34 SGD", priceInUsd: 0, vsUsPrice: "", taxRate: 0.09, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.09, appleStoreUrl: "https://www.apple.com/sg/shop/buy-mac/macbook-pro" },
  { country: "Vietnam", code: "VN", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 24500 VND", priceInUsd: 0, vsUsPrice: "", taxRate: 0.10, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0, appleStoreUrl: "https://www.apple.com/vn/shop/buy-mac/macbook-pro" },
  { country: "Taiwan", code: "TW", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 31.50 TWD", priceInUsd: 0, vsUsPrice: "", taxRate: 0.05, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0, appleStoreUrl: "https://www.apple.com/tw/shop/buy-mac/macbook-pro" },
  { country: "United Arab Emirates", code: "AE", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 3.67 AED", priceInUsd: 0, vsUsPrice: "", taxRate: 0.05, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.05, appleStoreUrl: "https://www.apple.com/ae/shop/buy-mac/macbook-pro" },
  { country: "Australia", code: "AU", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 1.52 AUD", priceInUsd: 0, vsUsPrice: "", taxRate: 0.10, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.10, appleStoreUrl: "https://www.apple.com/au/shop/buy-mac/macbook-pro" },
  { country: "New Zealand", code: "NZ", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 1.65 NZD", priceInUsd: 0, vsUsPrice: "", taxRate: 0.15, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0, appleStoreUrl: "https://www.apple.com/nz/shop/buy-mac/macbook-pro" },
  { country: "South Korea", code: "KR", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 1320 KRW", priceInUsd: 0, vsUsPrice: "", taxRate: 0.10, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.10, appleStoreUrl: "https://www.apple.com/kr/shop/buy-mac/macbook-pro" },
  { country: "China", code: "CN", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 7.25 CNY", priceInUsd: 0, vsUsPrice: "", taxRate: 0.13, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.13, appleStoreUrl: "https://www.apple.com/cn/shop/buy-mac/macbook-pro" },
  { country: "Philippines", code: "PH", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 56.50 PHP", priceInUsd: 0, vsUsPrice: "", taxRate: 0.12, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0, appleStoreUrl: "https://www.apple.com/ph/shop/buy-mac/macbook-pro" },
  { country: "Mexico", code: "MX", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 17.20 MXN", priceInUsd: 0, vsUsPrice: "", taxRate: 0.16, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0, appleStoreUrl: "https://www.apple.com/mx/shop/buy-mac/macbook-pro" },
  { country: "India", code: "IN", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 83.20 INR", priceInUsd: 0, vsUsPrice: "", taxRate: 0.18, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0, appleStoreUrl: "https://www.apple.com/in/shop/buy-mac/macbook-pro" },
  { country: "Poland", code: "PL", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 4.05 PLN", priceInUsd: 0, vsUsPrice: "", taxRate: 0.23, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.23, appleStoreUrl: "https://www.apple.com/pl/shop/buy-mac/macbook-pro" },
  { country: "Luxembourg", code: "LU", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 0.92 EUR", priceInUsd: 0, vsUsPrice: "", taxRate: 0.17, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.17, appleStoreUrl: "https://www.apple.com/lu/shop/buy-mac/macbook-pro" },
  { country: "Germany", code: "DE", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 0.92 EUR", priceInUsd: 0, vsUsPrice: "", taxRate: 0.19, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.19, appleStoreUrl: "https://www.apple.com/de/shop/buy-mac/macbook-pro" },
  { country: "Austria", code: "AT", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 0.92 EUR", priceInUsd: 0, vsUsPrice: "", taxRate: 0.20, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.20, appleStoreUrl: "https://www.apple.com/at/shop/buy-mac/macbook-pro" },
  { country: "France", code: "FR", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 0.92 EUR", priceInUsd: 0, vsUsPrice: "", taxRate: 0.20, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.20, appleStoreUrl: "https://www.apple.com/fr/shop/buy-mac/macbook-pro" },
  { country: "Spain", code: "ES", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 0.92 EUR", priceInUsd: 0, vsUsPrice: "", taxRate: 0.21, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.21, appleStoreUrl: "https://www.apple.com/es/shop/buy-mac/macbook-pro" },
  { country: "Netherlands", code: "NL", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 0.92 EUR", priceInUsd: 0, vsUsPrice: "", taxRate: 0.21, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.21, appleStoreUrl: "https://www.apple.com/nl/shop/buy-mac/macbook-pro" },
  { country: "Italy", code: "IT", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 0.92 EUR", priceInUsd: 0, vsUsPrice: "", taxRate: 0.22, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.22, appleStoreUrl: "https://www.apple.com/it/shop/buy-mac/macbook-pro" },
  { country: "Portugal", code: "PT", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 0.92 EUR", priceInUsd: 0, vsUsPrice: "", taxRate: 0.23, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.23, appleStoreUrl: "https://www.apple.com/pt/shop/buy-mac/macbook-pro" },
  { country: "Ireland", code: "IE", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 0.92 EUR", priceInUsd: 0, vsUsPrice: "", taxRate: 0.23, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.23, appleStoreUrl: "https://www.apple.com/ie/shop/buy-mac/macbook-pro" },
  { country: "Denmark", code: "DKK", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 6.88 DKK", priceInUsd: 0, vsUsPrice: "", taxRate: 0.25, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.25, appleStoreUrl: "https://www.apple.com/dk/shop/buy-mac/macbook-pro" },
  { country: "Sweden", code: "SE", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 10.50 SEK", priceInUsd: 0, vsUsPrice: "", taxRate: 0.25, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.25, appleStoreUrl: "https://www.apple.com/se/shop/buy-mac/macbook-pro" },
  { country: "Norway", code: "NO", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 10.80 NOK", priceInUsd: 0, vsUsPrice: "", taxRate: 0.25, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.25, appleStoreUrl: "https://www.apple.com/no/shop/buy-mac/macbook-pro" },
  { country: "Czech Republic", code: "CZ", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 23.20 CZK", priceInUsd: 0, vsUsPrice: "", taxRate: 0.21, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.21, appleStoreUrl: "https://www.apple.com/cz/shop/buy-mac/macbook-pro" },
  { country: "Turkey", code: "TR", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 32.50 TRY", priceInUsd: 0, vsUsPrice: "", taxRate: 0.20, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.20, appleStoreUrl: "https://www.apple.com/tr/shop/buy-mac/macbook-pro" },
  { country: "Chile", code: "CL", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 950 CLP", priceInUsd: 0, vsUsPrice: "", taxRate: 0.19, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0, appleStoreUrl: "https://www.apple.com/cl/shop/buy-mac/macbook-pro" },
  { country: "Brazil", code: "BR", officialPrice: "", taxStatus: "Tax Included", fxRate: "1 USD = 4.98 BRL", priceInUsd: 0, vsUsPrice: "", taxRate: 0.25, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0, appleStoreUrl: "https://www.apple.com/br/shop/buy-mac/macbook-pro" }
];
