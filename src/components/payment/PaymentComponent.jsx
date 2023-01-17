import React from 'react'
import { BaseLayout, ButtonItem } from '../shared'
import { HiArrowLeft } from 'react-icons/hi'
import SummaryComponent from '../summary/SummaryComponent'
import {
    BackButton,
    GridContainer,
    SummarySection,
    PaymentLeftSection,
    PaymentContainer,
    HeadLeftSection,
    HeadLeftTitle,
    TitleBorder,
    PaymentWrapper,
    ShipmentWrapper

} from '../SharedStyled'
import PropTypes from 'prop-types'
import { getFormatRupiah } from '../../utils/helpers'
import { useNavigate } from 'react-router-dom'

function PaymentComponent ({
    summary,
    shipmentItem,
    paymentItem,
    handleClickItems,
    isActive,
    selectPayment,
    selectShipment
}) {
    const navigate = useNavigate()
    return (
        <BaseLayout>
            <BackButton>
                <HiArrowLeft onClick={() => { navigate('/') }} />
                Back to payment
            </BackButton>
            <div className='pt-2'>
                <GridContainer>
                    <PaymentLeftSection>
                        <PaymentContainer>
                            <HeadLeftSection>
                                <div>
                                    <HeadLeftTitle>
                                        Shipment
                                    </HeadLeftTitle>
                                    <TitleBorder />
                                </div>
                            </HeadLeftSection>
                            <PaymentWrapper>
                                {
                                    shipmentItem.map((item, index) => (
                                        <ButtonItem
                                            key={index}
                                            variant={`${isActive(item, 'shipment') ? 'checked' : 'unchecked'}`}
                                            label={item.title}
                                            price={getFormatRupiah(item.price.toString())}
                                            type='withPrice'
                                            checked={isActive(item, 'shipment')}
                                            onClick={() => handleClickItems(item, 'shipment')}
                                        />
                                    ))
                                }
                            </PaymentWrapper>
                        </PaymentContainer>
                        <PaymentContainer>
                            <HeadLeftSection>
                                <div>
                                    <HeadLeftTitle>
                                        Payment
                                    </HeadLeftTitle>
                                    <TitleBorder />
                                </div>
                            </HeadLeftSection>
                            <ShipmentWrapper>
                                {
                                    paymentItem.map((item, index) => (
                                        <ButtonItem
                                            key={index}
                                            variant={`${isActive(item, 'payment') ? 'checked' : 'unchecked'}`}
                                            label={item.title}
                                            type={typeof item.price !== 'undefined' ? 'withPrice' : 'noPrice'}
                                            checked={isActive(item, 'payment')}
                                            price={typeof item.price !== 'undefined' ? getFormatRupiah(item.price.toString()) : ''}
                                            onClick={() => handleClickItems(item, 'payment')}
                                        />
                                    ))
                                }
                            </ShipmentWrapper>
                        </PaymentContainer>
                    </PaymentLeftSection>
                    <SummarySection>
                        <SummaryComponent
                            shipment={selectShipment}
                            payment={selectPayment}
                            dropShip={summary?.dropship}
                            cost={summary?.cost}
                            fee={summary.fee}
                            total={summary?.total}
                        />
                    </SummarySection>
                </GridContainer>
            </div>
        </BaseLayout>
    )
}

PaymentComponent.propTypes = {
    summary: PropTypes.object,
    shipmentItem: PropTypes.array,
    paymentItem: PropTypes.array,
    handleClickItems: PropTypes.func,
    isActive: PropTypes.func,
    selectPayment: PropTypes.any,
    selectShipment: PropTypes.any
}

export default PaymentComponent