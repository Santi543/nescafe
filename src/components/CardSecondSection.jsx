import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    width: 450px;
    height: auto;
    box-shadow: 100px;
    padding: 2.5rem 2rem 2rem;
    position: relative;
    justify-content: center;
`

const New = styled(Box)`
    background-color: #876C43;
    position: absolute;
    color:#fff;
    font-size: 10px;
    width: 35px;
    text-align: center;
    left: 0px;
    top: 7px;
    font-weight: lighter;
    padding: 2px;
`

const ButtonCart = styled(Box)`
    padding: 15px;
    border-radius: 30px;
    background-color: #3d8705;
    color: #fff;
    letter-spacing: 1px;
    &:hover{
        transition: .3s ease-in-out;
        background-color: #2f6804;
        cursor: pointer;
    }
    margin-top: 10px;
`
const IntensityContainer = styled(Box)`
    color: #876c43;
    font-size: .875rem;
    font-weight: 500;
    letter-spacing: .0625rem;
    line-height: 1.2;
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    justify-content: 'center';
    align-items: 'center';
`

const IntensityHigh = styled.span`
    background-color: #876c43;
    display: inline-block;
    height: 0.625rem;
    margin-right: 0.125rem;
    opacity: 1;
    width: 0.125rem;
`
const IntensityLow = styled.span`
    background-color: #876c43;
    display: inline-block;
    height: 0.625rem;
    margin-right: 0.125rem;
    opacity: .25;
    width: 0.125rem;`

const CardSecondSection = () => {
    return (
        <Container>
            <New>
                NEW
            </New>

            <p style={{ color: '#6f6f70', marginBottom: 0, marginTop: 0, fontWeight: 'bold' }}>ORIGINAL</p>
            <p style={{ fontWeight: 'lighter', color: '#6f6f70', marginBottom: 0, marginTop: '2px' }}>MASTER ORIGINS</p>

            <h1 style={{ letterSpacing: '.25rem', marginBottom: '1rem', fontSize: '2.5rem', fontWeight: '700' }}>ETHIOPIA</h1>
            <p style={{ color: '#6f6f70', letterSpacing: '.0625rem', fontSize: '1.25rem', fontWeight: '400', marginTop: 0, marginBottom: '1rem'}}>Cafe floral y exuberante</p>
            <IntensityContainer style={{margin: '0.5rem 0'}}>
            De intensidad
            <IntensityHigh style={{marginLeft: '10px'}}/>
            <IntensityHigh/>
            <IntensityHigh/>
            <IntensityHigh style={{marginRight: '10px'}}/>
            4
            <IntensityLow style={{marginLeft: '10px'}}/>
            <IntensityLow/>
            <IntensityLow/>
            <IntensityLow/>
            <IntensityLow/>
            <IntensityLow/>
            <IntensityLow/>
            <IntensityLow/>
            <IntensityLow/>
            <IntensityLow/>
            </IntensityContainer>
            <h4 style={{ color: '#3d8705', letterSpacing: '.1875rem', fontSize: '1.5rem', fontWeight: '700', marginTop: '45px', marginBottom: '0.5rem'}}>$224,00</h4>
            <ButtonCart>
                AÑADIR AL CARRITO
            </ButtonCart>
        </Container>
    )
}

export default CardSecondSection