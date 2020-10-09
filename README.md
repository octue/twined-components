[![codecov](https://codecov.io/gh/octue/twined-components/branch/master/graph/badge.svg)](https://codecov.io/gh/octue/twined-components)
![test-ci](https://github.com/octue/twined-components/workflows/test-ci/badge.svg)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![airbnb](https://img.shields.io/badge/code%20style-airbnb-000000.svg)]()
[![black-girls-code](https://img.shields.io/badge/black%20girls-code-f64279.svg)](https://www.blackgirlscode.com/)


# Twined Components

Components and hooks to help you build frontends for data services based on [twined](https://twined.readthedocs.io).

 - storybook and documentation
 - started with `create-react-app` and 
 - based on Material-UI v4.x.x
 - workaround for [this issue with storybook](https://github.com/storybookjs/storybook/issues/4143), enabling documented components to be wrapped in hocs

#### TO DO
- Go into `.storybook/customStorybookTheme` and update your organisation logo and other details
- Go to `src/themes/_base.js` and update to your brand colours (you can use the [MUI tool](https://material.io/resources/color/) to select main colours and calculate shades from that
- Commit all your changes. Check the CI is working in GitHub Actions.

## Installation

Add to your project:
`yarn add twined-components`

(or `npm install --save twined components` if that's your bag).


## Contributing

Fork and clone the github repository. Install development requirements with `yarn install` then do
`yarn run storybook` to get started.

The storybook is an interactive playground for each component. It contains documentation generated from the source files
and a canvas for interacting with the components. It's where you should start when developing or adding new components.

### Hot-reloading server

For developing as you go.
`yarn run start`

### Interactive watch mode

Launch the test runner in the interactive watch mode.
`yarn test`

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Single-run with coverage

Launch the test runner once, run all tests and generate a coverage report.
`yarn run coverage`
