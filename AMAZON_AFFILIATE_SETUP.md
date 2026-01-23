# Amazon Affiliate Setup Guide

## 🎯 Overview

This guide will help you set up Amazon Associate accounts for different marketplaces and integrate them into your Global Tech Price Index site.

## 📋 What's Been Implemented

✅ **Country-Specific Amazon Domains**: Automatically redirects users to their local Amazon store
✅ **Affiliate Tracking**: All links include your Amazon Associate ID tag
✅ **Search-Based URLs**: Uses Amazon search instead of direct product links (more reliable)
✅ **New Tab Opening**: All Amazon links open in a new tab

## 🌍 Supported Amazon Marketplaces

The site currently supports these Amazon marketplaces:

| Region | Countries | Amazon Domain |
|--------|-----------|---------------|
| **North America** | US, CA, MX | amazon.com, amazon.ca, amazon.com.mx |
| **Europe** | UK, DE, FR, IT, ES, NL, PL, SE, TR | amazon.co.uk, amazon.de, amazon.fr, etc. |
| **Asia Pacific** | JP, IN, AU, SG, AE, CN | amazon.co.jp, amazon.in, etc. |
| **Latin America** | BR | amazon.com.br |

## 🚀 Setting Up Your Amazon Associate Accounts

### Step 1: Create Amazon Associate Accounts

You need to create **separate** Amazon Associate accounts for each marketplace you want to earn commissions from.

#### Priority Marketplaces (Start Here):

1. **United States** (amazon.com)
   - Sign up: https://affiliate-program.amazon.com/
   - Most important marketplace for global traffic

2. **United Kingdom** (amazon.co.uk)
   - Sign up: https://affiliate-program.amazon.co.uk/
   - Serves UK, Ireland, Denmark, Norway

3. **Germany** (amazon.de)
   - Sign up: https://partnernet.amazon.de/
   - Serves Germany, Austria, Luxembourg, Czech Republic

4. **Japan** (amazon.co.jp)
   - Sign up: https://affiliate.amazon.co.jp/
   - Major market for tech products

5. **Canada** (amazon.ca)
   - Sign up: https://associates.amazon.ca/

6. **Australia** (amazon.com.au)
   - Sign up: https://affiliate-program.amazon.com.au/
   - Serves Australia & New Zealand

#### Additional Marketplaces:

- **France**: https://partenaires.amazon.fr/
- **Italy**: https://programma-affiliazione.amazon.it/
- **Spain**: https://afiliados.amazon.es/
- **Singapore**: https://affiliate-program.amazon.sg/
- **India**: https://affiliate-program.amazon.in/
- **Mexico**: https://afiliados.amazon.com.mx/
- **Brazil**: https://associados.amazon.com.br/
- **Turkey**: https://ortaklik.amazon.com.tr/
- **UAE**: https://affiliate-program.amazon.ae/
- **Netherlands**: https://partnernet.amazon.nl/
- **Poland**: https://program-partnerski.amazon.pl/
- **Sweden**: https://affiliate-program.amazon.se/

### Step 2: Get Your Associate IDs (Tags)

After signing up for each marketplace, you'll receive an **Associate ID** (also called a "tag"). It usually looks like:
- `yourname-21` (US)
- `yourname-21` (UK)
- `yourname-21` (DE)

**Important:** The Associate ID format varies by marketplace, but typically follows the pattern `yourname-XX` where XX is a number.

### Step 3: Update Your Associate IDs in the Code

Open the file: `lib/amazonAffiliate.ts`

Find this section (around line 41):

```typescript
const AMAZON_ASSOCIATE_IDS: { [domain: string]: string } = {
  'amazon.com': 'jupitermc-21', // Replace with your US Associate ID
  'amazon.co.uk': 'jupitermc-21', // Replace with your UK Associate ID
  'amazon.ca': 'jupitermc-21', // Replace with your CA Associate ID
  // ... etc
};
```

**Replace `'jupitermc-21'` with your actual Associate IDs for each marketplace.**

Example:
```typescript
const AMAZON_ASSOCIATE_IDS: { [domain: string]: string } = {
  'amazon.com': 'johntech-20',
  'amazon.co.uk': 'johntech-21',
  'amazon.ca': 'johntech-ca-20',
  'amazon.de': 'johntech-de-21',
  // ... etc
};
```

