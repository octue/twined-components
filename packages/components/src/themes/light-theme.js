import merge from 'deepmerge'
import { createMuiTheme } from '@material-ui/core/styles'
import { baseThemeOptions, branding } from './_base'

/* Light Theme
 *
 */
const lightThemeOptions = {
  ...baseThemeOptions,
}

// Generate the light theme and merge in the branding colours so they're available in context
const lightTheme = merge(createMuiTheme(lightThemeOptions), branding)

export default lightTheme
