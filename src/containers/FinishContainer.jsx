import React from 'react'
import { FinishComponent } from '../components'
import { useLocation } from 'react-router-dom'
import { randomCode } from '../utils/helpers'

function FinishContainer () {
    const location = useLocation()
    const orderId = randomCode()
    return (
        <FinishComponent
            data={location?.state}
            orderId={orderId}
        />
    )
}

export default FinishContainer