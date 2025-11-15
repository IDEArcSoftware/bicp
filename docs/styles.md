# Front-End Style System

This site now organizes CSS into cascade layers and reusable pieces so every new page can reuse the same primitives.

## Layers
- **@layer tokens** – global design tokens such as color, typography, spacing, radii, and transition speeds.
- **@layer base** – element resets and accessibility helpers (focus rings, reduced-motion fallbacks).
- **@layer utilities** – quick drop-in classes like `.u-flex`, `.u-grid`, `.u-pill`, `.u-text-muted`, and `.sr-only`.
- **@layer components** – semantic blocks (nav, hero, cards, pricing, etc.) that build on tokens/utilities.

## Key Tokens
| Token | Purpose |
| --- | --- |
| `--font-sans`, `--font-size-*`, `--line-*` | Typography scale |
| `--space-*` (`3xs`–`4xl`) | Consistent vertical/horizontal rhythm |
| `--bg-*`, `--text-*`, `--accent*` | Surfaces and brand colors |
| `--radius-*` | Rounded corners for cards, pills, and buttons |
| `--focus-ring` | Accessible focus outline color |

Use tokens via `var(--token-name)` from any layer. Example:
```
section.services {
  padding-block: var(--space-3xl);
}
```

## Utilities
| Utility | Description |
| --- | --- |
| `.u-flex`, `.u-grid` | Flex/grid containers with default gaps |
| `.u-center` | Center content both axes |
| `.u-text-muted` | Apply secondary text color |
| `.u-pill` | Pill outline treatment for tags/badges |
| `.sr-only` | Screen-reader only text |

Compose utilities with components to avoid duplicating CSS. Example:
```
<div class="u-flex u-text-muted">
  <span class="u-pill">RTX 6000 Ada</span>
</div>
```

## Component Patterns

- **Section framing**: use `.section-title` + `.section-subtitle` inside a `.container`. Spacing is already managed by the base `section` styles.
- **Cards**: leverage existing `.card`, `.card-grid`, `.card-list`, `.card-tag`. For new cards, reuse the same markup and swap copy/icons.
- **Hero/media blocks**: `.hero`, `.hero-grid`, `.hero-media` abstractions already handle responsive layout, focus states, and contrast.
- **Pricing utilities**: `.estimate-panel`, `.estimate-share`, `.estimate-actions` keep estimator UX consistent across pages.

See `assets/css/style.css` for full definitions. When creating new sections, import the appropriate component class or combine utilities rather than redefining spacing/colors.
