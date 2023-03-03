import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
import { MdOutlineCoffee } from 'react-icons/md'
import { BsFlower3 } from 'react-icons/bs'
import { GiGrapes } from 'react-icons/gi'
import Accordion from './Accordion'

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-right: 70px;
    margin-left: 70px;
    @media (max-width: 1345px) {
        margin-left: 0px;
        margin-right: 0px;
    }
`
const AromaticDiv = styled(Box)`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 10px;
    max-width: 27.5rem;
`
const ImageDiv = styled(Box)`
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 872px;
`
const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: .25rem;
    line-height: 1.3;
    text-transform: uppercase;
    white-space: nowrap;
`
const Description = styled.p`
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: .0625rem;
    line-height: 1.5;
`
const DivEspresso = styled(Box)`
    display: flex;
    flex-direction: column;
    font-size: .75rem;
    font-weight: 500;
    letter-spacing: .0625rem;
    line-height: 1.5;
`
const CellTableP = styled.p`
    width: 6.875rem;
    white-space: nowrap;
    display: table-cell;
    padding-right: 1rem;
    vertical-align: middle;
    font-size: .875rem;
    font-weight: 700;
    letter-spacing: .125rem;
    line-height: 1.3;
    text-transform: uppercase;
    margin-bottom: 0px;
`
const SpanBarSelected = styled.span`
    background: #17171a;
    border-right: 0.125rem solid #fff;
    display: table-cell;
    height: 0.1875rem;
    vertical-align: middle;
    width: 60px;
`
const SpanBarUnselected = styled.span`
    background: #c5c5c5;
    border-right: 0.125rem solid #fff;
    display: table-cell;
    height: 0.1875rem;
    vertical-align: middle;
    width: 60px;
`
const SpanContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 7px;
    padding-bottom: 7px;
`
const IconContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
`
const FlexRowBox = styled(Box)`
    display: flex;
    flex-direction: row;
`

const AromaticSection = () => {
    return (
        <Container>
            <AromaticDiv>
                <Title>PERFIL AROMATICO</Title>
                <Description>El tradicional proceso seco añade un sabor único, rico e increíblemente aromático. En Master Origins Ethiopia con Arabica de proceso en seco encontrarás desde reconfortantes aromas de frutas maduras hasta delicadas notas de flor de naranja, mermelada afrutada.</Description>
                <Description>Esta Arabica etíope en su máximo esplendor, con aromas decadentes con notas de flor de azahar y rica fruta.</Description>
                <Description>De proceso en seco requiere el secar bajo el sol algunas de las cerezas de café. Este proceso de continuamente remover los granos asegura un secado uniforme y requiere una gran atención. Los caficultores etíopes han usado este método por más tiempo que cualquier otra persona.</Description>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', paddingBottom: '30px', borderTop: '1px solid rgba(23,23,26,.102)', borderBottom: '1px solid rgba(23,23,26,.102)', width: '100%' }}>
                    <Box sx={{ width: '150px', fontSize: ".875rem", fontWeight: '700', letterSpacing: '.125rem', lineHeight: '1.3' }}>
                        SUGERENCIA DE DEGUSTACION
                    </Box>
                    <IconContainer>
                        <MdOutlineCoffee size={22} />
                        <DivEspresso>
                            Espresso
                            <br />
                            40 ML
                        </DivEspresso>
                    </IconContainer>
                    <IconContainer>
                        <MdOutlineCoffee size={30} />
                        <DivEspresso>
                            Lungo
                            <br />
                            110 ML
                        </DivEspresso>
                    </IconContainer>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', paddingBottom: '30px', borderBottom: '1px solid rgba(23,23,26,.102)', width: '100%' }}>
                    <Box sx={{ width: '150px', fontSize: ".875rem", fontWeight: '700', letterSpacing: '.125rem', lineHeight: '1.3' }}>
                        NOTAS
                    </Box>
                    <IconContainer>
                        <BsFlower3 size={40} />
                        <DivEspresso>
                            Floral
                            <br />
                        </DivEspresso>
                    </IconContainer>
                    <IconContainer>
                        <GiGrapes size={40} />
                        <DivEspresso>
                            Frutal
                            <br />
                        </DivEspresso>
                    </IconContainer>
                </Box>
                <Box sx={{paddingTop: '20px', paddingBottom: '20px'}}>
                <SpanContainer>
                    <CellTableP>Amargor</CellTableP>
                    <FlexRowBox>
                        <SpanBarSelected/>
                        <SpanBarSelected/>
                        <SpanBarUnselected/>
                        <SpanBarUnselected/>
                        <SpanBarUnselected/>
                    </FlexRowBox>
                </SpanContainer>
                <SpanContainer>
                    <CellTableP>Acidez</CellTableP>
                    <FlexRowBox>
                        <SpanBarSelected/>
                        <SpanBarSelected/>
                        <SpanBarSelected/>
                        <SpanBarSelected/>
                        <SpanBarUnselected/>
                    </FlexRowBox>
                </SpanContainer>
                <SpanContainer>
                    <CellTableP>Tueste</CellTableP>
                    <FlexRowBox>
                        <SpanBarSelected/>
                        <SpanBarSelected/>
                        <SpanBarUnselected/>
                        <SpanBarUnselected/>
                        <SpanBarUnselected/>
                    </FlexRowBox>
                </SpanContainer>
                <SpanContainer>
                    <CellTableP>Cuerpo</CellTableP>
                    <FlexRowBox>
                        <SpanBarSelected/>
                        <SpanBarSelected/>
                        <SpanBarUnselected/>
                        <SpanBarUnselected/>
                        <SpanBarUnselected/>
                    </FlexRowBox>
                </SpanContainer>
                </Box>
                <Accordion/>
            </AromaticDiv>
            <ImageDiv>
                <img src="./origins.png" style={{ width: '680px', marginTop: '50px', marginLeft: '1.25rem' }} />
            </ImageDiv>
        </Container>
    )
}

export default AromaticSection