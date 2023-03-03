import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { SlArrowDown } from 'react-icons/sl'

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-top: 1px solid rgba(23,23,26,.102);
    border-bottom: 1px solid rgba(23,23,26,.102);
    cursor: pointer;
    justify-content: flex-start;
    padding: 1rem 0;
    text-align: left;
    user-select: none;
    width: 100%;
`
const Title = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: .0625rem;
    margin-bottom: 0px;
`
const ContainerP = styled(Box)`
    padding: 20px;
`

const Accordion = () => {
    const [accordion, setAccordion] = useState(false)
    return (
        <>
            <Container onClick={() =>{setAccordion(!accordion)}}>
                <Title>Ingredientes y alérgenos</Title>
                <SlArrowDown style={{ marginLeft: '210px', transform: 'rotate(0deg)', transition: 'transform .2s ease-in-out' }} size={18} />
            </Container>
            {accordion ?
                <ContainerP>
                    <p>10 cápsulas de café Ethiopia, de tueste natural, con aroma floral, y otros aromas naturales para Máquinas de café Nespresso. Envasado al vacío.</p>
                    <p>Composición: 10 cápsulas de café tostado y molido</p>
                    <p>Peso Neto (10 Cápsulas): 56 gr.</p>
                    <p>Libre de Gluten. Sin T.A.C.C</p>
                </ContainerP> : null}
        </>
    )
}

export default Accordion