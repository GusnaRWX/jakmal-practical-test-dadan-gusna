import React from 'react'
import { ButtonStyled } from './ButtonStyled'
import PropTypes from 'prop-types'

function Button ({
    variant,
    type,
    className,
    disabled,
    children,
    ...otherProps
}) {
    return (
        <ButtonStyled
            {...((className || variant) && { className: variant !== 'inherit' ? variant + ' ' + className : className })}
            type={type}
            {...(disabled && { disabled: true })}
            {...otherProps}
            disabled={disabled}
        >
            {children}
        </ButtonStyled>
    )
}

Button.propTypes = {
    variant: PropTypes.any,
    type: PropTypes.any,
    disabled: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    className: PropTypes.any
}

export default Button