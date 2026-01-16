
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
  // M4 Models (Latest - Nov 2024)
  { id: 'mbp14-m4-16-512', name: 'MacBook Pro 14" M4 16GB 512GB', basePriceUsd: 1599 },
  { id: 'mbp14-m4-16-1tb', name: 'MacBook Pro 14" M4 16GB 1TB', basePriceUsd: 1799 },
  { id: 'mbp14-m4pro-20-512', name: 'MacBook Pro 14" M4 Pro 20GB 512GB', basePriceUsd: 1999 },
  { id: 'mbp14-m4pro-24-1tb', name: 'MacBook Pro 14" M4 Pro 24GB 1TB', basePriceUsd: 2399 },
  { id: 'mbp14-m4max-36-1tb', name: 'MacBook Pro 14" M4 Max 36GB 1TB', basePriceUsd: 3199 },
  { id: 'mbp16-m4pro-24-512', name: 'MacBook Pro 16" M4 Pro 24GB 512GB', basePriceUsd: 2499 },
  { id: 'mbp16-m4pro-48-512', name: 'MacBook Pro 16" M4 Pro 48GB 512GB', basePriceUsd: 2899 },
  { id: 'mbp16-m4max-48-1tb', name: 'MacBook Pro 16" M4 Max 48GB 1TB', basePriceUsd: 3499 },
  
  // M3 Models (2023)
  { id: 'mbp14-m3-8-512', name: 'MacBook Pro 14" M3 8GB 512GB', basePriceUsd: 1599 },
  { id: 'mbp14-m3-8-1tb', name: 'MacBook Pro 14" M3 8GB 1TB', basePriceUsd: 1799 },
  { id: 'mbp14-m3pro-18-512', name: 'MacBook Pro 14" M3 Pro 18GB 512GB', basePriceUsd: 1999 },
  { id: 'mbp14-m3pro-18-1tb', name: 'MacBook Pro 14" M3 Pro 18GB 1TB', basePriceUsd: 2199 },
  { id: 'mbp14-m3max-36-1tb', name: 'MacBook Pro 14" M3 Max 36GB 1TB', basePriceUsd: 3099 },
  { id: 'mbp16-m3pro-18-512', name: 'MacBook Pro 16" M3 Pro 18GB 512GB', basePriceUsd: 2499 },
  { id: 'mbp16-m3pro-36-512', name: 'MacBook Pro 16" M3 Pro 36GB 512GB', basePriceUsd: 2899 },
  { id: 'mbp16-m3max-36-1tb', name: 'MacBook Pro 16" M3 Max 36GB 1TB', basePriceUsd: 3499 },
  
  // Other Products
  { id: 'iphone15pro', name: 'iPhone 15 Pro', basePriceUsd: 999 },
  { id: 'ipadpro', name: 'iPad Pro 12.9"', basePriceUsd: 1099 },
  { id: 'airpodsmax', name: 'AirPods Max', basePriceUsd: 549 }
];

