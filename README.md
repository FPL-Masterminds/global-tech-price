# Global Tech Price 🌍💻

Compare MacBook prices worldwide with real-time pricing data and tax calculations. Find the best country to buy Apple products!

![Global Tech Price](https://img.shields.io/badge/Next.js-16-black) ![React](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## ✨ Features

- 🌍 **Global Comparison** - Compare prices across 37+ countries
- 💱 **Currency Conversion** - Real-time conversion to your preferred currency
- 💰 **Tax Calculations** - View prices with or without taxes
- 📊 **Price Arbitrage** - Instantly see which countries offer the best value
- 📥 **Export Data** - Download comparison data as CSV
- 🎨 **Beautiful UI** - Modern, responsive design with smooth interactions

## 🚀 Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/FPL-Masterminds/global-tech-price.git

# Navigate to project directory
cd global-tech-price

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## 📊 Data Source

Price data is currently sourced from this [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1olOLLSbJB2uqJ0YRTNrikoriP1NGv_can1ChTQewDlY/edit?usp=drivesdk) which contains:
- 8 MacBook Pro M3 configurations
- Pricing from 37 countries worldwide
- USD-converted prices for easy comparison

## 🏗️ Project Structure

```
global-tech-price/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── price-index-dashboard.tsx  # Main dashboard component
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── public/                # Static assets
```

## 🎯 Roadmap

- [ ] Integrate live Google Sheets API
- [ ] Add more Apple products (iPhones, iPads, etc.)
- [ ] Historical price tracking
- [ ] Email alerts for price drops
- [ ] Dark mode support
- [ ] Multi-language support

## 📝 Scripts

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## 🚀 Deploy on Vercel

The easiest way to deploy this app is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/FPL-Masterminds/global-tech-price)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/FPL-Masterminds/global-tech-price/issues).

## 👨‍💻 Author

Built with ❤️ by [FPL Masterminds](https://github.com/FPL-Masterminds)

---

**Note**: This is a price comparison tool for informational purposes only. Always verify prices on official Apple Store websites before making a purchase.
