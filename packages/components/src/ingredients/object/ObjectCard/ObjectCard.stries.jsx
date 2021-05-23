import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'

import ObjectCard from './ObjectCard'

export default {
  title: 'Ingredients/Object/Card',
  component: ObjectCard,
}

const Template = (args) => <ObjectCard {...args} />

export const Basic = Template.bind({})
Basic.args = {}
