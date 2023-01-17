import React from 'react'
import { BaseLayout } from '../shared'
import SummaryComponent from '../summary/SummaryComponent'
import { HiArrowLeft } from 'react-icons/hi'
import {
    BackButton,
    GridContainer,
    SummarySection,
    FormSection,
    FinishLeftSection,
    HeadLeftSection,
    HeadLeftTitle,
    TitleBorder,
    ContentFinishWrapper
} from '../SharedStyled'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { clearAllStorage } from '../../utils/helpers'

function FinishComponent ({
    data,
    orderId
}) {
    const navigation = useNavigate()
    const handleBack = () => {
        clearAllStorage()
        navigation('/')
    }
    let newShipment = [...data.shipment]
    let newPayment = [...data.payment]
    return (
        <BaseLayout>
            <div className='pt-2'>
                <GridContainer>
                    <FinishLeftSection>
                        <ContentFinishWrapper>
                            <HeadLeftSection>
                                <div>
                                    <HeadLeftTitle>
                                        Thank you
                                    </HeadLeftTitle>
                                    <TitleBorder />
                                </div>
                            </HeadLeftSection>
                            <div style={{ marginBottom: '2rem' }}>
                                <p className='fs-14 bold black'>Order ID: {orderId}</p>
                                <p className='ma-0 fs-14 gray'>Your order will be delivered today with {newShipment[0].title}</p>
                            </div>
                            <BackButton onClick={handleBack}>
                                <HiArrowLeft />
                                Go to homepage
                            </BackButton>
                        </ContentFinishWrapper>
                    </FinishLeftSection>
                    <SummarySection>
                        <SummaryComponent
                            shipment={newShipment}
                            payment={newPayment}
                            dropShip={data?.dropShip}
                            cost={data?.cost}
                            fee={data?.fee}
                            total={data?.total}
                        />
                    </SummarySection>
                </GridContainer>
            </div>
        </BaseLayout>
    )
}

FinishComponent.propTypes = {
    data: PropTypes.any,
    orderId: PropTypes.any
}

export default FinishComponent