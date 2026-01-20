import fs from 'fs';
import path from 'path';

export interface PriceData {
  productId: string;
  productName: string;
  country: string;
  countryCode: string;
  officialPrice: string | null;
  officialCurrency: string;
  taxRate: number;
  taxIncluded: boolean;
  vatRefundEligible: boolean;
  refundPercentage: number;
  priceInUsd?: number;
}

export function loadPricesFromCSV(): PriceData[] {
  const csvPath = path.join(process.cwd(), 'data', 'prices.csv');
  const fileContents = fs.readFileSync(csvPath, 'utf-8');
  
  const lines = fileContents.trim().split('\n').slice(1); // Skip header
  const prices: PriceData[] = [];

  for (const line of lines) {
    if (!line.trim()) continue;
    
    // Properly parse CSV with quoted fields
    const fields: string[] = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        fields.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    fields.push(current); // Last field
    
    const productId = fields[0];
    const productName = fields[1];
    const country = fields[2];
    const countryCode = fields[3];
    const officialPrice = fields[4] || null;
    const officialCurrency = fields[5];
    const taxRate = parseFloat(fields[6]);
    const taxIncluded = fields[7] === 'true';
    const vatRefundEligible = fields[8] === 'true';
    const refundPercentage = parseFloat(fields[9]);

    let priceInUsd: number | undefined;
    if (officialPrice) {
      const numericPrice = parseFloat(officialPrice);
      const rates: {[key: string]: number} = {
        'USD': 1, 'GBP': 0.79, 'EUR': 0.92, 'THB': 35.60, 'HKD': 7.80,
        'JPY': 148, 'MYR': 4.62, 'CAD': 1.35, 'SGD': 1.34, 'VND': 24500,
        'TWD': 31.50, 'AED': 3.67, 'AUD': 1.52, 'NZD': 1.65, 'KRW': 1320,
        'CNY': 7.25, 'PHP': 56.50, 'MXN': 17.20, 'INR': 83.20, 'PLN': 4.05,
        'DKK': 6.88, 'SEK': 10.50, 'NOK': 10.80, 'CZK': 23.20, 'TRY': 32.50,
        'CLP': 950, 'BRL': 4.98
      };
      
      const rate = rates[officialCurrency] || 1;
      priceInUsd = numericPrice / rate;
    }

    prices.push({
      productId,
      productName,
      country,
      countryCode,
      officialPrice,
      officialCurrency,
      taxRate,
      taxIncluded,
      vatRefundEligible,
      refundPercentage,
      priceInUsd
    });
  }

  return prices;
}
