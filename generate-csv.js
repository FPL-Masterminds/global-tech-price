const fs = require('fs');

const products = [
  { id: 'mbp14-m4-16-512', name: 'MacBook Pro 14" M4 16GB 512GB' },
  { id: 'mbp14-m4-16-1tb', name: 'MacBook Pro 14" M4 16GB 1TB' },
  { id: 'mbp14-m4pro-20-512', name: 'MacBook Pro 14" M4 Pro 20GB 512GB' },
  { id: 'mbp14-m4pro-24-512', name: 'MacBook Pro 14" M4 Pro 24GB 512GB' },
  { id: 'mbp14-m4pro-24-1tb', name: 'MacBook Pro 14" M4 Pro 24GB 1TB' },
  { id: 'mbp14-m4max-36-1tb', name: 'MacBook Pro 14" M4 Max 36GB 1TB' },
  { id: 'mbp16-m4pro-24-512', name: 'MacBook Pro 16" M4 Pro 24GB 512GB' },
  { id: 'mbp16-m4pro-48-512', name: 'MacBook Pro 16" M4 Pro 48GB 512GB' },
  { id: 'mbp16-m4max-48-1tb', name: 'MacBook Pro 16" M4 Max 48GB 1TB' },
  { id: 'mbp14-m3-8-512', name: 'MacBook Pro 14" M3 8GB 512GB' },
  { id: 'mbp14-m3-8-1tb', name: 'MacBook Pro 14" M3 8GB 1TB' },
  { id: 'mbp14-m3pro-18-512', name: 'MacBook Pro 14" M3 Pro 18GB 512GB' },
  { id: 'mbp14-m3pro-18-1tb', name: 'MacBook Pro 14" M3 Pro 18GB 1TB' },
  { id: 'mbp14-m3max-36-1tb', name: 'MacBook Pro 14" M3 Max 36GB 1TB' },
  { id: 'mbp16-m3pro-18-512', name: 'MacBook Pro 16" M3 Pro 18GB 512GB' },
  { id: 'mbp16-m3pro-36-512', name: 'MacBook Pro 16" M3 Pro 36GB 512GB' },
  { id: 'mbp16-m3max-36-1tb', name: 'MacBook Pro 16" M3 Max 36GB 1TB' }
];

