import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton'


// The use of React.forwardRef will no longer be required for react-router-dom v6.
// See https://github.com/ReactTraining/react-router/issues/6056
const RefLink = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />)


// The best of both worlds. Renders MUI's IconButton but provides a link, either internal or external
// Creates a download link if both 'download' and `href` props are given
// Creates an external link with `target="_blank" rel="noopener noreferrer"` if just an `href` prop is given
// Otherwise uses react-router to create an internal link (if 'to' prop is given)
function IconButtonLink({ children, ...rest }) {
  const download = !!rest.download
  const external = !!rest.href
  if (download) {
    return (
      <IconButton component="a" {...rest}>
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
