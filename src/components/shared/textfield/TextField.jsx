import React from 'react'
import { TextFieldWrapper } from './TextFieldStyled'
import PropTypes from 'prop-types'
import { HiX, HiCheck } from 'react-icons/hi'

function TextField ({
    label,
    id,
    name,
    value,
    error,
    type,
    onChange,
    isValid,
    errorMessage,
    inputRef,
    register,
    validation,
    isDisable = false,
    ...otherProps
}) {
    return (
        <>
            <TextFieldWrapper className={error ? 'error' : (isValid ? 'valid' : (isDisable ? 'disabled' : ''))}>
                {
                    error && (
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            right: '10px',

                        }}>
                            <HiX style={{ color: '#FF8A00' }} />
                        </div>
                    )
                }
                {
                    isValid && (
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            right: '10px',

                        }}>
                            <HiCheck style={{ color: '#1BD97B' }} />
                        </div>
                    )
                }
                <input
                    id={id}
                    placeholder=' '
                    name={name}
                    type={type}
                    disabled={isDisable}
                    {...register(name, validation)}
                />
                <span className={error ? 'error' : ''}>{label}</span>
            </TextFieldWrapper>
        </>
    )
}

TextField.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
    error: PropTypes.any,
    type: PropTypes.any,
    isValid: PropTypes.any,
    errorMessage: PropTypes.any,
    inputRef: PropTypes.any,
    validation: PropTypes.any,
    register: PropTypes.any,
    isDisable: PropTypes.bool

}

export default TextField