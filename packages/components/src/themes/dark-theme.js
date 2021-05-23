import merge from 'deepmerge'
import { createMuiTheme } from '@material-ui/core/styles'
import { baseThemeOptions, branding } from './_base'

/* Dark Theme
 *
 */
const darkThemeOptions = {
  ...baseThemeOptions,
  palette: {
    type: 'dark',
  },
}

// This is what allows us to pass our brand colours and things down with the theme context, so you can access them in styles.
const darkTheme = merge(createMuiTheme(darkThemeOptions), branding)

export default darkTheme
