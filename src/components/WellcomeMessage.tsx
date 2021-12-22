import { Box } from '@material-ui/core'
import React from 'react'
interface WellcomeMessageProps {
    position: string
    country?: string
}
const WellcomeMessage = ({position, country='viet nam'}:WellcomeMessageProps) => {
    return (
        <Box mb={1}>
            wellcom {position} in {country}
        </Box>
    )
}

export default WellcomeMessage
