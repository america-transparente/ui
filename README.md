# America Transparente Design System
**Warning**: this is still an experimental library

## Getting Started
- [Add Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides) to your React project

- `npm install @america-transparente/ui`, 

- Add `"./node_modules/@america-transparente/ui/dist/**/*.js"` to your content array in your `tailwind.config.js`

- Extend colors in `tailwind.config.js` with our color set (see colors)

For components related to InstantSearch use module `@america-transparente/ui/search`, the rest can be found in `@america-transparente/ui/core`

## Dependencies
- tsup: bundles typescript `npm run build`
- storybook: visualize components `npm run storybook`

## Colors
We use "grayscale" as base colors and "primary" to easily identify different projects

### Primary
- Reguleque: `#34911F`
- Duenos Directos: `#a21caf`

This is how the `tailwind.config.js` would look like for Reguleque

```javascript
theme: {
    extend: {
      colors: {
        primary: "#34911F"
        grayscale: {
          1: "#FFFFFF",
          2: "#F2F2F2",
          3: "#e7e5e4",
          4: "#d1d1d1",
          5: "#6E6E73",
        },
      },
    },
  },
```


## Spacing
Gaps and padding are often `1rem`, or `p-4`, `gap-4` in Tailwind, let's stick with that :)

