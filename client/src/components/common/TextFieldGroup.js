import React from 'react'
import propTypes from 'prop-types'

const TextFieldGroup = ({
  name,
  placeHolder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled,
}) => {
  return (
    <div className='form-group'>
      <input
        type={type}
        className={`form-control form-control-lg ${error && 'is-invalid'}`}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className='form-text text-muted'>{info}</small>}
      {error && <div className='invalid-feedback'>{error}</div>}
    </div>
  )
}

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string,
}

TextFieldGroup.defaultProps = {
  type: 'text',
}

export default TextFieldGroup
