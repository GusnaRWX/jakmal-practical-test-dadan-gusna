import React from 'react'
import { CheckBoxWrapper } from './CheckBoxStyled'
import PropTypes from 'prop-types'

function CheckBox ({
    onClick
}) {
    return (
        <CheckBoxWrapper>
            <input onClick={onClick} id='dropship' type='checkbox' name='dropship' value='' />
            <label htmlFor='dropship'>Send as dropshipper</label>
        </CheckBoxWrapper>
    )
}

CheckBox.propTypes = {
    onClick: PropTypes.func
}

export default CheckBox