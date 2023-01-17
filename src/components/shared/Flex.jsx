import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FlexStyled = styled.div`
 display: flex;
 flex-direction: ${props => props.direction};
 align-items: ${props => props.align};
 justify-content: ${props => props.justify};
 gap: ${props => props.gap}rem;
`

function Flex ({
    children,
    direction,
    align,
    justify,
    gap,
    otherProps
}) {
    return (
        <FlexStyled
            direction={direction}
            align={align}
            justify={justify}
            gap={gap || '0'}
            {...otherProps}
        >
            {children}
        </FlexStyled>
    )
}

Flex.propTypes = {
    children: PropTypes.node,
    direction: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
    gap: PropTypes.string
}

export default Flex