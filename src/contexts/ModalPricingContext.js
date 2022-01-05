import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const ModalPricingContext = createContext()

export const ModalPricing
Provider = ({ children }) => {
    const [tokenMeet, setTokenMeet] = useState(null)
    const [meet, setMeet] = useState(false)
    return (
        <ModalPricingContext.Provider value={{ tokenMeet, setTokenMeet, meet, setMeet }}>
            {children}
        </ModalPricingContext.Provider>
    )
}
ModalPricing
Provider.propTypes = {
    children: PropTypes.node,
}
ModalPricing
Provider.defaultProps = {
    children: null,
}

export const TokenMeetConsumer = ModalPricingContext.Consumer
export const useTokenMeet = () => useContext(ModalPricingContext)
export default ModalPricingContext
