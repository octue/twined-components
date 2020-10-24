import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}))


function Root({ children }) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      { children}
    </div>
  )
}


Root.defaultProps = {}

Root.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Root
