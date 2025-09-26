# Contributing to create-next-daisy-clerk-stripe-app

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## Development Setup

### Prerequisites

- Node.js 18.18 or higher
- npm, pnpm, or yarn

### Local Development

1. **Fork and clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/create-next-daisy-clerk-stripe-app.git
   cd create-next-daisy-clerk-stripe-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Test your changes**:
   ```bash
   # Test the CLI
   node dist/index.js
   
   # Or use the dev script for faster iteration
   npm run dev
   ```

## Project Structure

```
├── src/
│   ├── index.ts          # Main CLI entry point
│   ├── log.ts           # Logging utilities
│   ├── templates/       # App templates (not compiled)
│   │   └── demo-app/    # Next.js app template
│   └── utils/
│       ├── copy.ts      # Template copying utilities
│       └── pkg.ts       # Package utilities
├── dist/                # Compiled output (auto-generated)
├── .github/
│   └── workflows/       # GitHub Actions workflows
└── package.json
```

## Making Changes

### Code Changes

1. **Template Updates**: When modifying the app template in `src/templates/demo-app/`, ensure:
   - All placeholder variables use the format `__VARIABLE_NAME__`
   - Dotfiles are prefixed with `_dot_` (e.g., `_dot_env.local.example`)
   - The template works with all configuration options

2. **CLI Changes**: When modifying the CLI logic:
   - Update prompts in `src/index.ts`
   - Ensure cross-platform compatibility
   - Test with different package managers

3. **Build Process**: After making changes:
   ```bash
   npm run build
   npm pack --dry-run  # Check what will be published
   ```

### Testing

Test your changes thoroughly:

1. **Build test**:
   ```bash
   npm run build
   ```

2. **CLI functionality test**:
   ```bash
   # Test creating an app
   node dist/index.js
   
   # Test the generated app
   cd test-app
   npm install
   npm run build
   ```

3. **Cross-platform test**: Test on Windows, macOS, and Linux if possible.

## Pull Request Process

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the guidelines above

3. **Test thoroughly** - ensure the CLI works and generates working apps

4. **Update documentation** if needed:
   - Update README.md for user-facing changes
   - Update CHANGELOG.md following [Keep a Changelog](https://keepachangelog.com/) format

5. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Push and create a pull request**:
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Message Format

Use conventional commits:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `chore:` for maintenance tasks
- `refactor:` for code refactoring

## Release Process

Releases are handled automatically via GitHub Actions:

1. Maintainers run the "Release" workflow from GitHub Actions
2. Choose version bump type (patch/minor/major)
3. The workflow creates a release and publishes to NPM

## Code Style

- Use TypeScript for type safety
- Follow existing code formatting
- Use meaningful variable names
- Add comments for complex logic

## Questions?

- Open an issue for bugs or feature requests
- Start a discussion for questions about contributing
- Check existing issues and discussions before creating new ones

Thank you for contributing! 🎉