import React from 'react'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import IconButtonLink from './IconButtonLink'


export default {
  title: 'Core/Navigation/IconButtonLink',
  component: IconButtonLink,
}


export const ExternalLink = (args) => <IconButtonLink color="primary" variant="contained" {...args}><AcUnitIcon /></IconButtonLink>
ExternalLink.args = {
  download: false,
  href: 'https://placekitten.com/',
}

export const DownloadLink = (args) => <IconButtonLink color="primary" variant="contained" {...args}><AcUnitIcon /></IconButtonLink>
DownloadLink.args = {
  download: true,
  href: 'images/logo/club-transparent-tight-white.svg',
}

export const InternalLink = (args) => <IconButtonLink color="primary" variant="contained" {...args}><AcUnitIcon /></IconButtonLink>
InternalLink.args = {
  to: 'some/internal/url/',
}
