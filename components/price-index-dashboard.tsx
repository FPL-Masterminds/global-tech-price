"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, ExternalLink } from "lucide-react"

// Mock data structure
type CountryPrice = {
  country: string
  countryCode: string
  flag: string
  localCurrency: string
  localPrice: number
  taxRate: number
  taxType: string
  exchangeRate: number // relative to USD
}

type Product = {
  id: string
  name: string
  prices: CountryPrice[]
}

const products: Product[] = [
  {
    id: "mbp14-m3",
    name: 'MacBook Pro 14" M3',
    prices: [
      {
        country: "United States",
        countryCode: "US",
        flag: "🇺🇸",
        localCurrency: "USD",
        localPrice: 1599,
        taxRate: 0,
        taxType: "Varies by State",
        exchangeRate: 1,
      },
      {
        country: "United Kingdom",
        countryCode: "GB",
        flag: "🇬🇧",
        localCurrency: "GBP",
        localPrice: 1699,
        taxRate: 20,
        taxType: "VAT",
        exchangeRate: 0.79,
      },
      {
        country: "Japan",
        countryCode: "JP",
        flag: "🇯🇵",
        localCurrency: "JPY",
        localPrice: 248800,
        taxRate: 10,
        taxType: "GST",
        exchangeRate: 148,
      },
      {
        country: "Malaysia",
        countryCode: "MY",
        flag: "🇲🇾",
        localCurrency: "MYR",
        localPrice: 7399,
        taxRate: 0,
        taxType: "No Tax",
        exchangeRate: 4.62,
      },
      {
        country: "Brazil",
        countryCode: "BR",
        flag: "🇧🇷",
        localCurrency: "BRL",
        localPrice: 12499,
        taxRate: 17,
        taxType: "ICMS",
        exchangeRate: 4.98,
      },
      {
        country: "France",
        countryCode: "FR",
        flag: "🇫🇷",
        localCurrency: "EUR",
        localPrice: 1899,
        taxRate: 20,
        taxType: "VAT",
        exchangeRate: 0.92,
      },
      {
        country: "Australia",
        countryCode: "AU",
        flag: "🇦🇺",
        localCurrency: "AUD",
        localPrice: 2699,
        taxRate: 10,
        taxType: "GST",
        exchangeRate: 1.52,
      },
      {
        country: "Singapore",
        countryCode: "SG",
        flag: "🇸🇬",
        localCurrency: "SGD",
        localPrice: 2399,
        taxRate: 9,
        taxType: "GST",
        exchangeRate: 1.34,
      },
    ],
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    prices: [
      {
        country: "United States",
        countryCode: "US",
        flag: "🇺🇸",
        localCurrency: "USD",
        localPrice: 999,
        taxRate: 0,
        taxType: "Varies by State",
        exchangeRate: 1,
      },
      {
        country: "United Kingdom",
        countryCode: "GB",
        flag: "🇬🇧",
        localCurrency: "GBP",
        localPrice: 999,
        taxRate: 20,
        taxType: "VAT",
        exchangeRate: 0.79,
      },
      {
        country: "Japan",
        countryCode: "JP",
        flag: "🇯🇵",
        localCurrency: "JPY",
        localPrice: 159800,
        taxRate: 10,
        taxType: "GST",
        exchangeRate: 148,
      },
      {
        country: "Malaysia",
        countryCode: "MY",
        flag: "🇲🇾",
        localCurrency: "MYR",
        localPrice: 5499,
        taxRate: 0,
        taxType: "No Tax",
        exchangeRate: 4.62,
      },
      {
        country: "Brazil",
        countryCode: "BR",
        flag: "🇧🇷",
        localCurrency: "BRL",
        localPrice: 9499,
        taxRate: 17,
        taxType: "ICMS",
        exchangeRate: 4.98,
      },
      {
        country: "France",
        countryCode: "FR",
        flag: "🇫🇷",
        localCurrency: "EUR",
        localPrice: 1229,
        taxRate: 20,
        taxType: "VAT",
        exchangeRate: 0.92,
      },
      {
        country: "Australia",
        countryCode: "AU",
        flag: "🇦🇺",
        localCurrency: "AUD",
        localPrice: 1849,
        taxRate: 10,
        taxType: "GST",
        exchangeRate: 1.52,
      },
      {
        country: "Singapore",
        countryCode: "SG",
        flag: "🇸🇬",
        localCurrency: "SGD",
        localPrice: 1649,
        taxRate: 9,
        taxType: "GST",
        exchangeRate: 1.34,
      },
    ],
  },
]

