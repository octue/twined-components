import StoryRouter from 'storybook-react-router'
import themes from './customStorybookTheme'
import { withMuiTheme } from '@harelpls/storybook-addon-materialui'
import { lightTheme, darkTheme } from '../src/themes'



export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.dark,
  },
}



export const decorators = [
  StoryRouter(),
  withMuiTheme({
    'Twined Light Theme': lightTheme,
    'Twined Dark Theme': darkTheme,
  })
]
