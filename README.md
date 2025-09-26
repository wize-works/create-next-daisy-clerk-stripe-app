# create-next-daisy-clerk-stripe-app

[![CI](https://github.com/wizeworks/create-next-daisy-clerk-stripe-app/actions/workflows/ci.yml/badge.svg)](https://github.com/wizeworks/create-next-daisy-clerk-stripe-app/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/create-next-daisy-clerk-stripe-app?color=2563eb)](https://www.npmjs.com/package/create-next-daisy-clerk-stripe-app)
[![NPM Downloads](https://img.shields.io/npm/dm/create-next-daisy-clerk-stripe-app?color=2563eb)](https://www.npmjs.com/package/create-next-daisy-clerk-stripe-app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> Scaffold a Next.js app with DaisyUI, Clerk, and Stripe subscriptions in minutes.

A CLI tool that creates a production-ready SaaS starter template with authentication, payments, and beautiful UI components out of the box.

## Features

- ⚡ **Next.js 15** with Turbopack for lightning-fast development
- 🎨 **DaisyUI + Tailwind CSS** for beautiful, accessible components
- 🔐 **Clerk Authentication** with sign-in/sign-up flows
- 💳 **Stripe Integration** for subscriptions and payments
- 🏢 **Organizations Support** (optional)
- 📱 **Responsive Design** with mobile-first approach
- 🔧 **TypeScript Support** (configurable)
- 📦 **Multiple Package Managers** (pnpm, npm, yarn)

## Quick Start

```bash
npx create-next-daisy-clerk-stripe-app@latest my-saas-app
```

Or with your preferred package manager:

```bash
# Using pnpm
pnpm create next-daisy-clerk-stripe-app my-saas-app

# Using yarn
yarn create next-daisy-clerk-stripe-app my-saas-app
```

## Interactive Setup

The CLI will prompt you to configure your app:

- **App directory name**: Choose your project name
- **TypeScript**: Enable/disable TypeScript support
- **Package manager**: Choose between pnpm, npm, or yarn
- **Clerk Organizations**: Enable organization features
- **Billing model**: Choose between subscriptions or one-time payments

## What's Included

### 📁 Project Structure

```
my-saas-app/
├── app/
│   ├── (auth)/              # Authentication pages
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (marketing)/         # Landing and pricing pages
│   ├── dashboard/           # Protected dashboard
│   └── api/
│       ├── checkout/        # Stripe checkout endpoints
│       └── webhooks/stripe/ # Stripe webhook handler
├── components/
│   ├── billing/             # Stripe components
│   └── ui/                  # Reusable UI components
└── lib/
    ├── auth.ts             # Clerk configuration
    └── stripe.ts           # Stripe configuration
```

### 🔧 Pre-configured Services

- **Authentication**: Complete sign-in/up flows with Clerk
- **Payments**: Stripe Checkout integration with webhook handling
- **UI Components**: DaisyUI components with dark mode support
- **Middleware**: Route protection and authentication checks

## Development Setup

After creating your app:

1. **Install dependencies**:
   ```bash
   cd my-saas-app
   pnpm install  # or npm install / yarn install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   ```
   
   Fill in your API keys:
   - Clerk keys from [clerk.com](https://clerk.com)
   - Stripe keys from [stripe.com](https://stripe.com)

3. **Start development server**:
   ```bash
   pnpm dev  # or npm run dev / yarn dev
   ```

4. **Set up Stripe webhooks** (for local development):
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Deployment

The generated app is ready to deploy to platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Render**

### Deployment Checklist

- [ ] Set all environment variables in your hosting platform
- [ ] Add webhook endpoint URL in Stripe Dashboard
- [ ] Configure Clerk allowed origins and redirect URLs
- [ ] Update `NEXT_PUBLIC_APP_URL` to your production domain

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 15](https://nextjs.org/) | React framework with App Router |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [DaisyUI](https://daisyui.com/) | Tailwind CSS component library |
| [Clerk](https://clerk.com/) | Authentication and user management |
| [Stripe](https://stripe.com/) | Payment processing and subscriptions |
| [TypeScript](https://www.typescriptlang.org/) | Type safety (optional) |

## Development & Deployment

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/wizeworks/create-next-daisy-clerk-stripe-app.git
   cd create-next-daisy-clerk-stripe-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the package**:
   ```bash
   npm run build
   ```

4. **Test locally**:
   ```bash
   node dist/index.js
   ```

### Automated Deployment

This package uses GitHub Actions for automated CI/CD:

- **Continuous Integration**: Runs on every push and PR to test builds across Node.js versions and operating systems
- **Automated Releases**: Use the GitHub Actions "Release" workflow to create new versions
- **NPM Publishing**: Automatically publishes to NPM when a GitHub release is created

### Creating a Release

1. **Go to GitHub Actions** in the repository
2. **Run the "Release" workflow** manually with your desired version bump (patch/minor/major)
3. **The workflow will**:
   - Bump the version in `package.json`
   - Update `CHANGELOG.md`
   - Create a git tag and GitHub release
   - Trigger automatic NPM publishing

### Setup Requirements

To enable automated NPM publishing, add the following secret to your GitHub repository:

- `NPM_TOKEN`: Your NPM access token with publish permissions

## Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📖 [Documentation](https://github.com/wizeworks/create-next-daisy-clerk-stripe-app)
- 🐛 [Report Issues](https://github.com/wizeworks/create-next-daisy-clerk-stripe-app/issues)
- 💬 [Discussions](https://github.com/wizeworks/create-next-daisy-clerk-stripe-app/discussions)

---

Made with ❤️ by [WizeWorks](https://github.com/wizeworks)