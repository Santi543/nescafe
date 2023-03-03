import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

const DivTitle = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const FirstContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

const SecondContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    align-items: center;
    text-align: center;
    background-color: #f9f9f9;
    padding: 10px;
    height: auto;
`

const SectionCapsulas = () => {
    return (
        <>
            <DivTitle>
                <h1 style={{fontSize: '20px', letterSpacing: '4px', lineHeight: '28px', fontWeight: 'lighter', padding: '20px', margin: '0px'}}>CAPSULAS DE CAFE <strong style={{fontWeight: '700'}}>NESPRESSO</strong></h1>
            </DivTitle>
            <FirstContainer>
            <img src='./banner.png'/>
            </FirstContainer>
            <SecondContainer>
                <p style={{color: '#8f7247', fontWeight: 'unset', marginBottom: 0, marginTop: 0, fontSize: '.75rem'}}><strong>3 CUOTAS SIN INTERES</strong> EN PEDIDOS DESDE $18.000
                <br></br>CONOCE LOS TIEMPOS DE ENTREGA EN TU ZONA HACIENDO <strong>CLICK ACA</strong></p>
            </SecondContainer>
        </>
    )
}

export default SectionCapsulas