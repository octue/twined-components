import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import MuiLink from '@material-ui/core/Link'


// The use of React.forwardRef will no longer be required for react-router-dom v6.
// See https://github.com/ReactTraining/react-router/issues/6056
const RefLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)


// The best of both worlds. Use react router to manage the link; Material to manage its styling.
// Automatically creates an external link if an href is given, otherwise creates an internal one and will use the 'to'
// prop
function Link({ children, ...rest }) {
  const external = !!rest.href
  return external ? (
    <MuiLink component="a" target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </MuiLink>
  ) : (
    <MuiLink component={RefLink} {...rest}>
      {children}
    </MuiLink>
  )
}


export default Link
