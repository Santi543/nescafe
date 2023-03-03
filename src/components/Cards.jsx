import { Box, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 200px;
    height: 400px;
`

const Cards = () => {
  return (
    <Container>
        <Typography>Nombre</Typography>
        <img />
        <Typography>Precio</Typography>
    </Container>
  )
}

export default Cards