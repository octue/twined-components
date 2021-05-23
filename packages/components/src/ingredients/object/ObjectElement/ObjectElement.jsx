import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import { makeStyles, useTheme } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import GridContainer from 'components/common/Grid/GridContainer'
import GridItem from 'components/common/Grid/GridItem'
import { Droppable } from 'react-beautiful-dnd'

const useStyles = makeStyles((theme) => ({
  box: {
    width: '100%',
  },
  listContainer: {
    background: '#e8a2f5',
  },
  listItem: {
    background: '#aef285',
  },
  droppable: {
    background: theme.palette.primary.light,
    width: '100%',
    minHeight: '50px',
    border: `1px ${theme.palette.primary.main}`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
  },
}))

function ObjectElement({ path, children }) {
  const theme = useTheme()
  const classes = useStyles()
  const droppableId = `droppable-${path}`

  console.log('THE PATH IS ', path)
  const level = useMemo(() => path.split('.').length, [path])
  const borderIndent = theme.spacing(1) * level
  return (
    <Box className={classes.box} borderleft={borderIndent}>
      {/* TODO form for the metadata that all object properties have, and/or a button to view advanced
           options / settings in a modal. The handleChange callback of the form contents should call the onChange
           passed to this function, to update the state of the twine. */}
      {/* TODO In future, make these items draggable, allowing drag of children to container element */}
      <GridContainer spacing={1} className={classes.listContainer}>
        {children.map((child) => (
          <GridItem key={child.id} xs={12} className={classes.listItem}>
            {child.content}
          </GridItem>
        ))}
      </GridContainer>
      <Droppable droppableId={droppableId} isCombineEnabled>
        {(droppableProvided) => (
          <div
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
            className={classes.droppable}
          >
            <Typography
              variant="subtitle2"
              align="center"
              color="textSecondary"
            >
              Drop elements here from the palette on the right...
            </Typography>
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
    </Box>
  )
}

ObjectElement.defaultProps = {
  children: [],
  id: 'todo-get-id',
  path: '',
}

ObjectElement.propTypes = {
  children: PropTypes.array,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  path: PropTypes.string,
}

export default ObjectElement
