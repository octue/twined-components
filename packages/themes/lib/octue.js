import merge from 'deepmerge'
import { createMuiTheme } from '@material-ui/core/styles'
import { baseThemeOptions, baseBranding } from './_base'

export const branding = {
  ...baseBranding,
  palette: {
    octueGrey: {
      light: '#79797b',
      main: '#4d4d4f',
      dark: '#252527',
      contrastText: '#ffffff',
    },
    octueYellow: {
      light: '#f6c043',
      main: '#bf9000',
      dark: '#8a6300',
      contrastText: '#ffffff',
    },
    octueRed: {
      light: '#ec5958',
      main: '#b4232f',
      dark: '#7d0008',
      contrastText: '#ffffff',
    },
    octueBlue: {
      light: '#73c9ff',
      main: '#3498db',
      dark: '#006aa9',
      contrastText: '#ffffff',
    },
    octueGreen: {
      light: '#5acab8',
      main: '#1a9988',
      dark: '#006a5b',
      contrastText: '#ffffff',
    },
    gradientRedBlue: 'linear-gradient(90deg, #b4232f, #3498db)',
    gradientBlueRed: 'linear-gradient(90deg, #3498db, #b4232f)',
    brands: {
      twitter: '#55acee',
      facebook: '#3b5998',
      google: '#dd4b39',
      linkedin: '#0976b4',
      youtube: '#e52d27',
    },
  },
  logos: {
    text: {
      dark: require('assets/images/logo/octue/text-transparent-dark.svg'),
      light: require('assets/images/logo/octue/text-transparent-light.svg'),
    },
    square: {
      dark: require('assets/images/logo/octue/square-transparent-dark.svg'),
      light: require('assets/images/logo/octue/square-transparent-light.svg'),
    },
  },
}

// Generate the light theme and merge branding variables so they're available in context
export const lightThemeOptions = {
  ...baseThemeOptions,
  palette: {
    primary: {
      ...branding.palette.octueBlue,
    },
    secondary: {
      ...branding.palette.octueRed,
    },
    type: 'light',
  },
}
const lightTheme = merge(createMuiTheme(lightThemeOptions), branding)

// Generate the dark theme and merge branding variables so they're available in context
const darkThemeOptions = {
  ...lightThemeOptions,
  palette: {
    ...lightThemeOptions.palette,
    type: 'dark',
  },
}

const darkTheme = merge(createMuiTheme(darkThemeOptions), branding)

export const octue = {
  lightTheme,
  darkTheme,
}
