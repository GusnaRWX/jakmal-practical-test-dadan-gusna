import React, { useState, useEffect } from 'react'
import { PaymentComponent } from '../components'
import { useLocation } from 'react-router-dom'
import { setStorages, getStorage } from '../utils/storage'

function PaymentContainer () {
    const location = useLocation()
    const [selectShipment, setSelectShipment] = useState([])
    const [selectPayment, setSelectPayment] = useState([])
    const dataShipment = JSON.parse(getStorage('shipment'))
    const dataPayment = JSON.parse(getStorage('payment'))

    const shipmentItem = [
        {
            id: 1,
            title: 'GO-SEND',
            price: 15000,
            day: 'Today'
        },
        {
            id: 2,
            title: 'JNE',
            price: 9000,
            day: '2 days'
        },
        {
            id: 3,
            title: 'Personal Courier',
            price: 29000,
            day: '1 days'
        }
    ]
    const paymentItem = [
        {
            id: 1,
            title: 'e-wallet',
            price: 1500000
        },
        {
            id: 2,
            title: 'Bank Transfer'
        },
        {
            id: 3,
            title: 'Virtual Account'
        }
    ]

    const handleClickItems = (item, type) => {
        if (type === 'shipment') {
            const found = selectShipment.filter((el) => el?.id === item?.id)

            if (found.length === 0) {
                setSelectShipment([item])
                setStorages([
                    { name: 'shipment', value: JSON.stringify(item) }
                ])
            }
        } else {
            const found = selectPayment.filter((el) => el?.id === item?.id)
            if (found.length === 0) {
                if (found.length === 0) {
                    setSelectPayment([item])
                    setStorages([
                        { name: 'payment', value: JSON.stringify(item) }
                    ])
                }
            }
        }
    }
    const isActive = (item, type) => {
        if (type == 'shipment') {
            const found = selectShipment.filter((el) => el.id === item.id)

            if (found.length === 0) {
                return false
            } else {
                return true
            }
        } else {
            const found = selectPayment.filter((el) => el.id === item.id)

            if (found.length === 0) {
                return false
            } else {
                return true
            }
        }
    }

    useEffect(() => {
        handleClickItems(dataPayment !== null ? dataPayment : '', 'payment')
        handleClickItems(dataShipment !== null ? dataShipment : '', 'shipment')
        isActive(dataPayment !== null ? dataPayment : '', 'payment')
        isActive(dataShipment !== null ? dataShipment : '', 'shipment')
    }, [])
    return (
        <PaymentComponent
            summary={location?.state}
            shipmentItem={shipmentItem}
            paymentItem={paymentItem}
            handleClickItems={handleClickItems}
            isActive={isActive}
            selectPayment={selectPayment}
            selectShipment={selectShipment}
        />
    )
}

export default PaymentContainer