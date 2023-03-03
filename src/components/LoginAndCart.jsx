import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { AiFillShopping } from 'react-icons/ai'

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: black;
    color: white;
    border: 1px solid white;
    padding: 10px;
    border-radius: 3px;
    margin-right: 18px;
`


const LoginAndCart = () => {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <Container>
                <FaUser size={21} />
                <Typography sx={{ marginLeft: '5px', fontSize: '14px' }}>INICIÁ SESIÓN / REGISTRATE</Typography>
            </Container>
            <Container>
                <AiFillShopping size={21} />
                <Typography sx={{ marginLeft: '5px', fontSize: '14px' }}>TU CARRITO ({counter}) </Typography>
            </Container>
        </>
    )
}

export default LoginAndCart