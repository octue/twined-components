/* eslint-disable import/no-dynamic-require */

/** Base Branding
 *
 * These are named octue colours and logos, accessible from everywhere,
 * irrespective of whether the whitelabeled theme is in context or not.
 *
 * From main colours, light and dark variants came from https://material.io/resources/color/
 */
const baseBranding = {
  palette: {},
}

/* MATERIAL-UI THEME
 *
 * MUI doesn't allow arbitrary additions to its theme object. That's a disadvantage when you have one parameter that
 * it'd just be convenient to have as part of your theme context and access on the theme object...
 *
 * For example, a success colour (glaringly missing from MUI4). With the trick below you can add theme parameters that
 * we can then pick up from context as we build components.
 *
 */
const baseThemeOptions = {
  // Global overrides of MUI default props...
  props: {
    MuiTextField: {
      // Text boxes should be the outlined variant, because the default greyed out variant looks disabled (poor UX - even google don't use their own default).
      variant: 'outlined',
    },
    MuiCard: {
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

export { baseBranding, baseThemeOptions }
