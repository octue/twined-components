import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'


// The use of React.forwardRef will no longer be required for react-router-dom v6.
// See https://github.com/ReactTraining/react-router/issues/6056
const RefLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)


// TODO This is mostly duplicated from the ButtonLink code. Refactor together. Honestly no idea why MUI even have a separate component.

/**
 * MUI IconButton as a link, either to an external href or internal location using react-router-dom.
 *
 * Avoids the need to explicitly style links as buttons or hacking types of a button.
 * This automatically creates an external link (if an `href` prop is given), otherwise uses react-router-dom to create
 * an internal link (if 'to' prop is given).
 *
 * Creates a download link if both 'download' and `href` props are given. If only an href is given,
 * the generated external link has `target="_blank" rel="noopener noreferrer"` set to securely open the link in another
 * tab.
 *
 * Forwards ref to the target element.
 *
 */
function IconButtonLink({ children, ...rest }) {
  const download = !!rest.download
  const external = !!rest.href
  if (download) {
    return (
      <IconButton component="a" {...rest} download>
        {children}
      </IconButton>
    )
  }
  if (external) {
    return (
      <IconButton component="a" target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </IconButton>
    )
  }
  return (
    <IconButton component={RefLink} {...rest}>
      {children}
    </IconButton>
  )
}


export default IconButtonLink
