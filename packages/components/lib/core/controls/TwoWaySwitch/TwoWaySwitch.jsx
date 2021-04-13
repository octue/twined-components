import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from '@material-ui/core/FormGroup'
import Switch from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import controllable from 'react-controllables'


/**
 * A two-way switch to swap between two valid options
 *
 * Essentially a boolean switch like a checkbox (where 'checked'
 * places it in the right hand position) but with
 * better UX where both options are valid.
 *
 * Can be used as a controlled or uncontrolled component. To use
 * in a controlled mode, pass both `checked` bool and `onCheckedChange`
 * function.
 *
 */
function TwoWaySwitch({
  leftLabel, rightLabel, checked, onCheckedChange,
}) {
  const handleChange = (event) => {
    if (onCheckedChange) {
      onCheckedChange(event.target.checked)
    }
  }

  const color = checked ? 'primary' : 'secondary'

  return (
    <FormGroup>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          {leftLabel ? <Grid item>{leftLabel}</Grid> : null}
          <Grid item>
            <Switch
              checked={checked}
              onChange={handleChange}
              value="checked"
              color={color}
            />
          </Grid>
          {rightLabel ? <Grid item>{rightLabel}</Grid> : null}
        </Grid>
      </Typography>
    </FormGroup>
  )
}


TwoWaySwitch.defaultProps = {
  leftLabel: '',
  rightLabel: '',
}

TwoWaySwitch.propTypes = {
  /**
   * Label positioned to the left. Can be text or node.
   */
  leftLabel: PropTypes.node,
  /**
   * Label positioned to the right. Can be text or node.
   */
  rightLabel: PropTypes.node,
  /**
   * Control state of switch, `checked=True` places it
   * in the right hand position.
   */
  // eslint-disable-next-line react/require-default-props
  checked: PropTypes.bool,
  /**
   * Provide a callback function when the switch changes.
   * Function will receive the new `checked` value.
   */
  // eslint-disable-next-line react/require-default-props
  onCheckedChange: PropTypes.func,
}

// Working around https://github.com/storybookjs/storybook/issues/4143
export { TwoWaySwitch }
const exportComponent = controllable(TwoWaySwitch, ['checked'])
exportComponent.displayName = 'TwoWaySwitch'
exportComponent.propTypes = TwoWaySwitch.propTypes
exportComponent.defaultProps = TwoWaySwitch.defaultProps
export default exportComponent
