[![codecov](https://codecov.io/gh/thclark/react-library-template/branch/master/graph/badge.svg)](https://codecov.io/gh/thclark/react-library-template)
![test-ci](https://github.com/thclark/react-library-template/workflows/test-ci/badge.svg)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![airbnb](https://img.shields.io/badge/code%20style-airbnb-000000.svg)]()
[![black-girls-code](https://img.shields.io/badge/black%20girls-code-f64279.svg)](https://www.blackgirlscode.com/)


# Template Material-UI Component Library

This is a template for a react library:
 - started with `create-react-app` and 
 - based on Material-UI v4.x.x
 - storybook and documentation
 - workaround example (see the `TwoWaySwitch` component) for [this issue](https://github.com/storybookjs/storybook/issues/4143), enabling documented components to be wrapped in hocs
 - additional navigational components for use with react-router-dom
 - airbnb style guide with some mods (no fear though - instructions for switching to your preferred one below)

## How to use this template:

- Create a new repository on GitHub based on this template 
- Log into your (or create a) [codecov](https://codecov.io) account, and:
  - Create a project based on your new repository.
  - Copy the badge markdown and paste it at the top of this README file
  - *[Only for private repos]* Copy the token and use it to create a secret called `CODECOV_TOKEN` in your GitHub repository settings. This will allow the github action to upload codecov results
- Update the `[test-ci]` badge at the top of this README to point to your repo
- Clone the repository, then follow the instructions below to install and run the storybook
- Go into `.storybook/customStorybookTheme` and update your organisation logo and other details
- Go to `src/themes/_base.js` and update to your brand colours (you can use the [MUI tool](https://material.io/resources/color/) to select main colours and calculate shades from that
- Commit all your changes. Check the CI is working in GitHub Actions.

### Optional - changing the style guide

- Go into `package.json` and update the `eslint` plugins and config to match your organisation's style guide (this shamelessly uses a variation of AirBnB which is the closest I can get javascript to being both readable and usable, I'm sure you have a different opinion).
  - If you make any changes, run `eslint --fix` to update throughout  
- Re-run the storybook to ensure your changes don't break everything

## Installation

Install in the project directory:
`yarn`


## Run the storybook

In the project directory, you can run:
`yarn run storybook`

The storybook is an interactive playground for each component. It contains documentation generated from the source files and a canvas for interacting with the components.


## Run Tests

### Interactive watch mode

Launch the test runner in the interactive watch mode.
`yarn test`

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Single-run with coverage

Launch the test runner once, run all tests and generate a coverage report.
`yarn run coverage`
