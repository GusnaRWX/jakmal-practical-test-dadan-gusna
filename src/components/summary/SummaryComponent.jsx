import React from 'react'
import {
    SummaryContainer,
    SummaryTitle,
    SummaryHeaderWrapper,
    SummaryTotalWrapper,
    DeliveryWrapper
} from './SummaryStyled'
import { Flex, Button } from '../shared'
import { useLocation, useNavigate } from 'react-router-dom'
import { getFormatRupiah } from '../../utils/helpers'
import PropTypes from 'prop-types'


function SummaryComponent ({
    shipment,
    payment,
    dropShip,
    cost,
    fee,
    total,
    values
}) {
    const location = useLocation()
    const pathname = location.pathname
    const navigation = useNavigate()
    const handleChangePage = () => {
        if (pathname === '/') {
            navigation('/payment', { state: { dropship: dropShip, cost: cost, total: total, fee: fee } })
        } else if (pathname === '/payment') {
            navigation('/finish', { state: { shipment: [...shipment], payment: [...payment], dropship: dropShip, cost: cost, total: total, fee: fee } })
        }
    }
    const newTotal = typeof shipment !== 'undefined' ? total + shipment[0]?.price : total
    const dropshipDelivery = () => {
        if (pathname === '/') {
            if (dropShip === false && values.dropName === '' || values.dropPhone === '') {
                return false
            } else {
                return true
            }
        }
    }
        ;
    return (
        <SummaryContainer>
            <SummaryHeaderWrapper>
                <SummaryTitle>Summary</SummaryTitle>
                <p className='ma-0 fs-14 gray'>10 items purchased</p>
                {
                    pathname !== '/' && (
                        <>
                            {
                                typeof shipment[0]?.title !== 'undefined' && (
                                    <DeliveryWrapper>
                                        <p className='ma-0 fs-14'>Delivery Estimation</p>
                                        <p className='ma-0 fs-14 bold green'>{shipment[0]?.day} By {shipment[0]?.title}</p>
                                    </DeliveryWrapper>
                                )
                            }
                            {
                                typeof payment[0]?.title !== 'undefined' && (
                                    <DeliveryWrapper>
                                        <p className='ma-0 fs-14'>Payment Method</p>
                                        <p className='ma-0 fs-14 bold green'>{payment[0]?.title}</p>
                                    </DeliveryWrapper>
                                )
                            }
                        </>
                    )
                }
            </SummaryHeaderWrapper>
            <SummaryTotalWrapper>
                <Flex
                    direction='row'
                    align='center'
                    justify='space-between'
                >
                    <p className='ma-0 fs-14 gray'>Cost of goods</p>
                    <p className='ma-0 fs-14 bold black'>{getFormatRupiah(cost.toString() || '500000')}</p>
                </Flex>
                {
                    dropShip && (
                        <Flex
                            direction='row'
                            align='center'
                            justify='space-between'
                        >
                            <p className='ma-0 fs-14 gray'>Dropshipping Fee</p>
                            <p className='ma-0 fs-14 bold black'>{getFormatRupiah(fee.toString() || '5900')}</p>
                        </Flex>
                    )
                }
                {
                    pathname !== '/' && (
                        <>
                            {
                                typeof shipment[0]?.price !== 'undefined' && (
                                    <Flex
                                        direction='row'
                                        align='center'
                                        justify='space-between'
                                    >
                                        <p className='ma-0 fs-14 gray'>{shipment[0]?.title} Shipment</p>
                                        <p className='ma-0 fs-14 bold black'>{getFormatRupiah(shipment[0]?.price.toString())}</p>
                                    </Flex>
                                )
                            }
                        </>
                    )
                }
                <Flex
                    direction='row'
                    align='center'
                    justify='space-between'
                    style={{ marginTop: '.5rem' }}
                >
                    <p className='fs-bold-20 primary'>Total</p>
                    <p className='fs-bold-20 primary'>{getFormatRupiah(newTotal.toString()) || getFormatRupiah(total.toString())}</p>
                </Flex>
                {
                    pathname === '/' && (
                        <Button
                            variant={values.email === '' || values.phone === '' || values.address === '' ? 'disabled' : (dropshipDelivery() === false ? 'disabled' : 'primary')}
                            onClick={handleChangePage}
                        >
                            <span className='text-center'>Continue to Payment</span>
                        </Button>
                    )
                }
                {
                    pathname === '/payment' && (
                        <Button
                            variant={shipment[0] === '' || payment[0] === '' ? 'disabled' : 'primary'}
                            onClick={handleChangePage}
                        >
                            <span className='text-center'>Continue to Payment</span>
                        </Button>
                    )
                }
            </SummaryTotalWrapper>
        </SummaryContainer>
    )
}

SummaryComponent.propTypes = {
    dropShip: PropTypes.bool,
    cost: PropTypes.number,
    fee: PropTypes.number,
    total: PropTypes.any
}


export default SummaryComponent