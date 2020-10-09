import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withMuiTheme } from '@harelpls/storybook-addon-materialui'

import { addDecorator } from '@storybook/react'

import { lightTheme, darkTheme } from '../../themes'

// NOTE - SEE I'M IMPORTING THE UNWRAPPED COMPONENT
// If you want to use is as if it were wrapped, you'll need to wrap it yourself here...
import { TwoWaySwitch } from './TwoWaySwitch'

// globally with custom themes
addDecorator(withMuiTheme({
  'Light theme': lightTheme,
  'Dark theme': darkTheme,
}))


export default {
  title: 'Core/TwoWaySwitch',
  component: TwoWaySwitch,
  decorators: [withMuiTheme()],
}

const Template = (args) => <TwoWaySwitch {...args} />


export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
  leftLabel: 'Left Label',
  rightLabel: 'Right Label',
}


export const NodeLabels = Template.bind({})
NodeLabels.args = {
  leftLabel: <Typography variant="h3">Typography Node As Left Label</Typography>,
  rightLabel: <Typography variant="caption">Right Typography</Typography>,
}
