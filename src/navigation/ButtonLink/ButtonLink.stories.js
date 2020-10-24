import React from 'react'
import ButtonLink from './ButtonLink'


export default {
  title: 'Navigation/ButtonLink',
  component: ButtonLink,
}


export const ExternalLink = (args) => <ButtonLink color="primary" variant="contained" {...args}>External link (opens new window)</ButtonLink>
ExternalLink.args = {
  href: 'https://placekitten.com/',
}

export const DownloadLink = (args) => <ButtonLink color="primary" variant="contained" {...args}>Download link (downloads file in this window)</ButtonLink>
DownloadLink.args = {
  download: true,
  href: 'images/logo/club-transparent-tight-white.svg',
}

export const InternalLink = (args) => <ButtonLink color="primary" variant="contained" {...args}>Internal Link (changes route)</ButtonLink>
InternalLink.args = {
  to: 'some/internal/url/',
}
