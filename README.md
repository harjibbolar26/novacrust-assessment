# Crypto Conversion Widget

A responsive crypto conversion widget built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components. This application allows users to convert between cryptocurrencies and fiat currencies, with three main modes: Crypto to Cash, Cash to Crypto, and Crypto to Fiat Loan.

## Features

- **Three Conversion Modes:**
  - Crypto to Cash: Convert cryptocurrencies to fiat currency
  - Cash to Crypto: Convert fiat currency to cryptocurrencies
  - Crypto to Fiat Loan: Get a loan using crypto as collateral

- **Responsive Design:**
  - Desktop: Tab-based navigation
  - Mobile: Dropdown-based navigation for better UX

- **Real-time Conversion:**
  - Automatic currency conversion as you type
  - Dummy exchange rates for demonstration purposes

- **Form Validation:**
  - All input fields are validated using react-hook-form and Zod
  - Real-time error feedback

- **Wallet Integration:**
  - Support for multiple wallets (Metamask, Rainbow, WalletConnect, and others)
  - Wallet connection simulation

## Tech Stack

- **Framework:** Next.js 16.0.10
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.1.9
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Form Handling:** react-hook-form 7.68.0
- **Validation:** Zod 4.2.0
- **Toast Notifications:** Sonner

## Design System

- **Primary Color:** #013941 (Dark teal)
- **Subdued Color:** #828282 (Gray)
- **Font:** Outfit (Google Fonts) and Clash Display (Fontshare)
- **Theme:** Configured via CSS variables in `app/globals.css`

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm installed
- Basic knowledge of Next.js and React

### Installation

1. **Clone or download the project**

2. **Install dependencies:**

```bash
npm install
```

Or install packages individually:

```bash
npm install next@16.0.10 react@19.2.1 react-dom@19.2.1 react-hook-form@7.68.0 @hookform/resolvers@5.2.2 zod@4.2.0 @radix-ui/react-select @radix-ui/react-toast @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-slot sonner@2.0.7 lucide-react@0.561.0 clsx tailwind-merge class-variance-authority tailwindcss@4

npm install -D typescript @types/node @types/react @types/react-dom
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Assumptions

### Conversion Rates (Dummy Data)

All conversion rates are hardcoded for demonstration purposes. In a production environment, these should be fetched from a real-time API.

**Current Dummy Rates:**
- **ETH:** $3,500 USD
- **BTC:** $65,000 USD
- **USDT:** $1 USD (stablecoin)
- **USDC:** $1 USD (stablecoin)
- **BNB:** $600 USD
- **TON:** $7 USD
- **CELO:** $0.50 USD
- **NGN:** 833 NGN = 1 USD
- **SOL:** 150 USD
- **DAI:** 1 USD

### Wallet Integration

Wallet connections are simulated. The "Connect Wallet" buttons will show success toasts but do not actually connect to blockchain wallets. For production:
- Integrate Web3 libraries (ethers.js, web3.js, or wagmi)
- Implement actual wallet connection logic
- Add transaction signing and broadcasting

### Payment Methods

"Pay from" and "Pay to" selections are for UI purposes only. In production:
- Integrate with payment providers
- Implement bank account verification
- Add KYC/AML compliance checks

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Outfit font
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── crypto-widget.tsx   # Main widget container
│   ├── mode-selector.tsx   # Tab/Dropdown navigation
│   ├── crypto-to-cash.tsx  # Crypto to Cash form
│   ├── cash-to-crypto.tsx  # Cash to Crypto form
│   ├── crypto-to-fiat-loan.tsx  # Loan form
│   ├── currency-input.tsx  # Reusable currency input
│   ├── wallet-selector.tsx # Wallet selection dialog
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── conversion-rates.ts # Dummy exchange rates
│   └── utils.ts            # Utility functions
└── README.md
```

## Key Components

### Currency Input
Reusable component for amount and currency selection with dropdown search functionality.

### Mode Selector
Responsive navigation that switches between tabs (desktop) and dropdown (mobile).

### Wallet Selector
Modal dialog for selecting and connecting crypto wallets.

## Form Validation

All forms include validation for:
- Required fields
- Numeric values only
- Minimum amounts (0.01 for crypto, 1000 for NGN)
- Valid currency selection
- Valid wallet/payment method selection

## Customization

### Changing Colors

Edit `app/globals.css` to modify the color scheme:

```css
@theme inline {
  --color-primary: #013941;
  --color-subdued: #828282;
  /* Add more custom colors */
}
```

### Adding New Cryptocurrencies

Update `lib/conversion-rates.ts`:

```typescript
export const CONVERSION_RATES = {
  // Add new crypto
  SOL: 150,
  // ...
}
```

### Modifying Conversion Logic

Edit the conversion functions in the form components to integrate with real-time APIs.

## Future Enhancements

- Integrate real-time exchange rate APIs (CoinGecko, CoinMarketCap)
- Implement actual Web3 wallet connections
- Add transaction history
- Implement KYC verification
- Add multi-language support
- Integrate payment gateways
- Add admin dashboard for managing rates and transactions

## License

MIT

## Support

For issues or questions, please refer to the project documentation or contact the development team.
