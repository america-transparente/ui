# America Transparente Design System
**Warning**: this is still an experimental library

## Dependencies
- tsup: bundles typescript `npm run build`
- storybook: visualize components `npm run storybook`

## Goal
Make the tools that we provide feel cohesive, make the users say, this feels like an America Transparente's tool, make them associate the design to us, make the screen easy to navigate, no overexaggerated UIs, no flashy designs, simple, elegant, and expansible.

## Colors
colors to be defined

first draft:
rl = reguleque, dd = duenos directos
- primary-rl `#34911F`
- primary-dd `#a21caf`
- background-light `#e7e5e4`
- accent-light `#fafafa`
- contrast-light `#171717`

## Spacing
Gaps and padding are often `1rem`, or `p-4`, `gap-4` in Tailwind, let's stick with that :)

## Usage
[Add Tailwind CSS](https://tailwindcss.com/docs/installation/framework-guides) to your React project

`npm install @america-transparente/ui`, 

add `"./node_modules/@america-transparente/ui/dist/**/*.js"` to your content array in your `tailwind.config.js`