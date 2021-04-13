import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'


const useStyles = makeStyles((theme) => ({
  root: {
    borderLeft: `${theme.spacing(1)}px solid ${theme.palette.octueGreen.main}`,
  },
}))


const ObjectCard = React.forwardRef((props, ref) => {
  const {
    title,
    subtitle,
  } = props
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      {/*<CardMedia*/}
      {/*  component="img"*/}
      {/*  alt="Contemplative Reptile"*/}
      {/*  height="140"*/}
      {/*  image={require('assets/img/examples/contemplative-reptile.jpg')}*/}
      {/*  title="Contemplative Reptile"*/}
      {/*/>*/}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {subtitle}
        </Typography>
      </CardContent>
    </Card>
  )
})


ObjectCard.defaultProps = {
  title: 'Object Container',
  subtitle: 'Allows you to group a set of requirements together',
}


ObjectCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}


export default ObjectCard
