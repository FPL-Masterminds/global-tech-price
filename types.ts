
export interface ProductPrice {
  country: string;
  code: string;
  officialPrice: string;
  taxStatus: string;
  fxRate: string;
  priceInUsd: number;
  vsUsPrice: string;
}

export interface Product {
  id: string;
  name: string;
  basePriceUsd: number;
}
