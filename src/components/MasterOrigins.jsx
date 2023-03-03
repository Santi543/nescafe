import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import CardMasterOrigin from './CardMasterOrigin'

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #faf9f8;
`
const CarouselDiv = styled(Box)`
  display: flex;
  flex-direction: row;
`
const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: .25rem;
    line-height: 1.3;
    text-transform: uppercase;
`

const MasterOrigins = () => {
  return (
    <Container>
      <Title>DESCUBRI LA GAMA MASTER ORIGINS</Title>
      <CarouselDiv>
        <CardMasterOrigin />
      </CarouselDiv>
    </Container>
  )
}

export default MasterOrigins