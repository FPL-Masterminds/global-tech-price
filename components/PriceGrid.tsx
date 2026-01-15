"use client"

import React from 'react';
import { ProductPrice } from '@/lib/types';

interface PriceGridProps {
  prices: ProductPrice[];
}

const PriceGrid: React.FC<PriceGridProps> = ({ prices }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[900px]">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="sticky-col pb-6 pr-4 text-[11px] text-gray-600 font-semibold uppercase tracking-wide">
              Country
            </th>
            <th className="pb-6 pr-4 text-[11px] text-gray-600 font-semibold uppercase tracking-wide text-right">
              Official Price
            </th>
            <th className="pb-6 pr-4 text-[11px] text-gray-600 font-semibold uppercase tracking-wide text-center">
              Tax Status
            </th>
            <th className="pb-6 pr-4 text-[11px] text-gray-600 font-semibold uppercase tracking-wide text-left">
              FX Rate
            </th>
            <th className="pb-6 pr-4 text-[11px] text-gray-600 font-semibold uppercase tracking-wide text-right">
              Price in USD
            </th>
            <th className="pb-6 pr-4 text-[11px] text-gray-600 font-semibold uppercase tracking-wide text-right">
              vs US Price
            </th>
            <th className="pb-6 pr-4 text-[11px] text-gray-600 font-semibold uppercase tracking-wide text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {prices.map((item, idx) => (
            <tr 
              key={idx} 
              className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}
            >
              {/* Country Column - Sticky */}
              <td className="sticky-col py-4 pr-4 whitespace-nowrap">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono text-gray-400">{item.code}</span>
                  <span className="font-medium text-sm text-gray-900">{item.country}</span>
                </div>
              </td>

              {/* Official Price */}
              <td className="py-4 pr-4 whitespace-nowrap text-right text-sm text-gray-700 tabular-nums">
                {item.officialPrice}
              </td>

              {/* Tax Status Badge */}
              <td className="py-4 pr-4 whitespace-nowrap text-center">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-200">
                  {item.taxStatus}
                </span>
              </td>

              {/* FX Rate */}
              <td className="py-4 pr-4 whitespace-nowrap text-left text-xs text-gray-500 tabular-nums">
                {item.fxRate}
              </td>

              {/* Price in USD - Bold */}
              <td className="py-4 pr-4 whitespace-nowrap text-right text-sm font-bold text-gray-900 tabular-nums">
                ${item.priceInUsd.toLocaleString()}
              </td>

              {/* vs US Price - Color coded */}
              <td className="py-4 pr-4 whitespace-nowrap text-right text-sm font-semibold tabular-nums">
                <span className={item.vsUsPrice.startsWith('+$0') ? 'text-gray-500' : item.vsUsPrice.startsWith('-') ? 'text-green-600' : 'text-red-500'}>
                  {item.vsUsPrice}
                </span>
              </td>

              {/* Action Column */}
              <td className="py-4 pr-4 whitespace-nowrap text-center">
                <a
                  href={`https://www.amazon.com/s?k=MacBook+Pro+M3`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300 transition-colors"
                >
                  Check Amazon
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceGrid;
