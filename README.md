<!-- [![codecov](https://codecov.io/gh/octue/twined-components/branch/master/graph/badge.svg)](https://codecov.io/gh/octue/twined-components) -->
<!-- ![test-ci](https://github.com/octue/twined-ui/workflows/test-ci/badge.svg) -->

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![pre-commit](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)

# Twined UI

React components and frontend applications for the twined ecosystem [twined](https://twined.readthedocs.io).

**Twined UI consists of three packages:**

- Builder. An interactive builder component for twine files.
- Components. A wide range of low-level React components for use managing data.
- Fibres. A tool for managing file metadata and data schema.

**Key features:**

- Storybook and documentation
- Themable, based on Material-UI v4.x.x

## Using Twined UI Components

If you're building a frontend using data from twined apps or from fibres, you'll probably be looking for the react components. Do this:
`yarn add @twined/components`

(or `npm install --save @twined/components` if `npm` is your preferred tool).

The documentation for individual components is managed with storybook - see [storybook.twined.octue.com](https://storybook.twined.octue.com) for usage examples.

## Contributing

### Adding a new component

To get started adding new components to `twined-ui`:

- You'll need `lerna` installed; do `npm install --global lerna`
- Fork and clone the github repository to your machine.
- Install pre-commit hooks, following the instructions [here](https://pre-commit.com/).
- Install development requirements with `yarn bootstrap`.
- Run the storybook in developer mode with `yarn storybook`.

Storybook is an interactive playground for each component. It contains documentation generated from the source files, and a canvas for interacting with the components.

Create a folder for your new component (following the naming convention of the existing folders, it's good to copy and rename an existing, similar one), and write a story to show it in use. Off you go from there!
