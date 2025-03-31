# Portfolio
[Material Web from Google](https://github.com/material-components/material-web)
I chose Vue3 and typescript because it's a stack easily transferrable into my current work (Vue2): what i learn here can be directly applied to my work and vice-versa.
I also use this project to explore [web components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)

## Project Setup
 
```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

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
## Typography and color
The font was selected via [Google fonts](https://fonts.google.com/selection), with the wish of having something calm but active and easy to read.

The color theme was used following the [material them builder](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder). I chose dark blue as it links my swimming passion and the values I want to communicate here.

## Components
For this project i want to experiemtn a little bit with webcomponent and will use the [Google Web components](https://material-web.dev/about/intro/)