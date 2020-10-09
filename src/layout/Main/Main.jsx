import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: 'calc(100vh - 56px)',
    marginTop: '56px',
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      height: 'calc(100vh - 48px)',
      marginTop: '48px',
    },
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100vh - 64px)',
      marginTop: '64px',
    },
  },
}))


function Main({ children }) {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      { children }
    </main>
  )
}


Main.defaultProps = {}


Main.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Main
