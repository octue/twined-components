import React from 'react'
import AppBar from './AppBar'


export default {
  title: 'Layout/AppBar',
  component: AppBar,
}

// We create a “template” of how args map to rendering
const Template = (args) => <AppBar {...args} />


// Each story then reuses that template
export const Simple = Template.bind({})
Simple.args = {
  logo: 'images/logo/twined-logo-text-white.svg',
}
