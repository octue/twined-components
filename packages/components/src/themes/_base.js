/* Brand colours
 *
 * From our main colours, light and dark variants are generated at https://material.io/resources/color/ ...
 * These will be mixed into the MUI theme object so you get them in context
 *
 */
const branding = {
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
}

// Some useful colours

/* MATERIAL-UI THEME
 *
 * I've made this up as a basis to show you how to build the theme. You can use the twined default themes out of the
 * box, or provide your own customised to your company branding.
 *
 * MUI doesn't allow arbitrary additions to its theme object. That's a disadvantage when you have one parameter that
 * it'd just be convenient to access as part of your theme. See `src/themes/light-theme` for how to mix the above
 * branding object into the theme so that you can access those properties from any component.
 *
 */
const baseThemeOptions = {
  palette: {
    primary: {
      ...branding.palette.octueBlue, // Or use a different primary and secondary; the brand colours will also be mixed in explicitly.
    },
    secondary: {
      ...branding.palette.octueRed, // Or use a different primary and secondary; the brand colours will also be mixed in explicitly.
    },
  },
  // Global overrides of MUI default props...
  props: {
    MuiTextField: {
      // Text boxes should be the outlined variant, because the default greyed out variant looks disabled (poor UX - even google don't use their own default).
      variant: 'outlined',
    },
  },
  // Global overrides of MUI default styling...
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: '0px', // Choose whatever you want... it's helpful to have it done globally here.
      },
    },
  },
}

export { baseThemeOptions, branding }
