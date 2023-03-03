import React from 'react'
import { Box } from '@mui/material'
import styled from '@emotion/styled'
import LoginAndCart from './LoginAndCart'
import SubNavBar from './SubNavBar'

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    background-color: black;
    width: 100%;
    height: 80px;
    justify-content: space-around;
    position: sticky;
    top: 0px;
    z-index: 10;
`

const NavBar = () => {
    return (
        <>
            <Container>
                <img src='./logo-white.svg' style={{ width: '170px', height: '70px', padding: '10px' }} />
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <LoginAndCart />
                </Box>
            </Container>
            <SubNavBar />
        </>
    )
}

export default NavBar