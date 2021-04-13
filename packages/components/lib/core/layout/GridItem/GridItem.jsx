import React from 'react'
import Grid from '@material-ui/core/Grid'


function GridItem({ children, ...rest }) {
  return (
    <Grid item {...rest}>
      {children}
    </Grid>
  )
}


export default GridItem
