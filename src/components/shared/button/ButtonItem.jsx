import React from 'react'
import PropTypes from 'prop-types'
import { ButtonItemStyled, LabelWrapper } from './ButtonStyled'
import { HiOutlineCheck } from 'react-icons/hi'

function ButtonItem ({
    variant,
    type = 'noPrice',
    label,
    price,
    className,
    checked,
    onClick
}) {
    return (
        <ButtonItemStyled
            {...((className || variant) && { className: variant !== 'inherit' ? variant + ' ' + className : className })}
            onClick={onClick}
        >
            <LabelWrapper>
                {
                    type === 'withPrice' ? (
                        <>
                            <p className='ma-0 fs-12 black'>{label}</p>
                            <p className='ma-0 fs-14 black'>{price}</p>
                        </>
                    ) : (
                        <p className=' fs-14 black' style={{ margin: '.7rem' }}>{label}</p>
                    )
                }
            </LabelWrapper>
            {
                checked && (
                    <HiOutlineCheck style={{ color: '#1BD97B' }} />
                )
            }
        </ButtonItemStyled>
    )
}

ButtonItem.propTypes = {
    variant: PropTypes.any,
    type: PropTypes.string,
    label: PropTypes.string,
    price: PropTypes.string,
    className: PropTypes.any,
    checked: PropTypes.bool,
    onClick: PropTypes.func
}

export default ButtonItem