### Step 4: Verify Your Links

After updating the Associate IDs:

1. Deploy your changes to Vercel
2. Visit your site
3. Click on a "Check Amazon" button
4. Verify the URL includes your tag parameter: `&tag=yourname-XX`

Example Amazon URL:
```
https://www.amazon.co.uk/s?k=MacBook+Pro+14%22+M5&tag=yourname-21
```

## 💰 How Amazon Associates Works

### Commission Structure

Amazon pays commissions when:
1. Someone clicks your affiliate link
2. They make a purchase **within 24 hours** (Amazon's cookie duration)
3. The purchase is eligible for commissions

### Important Notes:

- **Separate Accounts = Separate Earnings**: Commissions are tracked separately for each marketplace
- **Minimum Payout**: Most marketplaces have a minimum payout threshold (e.g., $10, £10)
- **Cookie Duration**: 24 hours (shorter than some other affiliate programs)
- **Qualifying Purchases**: You earn commission on whatever they buy, not just the product you linked to

## 📊 Tracking Your Performance

### View Reports:

1. Log into each Amazon Associates account
2. Check the "Reports" section
3. Monitor clicks, conversions, and earnings

### Performance Dashboards:

- **US**: https://affiliate-program.amazon.com/home/reports
- **UK**: https://affiliate-program.amazon.co.uk/home/reports
- **DE**: https://partnernet.amazon.de/gp/associates/network/reports/

## 🔧 Technical Details

### How the Links Work:

1. **Product Name**: The site uses the product name from your `PRODUCTS` array
2. **Country Detection**: Based on the selected country in the dashboard
3. **Domain Mapping**: Maps country code to appropriate Amazon domain
4. **Search URL**: Constructs a search URL instead of direct product link
5. **Affiliate Tag**: Appends your Associate ID to track commissions

### Example Flow:

```
User in UK selects "MacBook Pro 14" M5"
↓
System detects country code: "GB"
↓
Maps to domain: "amazon.co.uk"
↓
Generates URL: https://www.amazon.co.uk/s?k=MacBook+Pro+14%22+M5&tag=yourname-21
```

## ⚠️ Important Compliance Notes

### Amazon Associates Program Requirements:

1. **Disclosure**: You must disclose that you use affiliate links
2. **Link Format**: Don't mask or cloak Amazon affiliate links
3. **Content Policy**: Ensure your content complies with Amazon's policies
4. **Active Account**: Make at least 3 qualifying sales within 180 days to keep your account active

### Suggested Disclosure Text:

Add this to your site footer or About page:

> "As an Amazon Associate, we earn from qualifying purchases. This means that if you click on an Amazon link on our site and make a purchase, we may receive a small commission at no extra cost to you. This helps support the site and keep our price comparisons free."

## 🎯 Next Steps

1. ✅ Sign up for Amazon Associate accounts (start with US, UK, DE, JP, CA, AU)
2. ✅ Get your Associate IDs from each marketplace
3. ✅ Update `lib/amazonAffiliate.ts` with your real Associate IDs
4. ✅ Test the links on your deployed site
5. ✅ Add affiliate disclosure to your site
6. ✅ Monitor your earnings in each Associates dashboard

## 🆘 Troubleshooting

### Links Not Tracking?

- Verify your Associate ID is correct
- Check that the tag parameter appears in the URL
- Ensure you've been approved by Amazon Associates
- Some countries require you to have qualifying sales before approval

### No Commission Despite Clicks?

- Verify the purchase was within 24 hours of the click
- Check if the product category is eligible for commissions
- Ensure the buyer didn't use a different Amazon account than they clicked from

## 📚 Additional Resources

- [Amazon Associates Help](https://affiliate-program.amazon.com/help)
- [Operating Agreement](https://affiliate-program.amazon.com/help/operating/agreement)
- [Commission Rates](https://affiliate-program.amazon.com/help/operating/schedule)

---

**Current Status**: Your site ID is `jupitermc-21` - You need to replace this with your actual Amazon Associate IDs!
