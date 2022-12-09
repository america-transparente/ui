# America Transparente React Component Library
**Warning**: this is still an experimental library

## Getting Started
- [Add Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides) to your React project

- `npm install @america-transparente/ui`, 

- Add `"./node_modules/@america-transparente/ui/dist/**/*.js"` to your content array in your `tailwind.config.js`

- Extend colors in `tailwind.config.js` with our color set (see colors)

For components related to InstantSearch use module `@america-transparente/ui/search`, the rest can be found in `@america-transparente/ui/core`

## Dependencies
- tsup: bundles typescript `npm run build`
- Storybook: visualize components `npm run storybook`
- ESLint: linting `npm run lint`
- Semantic Release: to publish to NPM and auto generate releases to GitHub `npm run semantic-release`

## Colors

### Primary
the "primary" color should be unique for every project, to easily identify them
- Reguleque: `#34911F`
- Duenos Directos: `#a21caf`

### Tailwind Config
This is how `theme` in `tailwind.config.js` would look like for Reguleque

```javascript
  theme: {
    extend: {
      colors: {
        primary: "#34911F",
        light: {
          neutral: {
            100: "#D1D1D1",
            200: "#F9F9F9",
            300: "#E7E5E4",
          },
          text: {
            100: "#000000",
            200: "#525252",
          },
        },
        dark: {
          neutral: {
            100: "#484848",
            200: "#2F2F2F",
            300: "#242424",
          },
          text: {
            100: "#E4E4E4",
            200: "#A0A0A0",
          },
        },
      },
    },
  },
```


## Spacing
Gaps and padding are often `1rem`, or `p-4`, `gap-4` in Tailwind, let's stick with that :)

