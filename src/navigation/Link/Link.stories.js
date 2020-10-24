import React from 'react'
import Link from './Link'


export default {
  title: 'Navigation/Link',
  component: Link,
}


export const ExternalLink = (args) => <Link color="primary" {...args}>External link (opens new window)</Link>
ExternalLink.args = {
  href: 'https://placekitten.com/',
}

export const DownloadLink = (args) => <Link color="primary" {...args}>Download link (downloads file in this window)</Link>
DownloadLink.args = {
  download: true,
  href: 'images/logo/club-transparent-tight-white.svg',
}

export const InternalLink = (args) => <Link color="primary" {...args}>Internal Link (changes route)</Link>
InternalLink.args = {
  to: 'some/internal/url/',
}
