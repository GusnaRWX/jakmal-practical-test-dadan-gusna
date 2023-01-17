import React, { useState } from 'react'
import { DeliveryComponent } from '../components'
import { getStorage } from '../utils/storage'

function DeliveryContainer () {
    const data = {
        email: getStorage('email'),
        phone: getStorage('phone'),
        address: getStorage('address'),
        dropName: getStorage('dropName'),
        dropPhone: getStorage('dropPhone')
    }

    const [isDisable, setDisable] = useState(true)
    const [dropship, setDropship] = useState(false)
    const cost = 500000
    const fee = 5900
    const total = dropship ? cost + fee : cost

    const changeStatus = () => {
        setDisable(!isDisable)
        setDropship(!dropship)
    }

    return (
        <DeliveryComponent
            data={data}
            changeStatus={changeStatus}
            isDisable={isDisable}
            dropShip={dropship}
            cost={cost}
            fee={fee}
            total={total}
        />
    )
}

export default DeliveryContainer