const countries = [
  {country:'United States',code:'US',currency:'USD',tax:0.0825,taxInc:false,vat:false,vatPct:0},
  {country:'United Kingdom',code:'GB',currency:'GBP',tax:0.20,taxInc:true,vat:true,vatPct:20},
  {country:'Thailand',code:'TH',currency:'THB',tax:0.07,taxInc:true,vat:true,vatPct:7},
  {country:'Hong Kong',code:'HK',currency:'HKD',tax:0.00,taxInc:false,vat:false,vatPct:0},
  {country:'Japan',code:'JP',currency:'JPY',tax:0.10,taxInc:true,vat:true,vatPct:10},
  {country:'Malaysia',code:'MY',currency:'MYR',tax:0.10,taxInc:false,vat:false,vatPct:0},
  {country:'Canada',code:'CA',currency:'CAD',tax:0.13,taxInc:false,vat:false,vatPct:0},
  {country:'Singapore',code:'SG',currency:'SGD',tax:0.09,taxInc:true,vat:true,vatPct:9},
  {country:'Vietnam',code:'VN',currency:'VND',tax:0.10,taxInc:true,vat:false,vatPct:0},
  {country:'Taiwan',code:'TW',currency:'TWD',tax:0.05,taxInc:true,vat:false,vatPct:0},
  {country:'United Arab Emirates',code:'AE',currency:'AED',tax:0.05,taxInc:true,vat:true,vatPct:5},
  {country:'Australia',code:'AU',currency:'AUD',tax:0.10,taxInc:true,vat:true,vatPct:10},
  {country:'New Zealand',code:'NZ',currency:'NZD',tax:0.15,taxInc:true,vat:false,vatPct:0},
  {country:'South Korea',code:'KR',currency:'KRW',tax:0.10,taxInc:true,vat:true,vatPct:10},
  {country:'China',code:'CN',currency:'CNY',tax:0.13,taxInc:true,vat:true,vatPct:13},
  {country:'Philippines',code:'PH',currency:'PHP',tax:0.12,taxInc:true,vat:false,vatPct:0},
  {country:'Mexico',code:'MX',currency:'MXN',tax:0.16,taxInc:true,vat:false,vatPct:0},
  {country:'India',code:'IN',currency:'INR',tax:0.18,taxInc:true,vat:false,vatPct:0},
  {country:'Poland',code:'PL',currency:'PLN',tax:0.23,taxInc:true,vat:true,vatPct:23},
  {country:'Luxembourg',code:'LU',currency:'EUR',tax:0.17,taxInc:true,vat:true,vatPct:17},
  {country:'Germany',code:'DE',currency:'EUR',tax:0.19,taxInc:true,vat:true,vatPct:19},
  {country:'Austria',code:'AT',currency:'EUR',tax:0.20,taxInc:true,vat:true,vatPct:20},
  {country:'France',code:'FR',currency:'EUR',tax:0.20,taxInc:true,vat:true,vatPct:20},
  {country:'Spain',code:'ES',currency:'EUR',tax:0.21,taxInc:true,vat:true,vatPct:21},
  {country:'Netherlands',code:'NL',currency:'EUR',tax:0.21,taxInc:true,vat:true,vatPct:21},
  {country:'Italy',code:'IT',currency:'EUR',tax:0.22,taxInc:true,vat:true,vatPct:22},
  {country:'Portugal',code:'PT',currency:'EUR',tax:0.23,taxInc:true,vat:true,vatPct:23},
  {country:'Ireland',code:'IE',currency:'EUR',tax:0.23,taxInc:true,vat:true,vatPct:23},
  {country:'Denmark',code:'DK',currency:'DKK',tax:0.25,taxInc:true,vat:true,vatPct:25},
  {country:'Sweden',code:'SE',currency:'SEK',tax:0.25,taxInc:true,vat:true,vatPct:25},
  {country:'Norway',code:'NO',currency:'NOK',tax:0.25,taxInc:true,vat:true,vatPct:25},
  {country:'Czech Republic',code:'CZ',currency:'CZK',tax:0.21,taxInc:true,vat:true,vatPct:21},
  {country:'Turkey',code:'TR',currency:'TRY',tax:0.20,taxInc:true,vat:true,vatPct:20},
  {country:'Chile',code:'CL',currency:'CLP',tax:0.19,taxInc:true,vat:false,vatPct:0},
  {country:'Brazil',code:'BR',currency:'BRL',tax:0.25,taxInc:true,vat:false,vatPct:0}
];

// Czech prices I scraped
const czechPrices = {
  'mbp14-m4-16-512': '45990',
  'mbp14-m4-16-1tb': '51990',
  'mbp14-m4pro-24-512': '56990',
  'mbp14-m4pro-24-1tb': '68990',
  'mbp14-m4max-36-1tb': '92990',
  'mbp16-m4pro-24-512': '69990',
  'mbp16-m4pro-48-512': '81990',
  'mbp16-m4max-48-1tb': '114990'
};

let csv = 'productId,productName,country,countryCode,officialPrice,officialCurrency,taxRate,taxIncluded,vatRefundEligible,refundPercentage,amazonKeyword\n';

// ORGANIZED BY COUNTRY (not product)
countries.forEach(c => {
  products.forEach(p => {
    // Add Czech price if we have it
    const price = (c.code === 'CZ' && czechPrices[p.id]) ? czechPrices[p.id] : '';
    // Escape quotes in product name for proper CSV format
    const escapedName = p.name.replace(/"/g, '""');
    csv += `${p.id},"${escapedName}",${c.country},${c.code},${price},${c.currency},${c.tax},${c.taxInc},${c.vat},${c.vatPct},"${escapedName}"\n`;
  });
});

fs.writeFileSync('data/prices.csv', csv);
console.log(`✅ Generated ${products.length * countries.length} rows (35 countries × ${products.length} Mac products)`);
console.log('✅ Organized by COUNTRY (not product)');
console.log(`✅ Added Czech prices for ${Object.keys(czechPrices).length} M4 MacBook Pros`);
