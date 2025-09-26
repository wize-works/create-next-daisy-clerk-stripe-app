# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
[0.2.0]: https://github.com/wizeworks/create-next-daisy-clerk-stripe-app/releases/tag/v0.2.0

## [0.2.0] - 2025-09-26

## [0.1.0] - 2025-09-25

### Added
- Initial release of @wizeworks/create-next-daisy-clerk-stripe-app CLI
- Interactive project scaffolding with prompts for:
  - App name and directory
  - TypeScript support (configurable)
  - Package manager selection (pnpm, npm, yarn)
  - Clerk Organizations support (optional)
  - Billing model (subscriptions vs one-time payments)
- Complete Next.js 15 app template with:
  - App Router architecture
  - DaisyUI + Tailwind CSS for styling
  - Clerk authentication with sign-in/sign-up flows
  - Stripe integration for payments and subscriptions
  - Protected dashboard routes
  - Responsive design with mobile-first approach
- Pre-configured development environment:
  - TypeScript support
  - ESLint configuration
  - PostCSS with Tailwind CSS 4.x
  - Development scripts for hot reloading
- Authentication features:
  - Complete sign-in/sign-up flows with Clerk Elements
  - Social authentication (Google, Facebook, Microsoft)
  - Email verification
  - Password reset functionality
- Billing and subscription features:
  - Stripe Checkout integration
  - Webhook handling for subscription events
  - Payment processing with error handling
- Comprehensive documentation:
  - Setup instructions
  - Environment variable configuration
  - Deployment guides
  - Development workflow

### Technical Details
- Built with TypeScript and ES2022 modules
- Cross-platform compatibility (Windows, macOS, Linux)
- Template-based code generation
- Support for multiple package managers

[Unreleased]: https://github.com/wizeworks/create-next-daisy-clerk-stripe-app/compare/v0.1.0...v0.2.0...HEAD
[0.2.0]: https://github.com/wizeworks/create-next-daisy-clerk-stripe-app/releases/tag/v0.2.0
[0.1.0]: https://github.com/wizeworks/create-next-daisy-clerk-stripe-app/releases/tag/v0.1.0