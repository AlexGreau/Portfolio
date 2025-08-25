# Portfolio

My very own portfolio project, thanks for visiting! This Readme explains the setup, the [Tech stack](#tech-stack), [Design decisions](#design-decisions), [Architecture decisions](#architecture-decisions), [Infrastructure](#infrastructure), and finally the [list of other commands available if you run this project locally](#other-commands)

## Project Setup

```sh
npm i
```

```sh
npm run dev
```

## Tech stack

Vue3 and TypeScript were chosen because it's a stack easily transferrable into my current work (Vue2): what I learn here can be directly applied to my work and vice-versa.
I also use this project to explore [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) if any complex element is needed.

## Design decisions

UX decisions made during this project.

### Color theme

The color theme was used following the [Material Theme Builder](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder). I chose dark blue as it links my swimming passion and the values I want to communicate here: calm, reliable, smooth and clean, but with some depth to it. I also use Glassmorphism to give a more modern vibe.

### Typography

The font was selected via [Google Fonts](https://fonts.google.com/selection), with the wish of having something calm but active and easy to read.

## Architecture decisions

Nothing exotic here, I follow the standard files and folders of a basic Vue project, with small tweaks concerning the SCSS.

### SCSS styles out of components

The styles of each component will be defined in a separate SCSS file. This improves performance by preventing duplication of style definition when the component is repeated many times.

### SCSS imports

We usually declare SCSS variables in a single file that is then imported everywhere using the Vite config file, but it didn’t work here. As `@import` will become deprecated, we need to use `@use`, but `@use` in the `additionalData` still does not allow me to enjoy my SCSS variables. Using `@import` will not work as all the `@use` should be declared before any imports, hence will fail in this case.

I had to choose between having pure CSS variables and them, or importing the common SCSS files in each SCSS. I chose the latter as it keeps the syntax shorter and clearer (for me), does not impact performance since `@use` imports are optimized by the Sass preprocessor (no duplicated imports), and it will be easy to rearrange once this is fixed by Sass.

## Infrastructure

Keeping it lean but under control. Unit tests and E2E tests are overkill for this project, but it helps me code and double-check that I am not breaking anything since this is higher visibility.

### CI/CD and Hosting

Hosted on GitHub for simplicity, cost-effectiveness, and since it doesn’t require backend.
I am using GitHub Actions to deploy automatically. Each merge to main triggers a build and commits the static files to the branch `gh-pages` which is then deployed.

## Other commands

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
