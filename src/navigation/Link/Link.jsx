import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import MuiLink from '@material-ui/core/Link'


// The use of React.forwardRef will no longer be required for react-router-dom v6.
// See https://github.com/ReactTraining/react-router/issues/6056
const RefLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)


/**
 * MUI Link, either to an external href or internal location using react-router-dom.
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
function Link({ children, ...rest }) {
  const download = !!rest.download
  const external = !!rest.href
  if (download) {
    return (
      <MuiLink component="a" download {...rest}>
        {children}
      </MuiLink>
    )
  }
  if (external) {
    return (
      <MuiLink component="a" target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </MuiLink>
    )
  }
  return (
    <MuiLink component={RefLink} {...rest}>
      {children}
    </MuiLink>
  )
}


export default Link
