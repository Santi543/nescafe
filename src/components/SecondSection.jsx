import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import CardSecondSection from './CardSecondSection'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    background-image: url(https://www.nespresso.com/shared_res/agility/n-components/pdp/sku-main-info/background/background_L.jpg);
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 50px 20px 50px 20px;
`

const SeeCoffees = styled.h5`
    font-size: .875rem;
    font-weight: 700;
    letter-spacing: .125rem;
    left: 250px;
    text-decoration: underline;
    cursor: pointer;
    &:hover{
        line-height: 1.2;
    }
`
const Warning = styled.p`
    left: 250px;
    bottom: 50px;
    font-size: .875rem;
    font-weight: 500;
    letter-spacing: .0625rem;
    line-height: 1.5;
`

const SecondSection = () => {
  return (
    <Container>
        <Box sx={{marginRight: '40px', marginLeft: '40px'}}>
        <SeeCoffees>VER TODOS LOS CAFES</SeeCoffees>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <img src="./section2.png" style={{width: '524px', height: 'auto', margin: '0 3.125rem'}}/>
        <CardSecondSection/>
        </Box>
        <Warning>*Imagen a modo ilustrativo.</Warning>
        </Box>
    </Container>
  )
}

export default SecondSection