import React from 'react'
import PropTypes from 'prop-types'
import {
    BaseContainer,
    CardContainer,
    HeaderContainer,
    StepContainer,
    StepItem,
    BreadCrumbTitle
} from './BaseLayoutStyled'
import { HiChevronRight } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'

function BaseLayout ({
    children,
    path
}) {
    const location = useLocation()
    const pathname = location.pathname
    return (
        <BaseContainer>
            <HeaderContainer>
                <StepContainer>
                    <StepItem isLocation={true}>1</StepItem>
                    <BreadCrumbTitle>Delivery</BreadCrumbTitle>
                </StepContainer>
                <HiChevronRight style={{ color: '#FF8A00' }} />
                <StepContainer>
                    <StepItem isLocation={pathname === '/payment' || pathname === '/finish' ? true : false}>2</StepItem>
                    <BreadCrumbTitle>Payment</BreadCrumbTitle>
                </StepContainer>
                <HiChevronRight style={{ color: '#FF8A00' }} />
                <StepContainer>
                    <StepItem isLocation={pathname === '/finish' ? true : false}>3</StepItem>
                    <BreadCrumbTitle>Finish</BreadCrumbTitle>
                </StepContainer>
            </HeaderContainer>
            <CardContainer>
                {children}
            </CardContainer>
        </BaseContainer>
    )
}

BaseLayout.propTypes = {
    path: PropTypes.any,
    children: PropTypes.node
}

export default BaseLayout