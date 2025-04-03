# Portfolio
Vue3 and typescript were chosen because it's a stack easily transferrable into my current work (Vue2): what i learn here can be directly applied to my work and vice-versa.
I also use this project to explore [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) if any complex element is needed

## Project Setup
 
```sh
npm i
```
```sh
npm run dev
```
## Design decisions
UX decisions made during this project.
## Typography and color
The font was selected via [Google fonts](https://fonts.google.com/selection), with the wish of having something calm but active and easy to read.

The color theme was used following the [material them builder](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder). I chose dark blue as it links my swimming passion and the values I want to communicate here.
## Spacing and overall component design
I mainly inspire myself from [Material Web from Google](https://github.com/material-components/material-web) and follow the material design guidelines stated by Google. 


## Architecture decisions
Project architecture decisions made and the rationale behind it
### SCSS styles out of components
The styles of each component will be defined in a separate scss file. This improves performances by preventing duplication of style definition when the component is repeated many times. 

### SCSS imports
We usually declare scss variables in a single file that then imported everywhere using the vite config file, but it didnt work here. As `@import` will become deprecated we need to use `@use`, but `@use` in the `additionalData` still does not allow me to enjoy my scss variables. Using `@import` will not work as all the `@use` should be declared before any imports, hence will fail in this case.

I had to choose between having pure CSS variables and them, or importing the common scss files in each scss. I chose the latter as it keep the syntax shorter and clearer (for me), does not impact performances since `@use` imports are optimized by the sass preprocessor (no duplicated imports), and it will be easy to re arrange once this is fixed by sass



## Other commands

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```