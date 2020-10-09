
/* Brand colours
 *
 */

// From main colours, light and dark variants came from https://material.io/resources/color/ ...
// These will be mixed into the MUI theme object so you get them in context
const branding = {
  palette: {
    yourCompanyTeal: {
      light: '#005b4f',
      main: '#00897b',
      dark: '#4ebaaa',
      contrastText: '#ffffff',
    },
    yourCompanyPink: {
      light: '#ff5c8d',
      main: '#d81b60',
      dark: '#a00037',
      contrastText: '#ffffff',
    },
    otherUsefulBlue: {
      light: '#5472d3',
      main: '#0d47a1',
      dark: '#002171',
      contrastText: '#ffffff',
    },
    // These are just generally useful to have around in the palette context when styling stuff up
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
 * I've made this up just now as a basis to show you how we build the theme.
 *
 * MUI doesn't allow arbitrary additions to its theme object. That's a disadvantage when you have one parameter that
 * it'd just be convenient to have as part of your theme context and access on the theme object...
 *
 * For example, a success colour (glaringly missing from MUI4). With the trick below you can add theme parameters that
 * we can then pick up from context as we build components.
 *
 */
const baseThemeOptions = {
  palette: {
    primary: {
      ...branding.palette.yourCompanyTeal  // Or use a different primary and secondary, or whatever. Your brand colours will also be mixed in explicitly.
    },
    secondary: {
      ...branding.palette.yourCompanyPink  // Or use other primary and secondary
    },
  },
  props: { // Suggestion: Text boxes should be the outlined variant, because the (default) greyed out variant looks horrible, and is a UX nightmare because it looks disabled.
    MuiTextField: {
      variant: 'outlined',
    },
  },
  // This is how to override all of MUI in one place...
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: '0px', // Choose whatever you want... it's helpful to have it done globally here.
      },
      root: {
        border: 'none',
      },
    },
  },
}


export {
  baseThemeOptions,
  branding,
}