export const MOCK_PRICES = [
  { country: "United Kingdom", code: "GB", officialPrice: "GBP 1,699", taxStatus: "Incl. VAT", fxRate: "1 USD = 0.79 GBP", priceInUsd: 2150, vsUsPrice: "+$551", taxRate: 0.20, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.20 },
  { country: "United States", code: "US", officialPrice: "USD 1,599", taxStatus: "+ Tax", fxRate: "1 USD = 1.00 USD", priceInUsd: 1599, vsUsPrice: "+$0", taxRate: 0.07, taxIncluded: false, vatRefundEligible: false, refundPercentage: 0 },
  { country: "Thailand", code: "TH", officialPrice: "THB 56,900", taxStatus: "Incl. VAT", fxRate: "1 USD = 35.60 THB", priceInUsd: 1598, vsUsPrice: "-$1", taxRate: 0.07, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.07 },
  { country: "Hong Kong", code: "HK", officialPrice: "HKD 12,499", taxStatus: "+ Tax", fxRate: "1 USD = 7.80 HKD", priceInUsd: 1602, vsUsPrice: "+$3", taxRate: 0.00, taxIncluded: false, vatRefundEligible: false, refundPercentage: 0 },
  { country: "Japan", code: "JP", officialPrice: "JPY 248,800", taxStatus: "Incl. Tax", fxRate: "1 USD = 148.00 JPY", priceInUsd: 1681, vsUsPrice: "+$82", taxRate: 0.10, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.10 },
  { country: "Malaysia", code: "MY", officialPrice: "MYR 7,399", taxStatus: "+ Tax", fxRate: "1 USD = 4.62 MYR", priceInUsd: 1602, vsUsPrice: "+$3", taxRate: 0.10, taxIncluded: false, vatRefundEligible: false, refundPercentage: 0 },
  { country: "Canada", code: "CA", officialPrice: "CAD 2,149", taxStatus: "+ Tax", fxRate: "1 USD = 1.35 CAD", priceInUsd: 1592, vsUsPrice: "-$7", taxRate: 0.13, taxIncluded: false, vatRefundEligible: false, refundPercentage: 0 },
  { country: "Singapore", code: "SG", officialPrice: "SGD 2,399", taxStatus: "Incl. GST", fxRate: "1 USD = 1.34 SGD", priceInUsd: 1789, vsUsPrice: "+$190", taxRate: 0.09, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.09 },
  { country: "Vietnam", code: "VN", officialPrice: "VND 41,990,000", taxStatus: "Incl. VAT", fxRate: "1 USD = 24500 VND", priceInUsd: 1714, vsUsPrice: "+$115", taxRate: 0.10, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0 },
  { country: "Taiwan", code: "TW", officialPrice: "TWD 52,900", taxStatus: "Incl. Tax", fxRate: "1 USD = 31.50 TWD", priceInUsd: 1679, vsUsPrice: "+$80", taxRate: 0.05, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0 },
  { country: "United Arab Emirates", code: "AE", officialPrice: "AED 6,199", taxStatus: "Incl. VAT", fxRate: "1 USD = 3.67 AED", priceInUsd: 1689, vsUsPrice: "+$90", taxRate: 0.05, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.05 },
  { country: "Australia", code: "AU", officialPrice: "AUD 2,699", taxStatus: "Incl. GST", fxRate: "1 USD = 1.52 AUD", priceInUsd: 1775, vsUsPrice: "+$176", taxRate: 0.10, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.10 },
  { country: "New Zealand", code: "NZ", officialPrice: "NZD 2,899", taxStatus: "Incl. GST", fxRate: "1 USD = 1.65 NZD", priceInUsd: 1757, vsUsPrice: "+$158", taxRate: 0.15, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0 },
  { country: "South Korea", code: "KR", officialPrice: "KRW 2,190,000", taxStatus: "Incl. VAT", fxRate: "1 USD = 1320 KRW", priceInUsd: 1659, vsUsPrice: "+$60", taxRate: 0.10, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.10 },
  { country: "China", code: "CN", officialPrice: "CNY 12,999", taxStatus: "Incl. Tax", fxRate: "1 USD = 7.25 CNY", priceInUsd: 1793, vsUsPrice: "+$194", taxRate: 0.13, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.13 },
  { country: "Philippines", code: "PH", officialPrice: "PHP 94,990", taxStatus: "Incl. VAT", fxRate: "1 USD = 56.50 PHP", priceInUsd: 1681, vsUsPrice: "+$82", taxRate: 0.12, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0 },
  { country: "Mexico", code: "MX", officialPrice: "MXN 33,999", taxStatus: "Incl. IVA", fxRate: "1 USD = 17.20 MXN", priceInUsd: 1977, vsUsPrice: "+$378", taxRate: 0.16, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0 },
  { country: "India", code: "IN", officialPrice: "INR 169,900", taxStatus: "Incl. GST", fxRate: "1 USD = 83.20 INR", priceInUsd: 2042, vsUsPrice: "+$443", taxRate: 0.18, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0 },
  { country: "Poland", code: "PL", officialPrice: "PLN 8,499", taxStatus: "Incl. VAT", fxRate: "1 USD = 4.05 PLN", priceInUsd: 2098, vsUsPrice: "+$499", taxRate: 0.23, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.23 },
  { country: "Luxembourg", code: "LU", officialPrice: "EUR 1,899", taxStatus: "Incl. VAT", fxRate: "1 USD = 0.92 EUR", priceInUsd: 2064, vsUsPrice: "+$465", taxRate: 0.17, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.17 },
  { country: "Germany", code: "DE", officialPrice: "EUR 1,999", taxStatus: "Incl. VAT", fxRate: "1 USD = 0.92 EUR", priceInUsd: 2173, vsUsPrice: "+$574", taxRate: 0.19, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.19 },
  { country: "Austria", code: "AT", officialPrice: "EUR 1,999", taxStatus: "Incl. VAT", fxRate: "1 USD = 0.92 EUR", priceInUsd: 2173, vsUsPrice: "+$574", taxRate: 0.20, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.20 },
  { country: "France", code: "FR", officialPrice: "EUR 1,999", taxStatus: "Incl. VAT", fxRate: "1 USD = 0.92 EUR", priceInUsd: 2173, vsUsPrice: "+$574", taxRate: 0.20, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.20 },
  { country: "Spain", code: "ES", officialPrice: "EUR 1,999", taxStatus: "Incl. VAT", fxRate: "1 USD = 0.92 EUR", priceInUsd: 2173, vsUsPrice: "+$574", taxRate: 0.21, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.21 },
  { country: "Netherlands", code: "NL", officialPrice: "EUR 1,999", taxStatus: "Incl. VAT", fxRate: "1 USD = 0.92 EUR", priceInUsd: 2173, vsUsPrice: "+$574", taxRate: 0.21, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.21 },
  { country: "Italy", code: "IT", officialPrice: "EUR 1,999", taxStatus: "Incl. VAT", fxRate: "1 USD = 0.92 EUR", priceInUsd: 2173, vsUsPrice: "+$574", taxRate: 0.22, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.22 },
  { country: "Portugal", code: "PT", officialPrice: "EUR 1,999", taxStatus: "Incl. VAT", fxRate: "1 USD = 0.92 EUR", priceInUsd: 2173, vsUsPrice: "+$574", taxRate: 0.23, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.23 },
  { country: "Ireland", code: "IE", officialPrice: "EUR 1,899", taxStatus: "Incl. VAT", fxRate: "1 USD = 0.92 EUR", priceInUsd: 2064, vsUsPrice: "+$465", taxRate: 0.23, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.23 },
  { country: "Denmark", code: "DK", officialPrice: "DKK 14,999", taxStatus: "Incl. VAT", fxRate: "1 USD = 6.88 DKK", priceInUsd: 2180, vsUsPrice: "+$581", taxRate: 0.25, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.25 },
  { country: "Sweden", code: "SE", officialPrice: "SEK 21,995", taxStatus: "Incl. VAT", fxRate: "1 USD = 10.50 SEK", priceInUsd: 2095, vsUsPrice: "+$496", taxRate: 0.25, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.25 },
  { country: "Norway", code: "NO", officialPrice: "NOK 21,990", taxStatus: "Incl. VAT", fxRate: "1 USD = 10.80 NOK", priceInUsd: 2036, vsUsPrice: "+$437", taxRate: 0.25, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.25 },
  { country: "Czech Republic", code: "CZ", officialPrice: "CZK 48,990", taxStatus: "Incl. VAT", fxRate: "1 USD = 23.20 CZK", priceInUsd: 2112, vsUsPrice: "+$513", taxRate: 0.21, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.21 },
  { country: "Turkey", code: "TR", officialPrice: "TRY 52,999", taxStatus: "Incl. KDV", fxRate: "1 USD = 32.50 TRY", priceInUsd: 1631, vsUsPrice: "+$32", taxRate: 0.20, taxIncluded: true, vatRefundEligible: true, refundPercentage: 0.20 },
  { country: "Chile", code: "CL", officialPrice: "CLP 1,699,990", taxStatus: "Incl. IVA", fxRate: "1 USD = 950 CLP", priceInUsd: 1789, vsUsPrice: "+$190", taxRate: 0.19, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0 },
  { country: "Brazil", code: "BR", officialPrice: "BRL 12,499", taxStatus: "Incl. ICMS", fxRate: "1 USD = 4.98 BRL", priceInUsd: 2510, vsUsPrice: "+$911", taxRate: 0.25, taxIncluded: true, vatRefundEligible: false, refundPercentage: 0 }
];
