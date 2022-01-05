import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const TokenMeetContext = createContext()

export const TokenMeetProvider = ({ children }) => {
    const [tokenMeet, setTokenMeet] = useState(null)
    const [meet, setMeet] = useState(false)
    return (
        <TokenMeetContext.Provider value={{ tokenMeet, setTokenMeet, meet, setMeet }}>
            {children}
        </TokenMeetContext.Provider>
    )
}
TokenMeetProvider.propTypes = {
    children: PropTypes.node,
}
TokenMeetProvider.defaultProps = {
    children: null,
}

export const TokenMeetConsumer = TokenMeetContext.Consumer
export const useTokenMeet = () => useContext(TokenMeetContext)
export default TokenMeetContext
