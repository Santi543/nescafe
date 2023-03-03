import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    background-color: #faf9f8;
    width: 100%;
    text-align: center;
    justify-content: center;
    padding: 50px;
`
const Description = styled.p`
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: .0625rem;
    line-height: 1.5;
    white-space: inherit;
    padding: 20px;
    margin: 0px;
`

const EthiopiaSection = () => {
  return (
    <Container>
      <div>
        <img src="./ethiopia_black.svg" style={{ width: '600px', height: '100px', marginBottom: '1rem', marginTop: '30px' }} />
        <p style={{ letterSpacing: '.1875rem', fontSize: '1.5rem', fontWeight: '300',  }}>FLORAL Y BRILLANTE</p>
      <Description>Master Origin Ethiopia con Arabica procesada en seco es el café que acunamos en el sol, después de ser seleccionado y despulpado cuidadosamente lo dejamos secar en patios elevados “camas africanas” dándole cuidados constantes para asegurar la calidad, brindando una taza aromática y de textura ligera.</Description>
      </div>
    </Container>

  )
}

export default EthiopiaSection