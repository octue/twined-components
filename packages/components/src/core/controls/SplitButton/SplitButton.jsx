import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Popover from '@material-ui/core/Popover'

/**
 * A dropdown in the form of a MUI ButtonGroup with a right-hand down arrow.
 * Should be used as a controlled component.
 */
function SplitButton(props) {
  const { options, selected, onSelectedChange, onSelectedClick } = props

  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleClick = () => {
    // User is clicking on the already selected item
    if (onSelectedClick) {
      onSelectedClick()
    } else {
      // Treat as a toggle of the menu open by default
      setOpen((prevOpen) => !prevOpen)
    }
  }

  const handleMenuItemClick = (event, index) => {
    onSelectedChange(index)
    setOpen(false)
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  return (
    <>
      <ButtonGroup
        variant="contained"
        color="primary"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button onClick={handleClick}>{options[selected]}</Button>
        <Button
          color="primary"
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popover
        // id={id}
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <MenuList id="split-button-menu">
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === selected}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </>
  )
}

SplitButton.defaultProps = {
  selected: 0,
  onSelectedClick: undefined,
}

SplitButton.propTypes = {
  /**
   * Callback executed when the selected value is changed by the user. Receives the newly selected index.
   */
  onSelectedChange: PropTypes.func.isRequired,
  /**
   * The integer index (into the options list) of the currently selected item
   */
  selected: (props, propName) => {
    if (
      !Number.isInteger(props.selected) ||
      props.selected < 0 ||
      props.selected >= props.options.length
    ) {
      return new Error(
        `${propName} (current value = ${props.selected}) needs to be a valid index into the options array, or the options array must be of length >= 1`
      )
    }
    return null
  },
  /**
   * When an option is already selected, but the user clicks on it (rather than the dropdown icon) this callback is
   * executed. If not defined, that click action triggers re-open of the dropdown.
   */
  onSelectedClick: PropTypes.func,
  /**
   * The list of options to be rendered into the dropdown. These are nodes, so can be simple text, Typography or
   * full react components.
   */
  options: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default SplitButton
