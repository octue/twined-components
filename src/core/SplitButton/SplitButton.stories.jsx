import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'

import SplitButton from './SplitButton'

export default {
  title: 'Core/SplitButton',
  component: SplitButton,
  actions: {},
}

const Template = (args) => <SplitButton {...args} />


export const Text = Template.bind({})
Text.args = {
  options: [
    'Option 0',
    'Option 1',
    'Option 2',
  ],
}

export const Controlled = (args) => {
  const [selected, onSelectedChange] = useState(0)
  return (
    <SplitButton {...args} selected={selected} onSelectedChange={onSelectedChange} />
  )
}
Controlled.args = {
  ...Text.args,
}

export const CustomComponents = Template.bind({})
CustomComponents.args = {
  options: [
    <Typography variant="h6">Option 0</Typography>,
    <Typography variant="h5">Option 1</Typography>,
    <Typography variant="h4">Option 2</Typography>,
  ],
}
