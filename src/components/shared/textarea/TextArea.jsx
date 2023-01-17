import React from 'react'
import { TextAreaWrapper } from './TextAreaStyled'
import PropTypes from 'prop-types'
import { HiX, HiCheck } from 'react-icons/hi'

function TextArea ({
    label,
    id,
    name,
    value,
    error,
    isValid,
    register,
    validation,
    watch,
    ...otherProps
}) {
    return (
        <TextAreaWrapper className={error ? 'error' : (isValid ? 'valid' : '')}>
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
            <textarea
                placeholder=' '
                rows='3'
                id={id}
                name={name}
                onChange={(e) => handleInput(e.target.value)}
                {...register(name, validation)}
            ></textarea>
            <span className={error ? 'error' : ''}>{label}</span>
            <div style={{
                position: 'absolute',
                bottom: -10,
                left: 5,

            }}>
                <p className={`fs-14 ${watch.length > 120 ? 'primary' : 'gray'}`}>{watch.length}/120</p>
            </div>
        </TextAreaWrapper>
    )
}

TextArea.propTypes = {
    label: PropTypes.string,
    id: PropTypes.any,
    name: PropTypes.any,
    value: PropTypes.any,
    error: PropTypes.any,
    isValid: PropTypes.any,
    register: PropTypes.any,
    validation: PropTypes.any,
    watch: PropTypes.any
}

export default TextArea