import React from 'react'
import Typography from '@material-ui/core/Typography'

// NOTE - IMPORTING THE UNWRAPPED COMPONENT
// If you want to use is as if it were wrapped, you'll need to wrap it yourself here...
import { TwoWaySwitch } from './TwoWaySwitch'

export default {
  title: 'Core/TwoWaySwitch',
  component: TwoWaySwitch,
}

const Template = (args) => <TwoWaySwitch {...args} />


export const Controlled = Template.bind({})
Controlled.args = {
  leftLabel: 'Left Label',
  rightLabel: 'Right Label',
  checked: true,
  onCheckedChange: () => {},
}


export const NodeLabels = Template.bind({})
NodeLabels.args = {
  leftLabel: <Typography variant="h6">Typography Node As Left Label</Typography>,
  rightLabel: <Typography variant="caption">Right Typography</Typography>,
}
