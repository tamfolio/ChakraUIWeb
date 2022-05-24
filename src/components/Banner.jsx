import React from 'react'
import { Box, Image,Button } from '@chakra-ui/react'
import brandlogo from '../assets/brand-logo.svg'

function Banner() {
  return (
    <>
        <header>
            <Box d='flex' align-items='center' justifyContent='space-between' mx={6}>
                <Box><Image boxSize='98px' src={brandlogo} alt='brand'/></Box>
                <Box></Box>
            </Box>
        </header>
    </>
  )
}

export default Banner