const currencies = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen" },
]

export function PriceIndexDashboard() {
  const [selectedProduct, setSelectedProduct] = useState(products[0].id)
  const [referenceCurrency, setReferenceCurrency] = useState("USD")
  const [includeTaxes, setIncludeTaxes] = useState(true)

  const currentProduct = products.find((p) => p.id === selectedProduct)!
  const refCurrency = currencies.find((c) => c.code === referenceCurrency)!

  // Calculate converted prices and comparison
  const processedData = useMemo(() => {
    const usPrice = currentProduct.prices.find((p) => p.countryCode === "US")!
    const usBasePrice = includeTaxes ? usPrice.localPrice * (1 + usPrice.taxRate / 100) : usPrice.localPrice

    return currentProduct.prices.map((price) => {
      const basePrice = includeTaxes ? price.localPrice * (1 + price.taxRate / 100) : price.localPrice

      // Convert to reference currency
      const refExchangeRate = currencies.find((c) => c.code === referenceCurrency)!
      const priceInUSD = basePrice / price.exchangeRate
      const convertedPrice =
        referenceCurrency === "USD"
          ? priceInUSD
          : priceInUSD * (currentProduct.prices.find((p) => p.localCurrency === referenceCurrency)?.exchangeRate || 1)

      const usPriceInRef =
        referenceCurrency === "USD"
          ? usBasePrice
          : usBasePrice * (currentProduct.prices.find((p) => p.localCurrency === referenceCurrency)?.exchangeRate || 1)

      const diff = convertedPrice - usPriceInRef
      const percentDiff = (diff / usPriceInRef) * 100

      return {
        ...price,
        convertedPrice,
        diff,
        percentDiff,
        isGoodValue: diff < 0,
      }
    })
  }, [currentProduct, referenceCurrency, includeTaxes])

  const handleDownloadCSV = () => {
    const headers = [
      "Country",
      "Local Price",
      "Tax Rate",
      "Exchange Rate",
      `Converted Price (${referenceCurrency})`,
      "Diff vs US",
      "Arbitrage",
    ]

    const rows = processedData.map((row) => [
      row.country,
      `${row.localCurrency} ${row.localPrice.toLocaleString()}`,
      `${row.taxRate}% ${row.taxType}`,
      `1 USD = ${row.exchangeRate} ${row.localCurrency}`,
      `${refCurrency.symbol}${row.convertedPrice.toFixed(2)}`,
      `${row.diff >= 0 ? "+" : ""}${refCurrency.symbol}${row.diff.toFixed(2)} (${row.percentDiff.toFixed(1)}%)`,
      row.isGoodValue
        ? `Save ${refCurrency.symbol}${Math.abs(row.diff).toFixed(2)}`
        : `+${refCurrency.symbol}${row.diff.toFixed(2)}`,
    ])

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `apple-price-index-${selectedProduct}-${Date.now()}.csv`
    a.click()
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 py-6">
          <h1 className="text-2xl font-semibold text-center mb-1.5 text-gray-900">Global Apple Price Index</h1>
          <p className="text-center text-xs text-gray-500">
            Live FX & Tax Data • Find the Best Country to Buy Apple Products
          </p>
        </div>
      </div>

      {/* Control Bar */}
      <div className="border-b border-gray-200 bg-gray-50/50">
        <div className="max-w-[1600px] mx-auto px-8 py-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <label className="text-xs font-medium text-gray-700">Product:</label>
              <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                <SelectTrigger className="w-[220px] h-8 bg-white text-sm border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {products.map((product) => (
                    <SelectItem key={product.id} value={product.id} className="text-sm">
                      {product.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-xs font-medium text-gray-700">Reference Currency:</label>
              <Select value={referenceCurrency} onValueChange={setReferenceCurrency}>
                <SelectTrigger className="w-[140px] h-8 bg-white text-sm border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code} className="text-sm">
                      {currency.code}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-xs font-medium text-gray-700">Include Taxes:</label>
              <button
                onClick={() => setIncludeTaxes(!includeTaxes)}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                  includeTaxes ? "bg-[#00E37C]" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                    includeTaxes ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
              <span className="text-xs text-gray-500">{includeTaxes ? "Gross" : "Net"}</span>
            </div>

            <div className="ml-auto">
              <Button
                onClick={handleDownloadCSV}
                size="sm"
                className="gap-1.5 h-8 bg-[#00E37C] hover:bg-[#00C969] text-black font-medium text-xs px-3"
              >
                <Download className="h-3.5 w-3.5" />
                Download CSV
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Data Grid */}
      <div className="max-w-[1600px] mx-auto px-4 py-4">
        <div className="rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="sticky top-0 z-10">
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="sticky left-0 z-20 bg-gray-100 px-4 py-2 text-left text-[11px] font-semibold text-gray-600 uppercase tracking-wide border-r border-gray-200 shadow-[4px_0_6px_rgba(0,0,0,0.06)]">
                    Country
                  </th>
                  <th className="px-3 py-2 text-right text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                    Official Price
                  </th>
                  <th className="px-3 py-2 text-center text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                    Tax Status
                  </th>
                  <th className="px-3 py-2 text-left text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                    FX Rate
                  </th>
                  <th className="px-3 py-2 text-right text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                    Price in USD
                  </th>
                  <th className="px-3 py-2 text-right text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                    vs US Price
                  </th>
                  <th className="px-3 py-2 text-center text-[11px] font-semibold text-gray-600 uppercase tracking-wide">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {processedData.map((row, idx) => (
                  <tr
                    key={row.countryCode}
                    className={`hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-gray-50/40"}`}
                  >
                    {/* Country Column */}
                    <td
                      className={`sticky left-0 z-20 px-4 py-2.5 whitespace-nowrap border-r border-gray-100 shadow-[4px_0_6px_rgba(0,0,0,0.06)] ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg leading-none">{row.flag}</span>
                        <span className="font-medium text-sm text-gray-900">{row.country}</span>
                      </div>
                    </td>

                    {/* Official Price Column */}
                    <td className="px-3 py-2.5 whitespace-nowrap text-right text-sm text-gray-700 tabular-nums">
                      {row.localCurrency} {row.localPrice.toLocaleString()}
                    </td>

                    {/* Tax Status Badge Column */}
                    <td className="px-3 py-2.5 whitespace-nowrap text-center">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${
                          row.taxType === "No Tax" || row.taxType === "Varies by State"
                            ? "bg-amber-50 text-amber-700 border border-amber-200"
                            : "bg-blue-50 text-blue-700 border border-blue-200"
                        }`}
                      >
                        {row.taxType === "No Tax" || row.taxType === "Varies by State"
                          ? "+ Tax"
                          : `Incl. ${row.taxType}`}
                      </span>
                    </td>

                    {/* FX Rate Column */}
                    <td className="px-3 py-2.5 whitespace-nowrap text-left text-xs text-gray-500 tabular-nums">
                      1 USD = {row.exchangeRate.toFixed(2)} {row.localCurrency}
                    </td>

                    {/* Price in USD Column - Bolded main comparison */}
                    <td className="px-3 py-2.5 whitespace-nowrap text-right text-sm font-bold text-gray-900 tabular-nums">
                      {refCurrency.symbol}
                      {row.convertedPrice.toFixed(0)}
                    </td>

                    {/* vs US Price Column - Arbitrage with green/red */}
                    <td className="px-3 py-2.5 whitespace-nowrap text-right text-sm font-semibold tabular-nums">
                      <span className={row.isGoodValue ? "text-[#00E37C]" : "text-red-500"}>
                        {row.diff >= 0 ? "+" : "-"}
                        {refCurrency.symbol}
                        {Math.abs(row.diff).toFixed(0)}
                      </span>
                    </td>

                    {/* Action Column - Affiliate button */}
                    <td className="px-3 py-2.5 whitespace-nowrap text-center">
                      <a
                        href={`https://www.amazon.com/s?k=${encodeURIComponent(currentProduct.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300 transition-colors"
                      >
                        Check Amazon
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-3 text-[11px] text-gray-400 text-center">
          <p>
            Exchange rates and prices are for reference only. Tax rates may vary by region. Always check official Apple
            Store for current pricing.
          </p>
        </div>
      </div>
    </div>
  )
}
