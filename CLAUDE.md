# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal/professional website for J. Carlos Salgado built with AstroWind, an Astro 5.0 + Tailwind CSS template. The site is in Spanish and focuses on hotel industry web solutions, project management, SEO, and digital transformation services.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Code quality checks
npm run check           # Run all checks (astro, eslint, prettier)
npm run check:astro     # Check Astro files for errors
npm run check:eslint    # Run ESLint
npm run check:prettier  # Check code formatting

# Fix code issues
npm run fix             # Fix all (eslint + prettier)
npm run fix:eslint      # Auto-fix ESLint issues
npm run fix:prettier    # Format code with Prettier
```

## Architecture Overview

### Core Technologies
- **Astro 5.0**: Static site generator with `output: 'static'` configuration
- **Tailwind CSS**: Utility-first CSS framework
- **MDX**: Enhanced markdown for blog posts with component support
- **TypeScript**: Type safety throughout the codebase

### Project Structure

```
src/
├── components/         # Reusable Astro components
│   ├── widgets/       # Major page sections (Header, Footer, Hero, etc.)
│   ├── ui/           # Basic UI components (Button, Form, etc.)
│   ├── blog/         # Blog-specific components
│   └── common/       # Shared utilities (Analytics, SEO, etc.)
├── layouts/          # Page layouts
├── pages/            # File-based routing
│   ├── [...blog]/    # Dynamic blog routing
│   ├── servicios/    # Services pages
│   └── portfolio/    # Portfolio pages
├── content/          # Content collections (blog posts)
├── utils/            # Helper functions
├── config.yaml       # Site configuration
└── navigation.ts     # Navigation structure
```

### Key Configuration Files

- **src/config.yaml**: Main site configuration (SEO, blog settings, analytics)
- **src/navigation.ts**: Header and footer navigation menus
- **astro.config.ts**: Astro build configuration and integrations

### Routing Patterns

- Blog posts: `/%slug%` (configured in config.yaml)
- Blog categories: `/categoria/[category]`
- Blog tags: `/etiqueta/[tag]`
- Services: `/servicios/[service]`
- Portfolio: `/portfolio/[project]`

### Path Aliases

- `~/*` maps to `src/*` for cleaner imports

### Integrations

- **@astrojs/sitemap**: Automatic sitemap generation
- **@astrojs/mdx**: MDX support for blog posts
- **astro-icon**: Icon system using Tabler and Flat Color Icons
- **astro-compress**: Production build optimization
- **unpic**: Universal image CDN optimization

### Content Management

Blog posts are stored in `src/content/post/` as `.md` or `.mdx` files. The blog system supports:
- Categories and tags
- Related posts
- Reading time calculation
- Social sharing
- RSS feed generation

### Styling Approach

- Tailwind CSS with custom configuration in `tailwind.config.js`
- Custom styles in `src/components/CustomStyles.astro`
- Base styles in `src/assets/styles/tailwind.css`
- Dark mode support via `ui.theme` in config.yaml

### Image Handling

- Static images in `public/` (no transformation)
- Optimized images in `src/assets/images/`
- Automatic optimization using Astro's image pipeline
- External CDN support for cdn.pixabay.com

### Deployment

The site builds to static HTML in the `dist/` directory and can be deployed to any static hosting service. Configuration files exist for:
- Netlify (`netlify.toml`)
- Vercel (`vercel.json`)
- Docker (`Dockerfile`, `docker-compose.yml`)

## Repository Management & Updates

This project is a fork of [onwidget/astrowind](https://github.com/onwidget/astrowind) with custom modifications for J. Carlos Salgado's personal brand.

### Remote Repositories
- **origin**: https://github.com/jios325/astrowind.git (your fork)
- **upstream**: https://github.com/onwidget/astrowind.git (original AstroWind template)

### Customized Files
The following files have been modified from the original template and should be preserved during updates:
- `src/config.yaml` - Site configuration with personal branding
- `src/navigation.ts` - Custom navigation structure in Spanish
- `src/pages/contacto.astro` - Custom contact page
- `src/pages/sobre-mi.astro` - About page
- `src/pages/servicios/index.astro` - Services page
- `src/pages/portfolio/*.astro` - Portfolio pages
- `src/components/widgets/ContactForm.astro` - Customized contact form with social links
- `enlaces-redes-sociales.md` - Social media links reference

### Updating from Upstream

To update components and features from the original AstroWind template:

```bash
# Fetch latest changes from upstream
git fetch upstream

# View differences
git diff upstream/main

# Merge specific non-conflicting updates
git checkout upstream/main -- src/components/ui/  # Update UI components
git checkout upstream/main -- src/components/common/  # Update common components
git checkout upstream/main -- src/utils/  # Update utilities

# Or create a new branch to test updates
git checkout -b update-from-upstream
git merge upstream/main --no-commit --no-ff

# Review changes and resolve conflicts, keeping your customizations
# Then commit selectively
```

### Safe Update Strategy

1. **Before updating**, always create a backup branch:
   ```bash
   git checkout -b backup-before-update
   git checkout main
   ```

2. **Components safe to update** (usually no customizations):
   - `src/components/ui/*` - Basic UI components
   - `src/components/common/*` - Common utilities
   - `src/utils/*` - Helper functions
   - `src/assets/styles/tailwind.css` - Base styles (review changes)

3. **Components to update carefully** (may have customizations):
   - `src/components/widgets/*` - Check for custom modifications
   - `src/layouts/*` - May have custom layout changes

4. **Files to never overwrite**:
   - Configuration files (`src/config.yaml`, `src/navigation.ts`)
   - Custom pages (`contacto`, `sobre-mi`, `servicios`, `portfolio`)
   - Any custom components you've created

### Testing After Updates

After merging updates from upstream:

```bash
# Install any new dependencies
npm install

# Run development server to test
npm run dev

# Check for TypeScript/ESLint errors
npm run check

# Build for production to ensure everything works
npm run build
```

### Notes
- The `vendor/` directory contains integration code that will become part of AstroWind v2
- Always review the [AstroWind releases](https://github.com/onwidget/astrowind/releases) for breaking changes before updating
- Keep track of your customizations to make future updates easier