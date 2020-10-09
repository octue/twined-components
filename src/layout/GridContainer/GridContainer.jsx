import React from 'react'
import Grid from '@material-ui/core/Grid'


function GridContainer({ children, ...rest }) {
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  )
}


export default GridContainer
