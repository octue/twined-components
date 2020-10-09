import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'


// The use of React.forwardRef will no longer be required for react-router-dom v6.
// See https://github.com/ReactTraining/react-router/issues/6056
const RefLink = forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)


// The best of both worlds. Renders MUI's Button but provides a link, either internal or external
// Automatically creates an external link if an `href` prop is given, otherwise uses react-router to create an internal
// link (if 'to' prop is given)
const ButtonLink = forwardRef(({ children, ...rest }, ref) => {
  const external = !!rest.href
  return external ? (
    <Button component="a" target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </Button>
  ) : (
    <Button component={RefLink} {...rest} ref={ref}>
      {children}
    </Button>
  )
})


export default ButtonLink
