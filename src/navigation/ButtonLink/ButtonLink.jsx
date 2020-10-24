import React, { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'


// The use of React.forwardRef will no longer be required for react-router-dom v6.
// See https://github.com/ReactTraining/react-router/issues/6056
const RefLink = forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)


/**
 * MUI Button as a link, either to an external href or internal location using react-router-dom.
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
const ButtonLink = forwardRef(({ children, ...rest }, ref) => {
  const download = !!rest.download
  const external = !!rest.href
  if (download) {
    return (
      <Button component="a" {...rest} download>
        {children}
      </Button>
    )
  }
  if (external) {
    return (
      <Button component="a" target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </Button>
    )
  }
  return (
    <Button component={RefLink} {...rest} ref={ref}>
      {children}
    </Button>
  )
})


export default ButtonLink
