import { addons } from '@storybook/addons'
import theme from './customStorybookTheme'


// Configure the theme for the surrounding storybook (nb this is not the MUI components theme)
addons.setConfig({
  theme: theme,
})
