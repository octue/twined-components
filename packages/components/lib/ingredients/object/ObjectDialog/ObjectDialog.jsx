import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { useForm } from 'react-hook-form'
import TextField from 'components/forms/fields/TextField'


function ObjectDialog({ action, onClose, onSubmit, open, path, value }) {

  const { control, handleSubmit, errors } = useForm({ mode: 'all' })

  const handleClose = () => {
    onClose('object')
  }

  const submit = (data) => {
    // On creation, pop the name from the form data - its used to create the node
    const { name, ...rest } = data
    onSubmit('object', action, path, name, rest)
  }

  const nodeName = useMemo(() => {
    if ((action === 'create') || (!path)) {
      return ''
    }
    const splitPath = path.split('.')
    return splitPath[splitPath.length - 1]
  }, [path])

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <form onSubmit={handleSubmit(submit)}>
        <DialogTitle id="form-dialog-title">Add a container object</DialogTitle>
        <DialogContent>
          <DialogContentText>
            An object is a container for a group of properties related to one another. You'll be able to drag items from
            the ingredients list into it.
          </DialogContentText>
          <TextField
            control={control}
            errors={errors}
            id="name"
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            disabled={action !== 'create'}
            defaultValue={nodeName}
            helperText="Name of the container object"
            rules={{
              minLength: {
                value: 1,
                message: 'Must have at least one character',
              },
              required: 'This field is required',
              pattern: {
                value: /^[a-z0-9_]*$/,
                message: "Must contain only lowercase letters, numbers and underscores (so-called 'snake_case')",
              },
            }}
          />
          <TextField
            control={control}
            errors={errors}
            margin="dense"
            id="title"
            label="Title"
            fullWidth
            defaultValue={value.title}
            helperText="An optional title for this container (used for displaying forms)"
            rules={{
              maxLength: {
                value: 50,
                message: 'Must have fewer than 50 characters',
              },
            }}
          />
          <TextField
            control={control}
            errors={errors}
            margin="dense"
            id="description"
            label="Description"
            fullWidth
            defaultValue={value.description}
            helperText="An optional description for this container"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary" variant="contained">
            {action === 'create' ? 'Add Object' : 'Save'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}


ObjectDialog.defaultProps = {
  value: {},
}


ObjectDialog.propTypes = {
  action: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.object,
}


export default ObjectDialog
