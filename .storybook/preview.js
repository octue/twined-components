// import StoryRouter from 'storybook-react-router'
// import { withMuiTheme } from '@harelpls/storybook-addon-materialui'
// import { lightTheme, darkTheme } from '../src/themes'

import theme from './storybookTheme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [],
      locales: '',
    },
  },
}

export const decorators = [
  // StoryRouter(),
  // withMuiTheme({
  //   'Twined Light Theme': lightTheme,
  //   'Twined Dark Theme': darkTheme,
  // })
]
