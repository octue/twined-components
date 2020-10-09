import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import MuiAppBar from '@material-ui/core/AppBar'
import Menu from '@material-ui/core/Menu'
import Toolbar from '@material-ui/core/Toolbar'


const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    transition: 'all 300ms linear',
    overflow: 'hidden',
  },
  logoImg: {
    height: '35px',
    paddingBottom: '3px',
    verticalAlign: 'middle',
    border: '0',
  },
}))


function AppBar({ logo }) {
  const classes = useStyles()

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id="primary-search-account-menu-mobile"
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    />
  )

  return (
    <>
      <MuiAppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.logo}>
            <img src={logo} alt="logo" className={classes.logoImg} />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </MuiAppBar>
      {renderMobileMenu}
    </>
  )
}


AppBar.defaultProps = {}


AppBar.propTypes = {
  logo: PropTypes.string.isRequired,
}


export default AppBar
