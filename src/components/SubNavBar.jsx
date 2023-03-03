import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'
import {GiCoffeePot} from 'react-icons/gi'
import {MdCoffeeMaker, MdOutlineCoffee} from 'react-icons/md'
import {FaConciergeBell, FaMapMarkerAlt, FaUserTie, FaTruck} from 'react-icons/fa'
import {TbArrowsRandom} from 'react-icons/tb'
import {RiQuestionnaireFill} from 'react-icons/ri'
import { useState } from 'react'
import {ArrayDeploy} from '../data/Array'

const Container = styled(Box)`
    display: flex;
    flex-direction: row;
    background-color: #222222;
    align-items: center;
    justify-content: center;
`

const SubBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 110px;
    border-left: 0.5px solid #494949;
    border-right: 0.5px solid #494949;
`

const Title = styled(Typography)`
    color:#d5d5d5;
    font-size: 11px ;
    font-weight: bold;
    margin-top: 4px;
`
const Deploy = styled(Box)`
    display: flex;
    flex-direction: row;
`
const DivFromDeploy = styled(Box)`
    display: 'flex';
    flex-direction: 'column';
    border-left: '1px solid gray';
    border-right: '1px solid gray';
`

const SubNavBar = () => {
    const [div, setDiv] = useState(false)
    
  return (
    <>
    <Container>
        <SubBox style={{borderLeft: '0px'}}
                /* onMouseEnter={setDiv(true)}
                onMouseLeave={setDiv(false)} */>
            <GiCoffeePot style={{width: '30px', height: '25px', color: 'white'}}/>
            <Title>Café</Title>
        </SubBox>
        <SubBox >
            <MdCoffeeMaker style={{width: '30px', height: '25px', color: 'white'}}/>
            <Title>Máquinas</Title>
        </SubBox>
        <SubBox >
            <MdOutlineCoffee style={{width: '30px', height: '25px', color: 'white'}}/>
            <Title>Accesorios</Title>
        </SubBox>
        <SubBox >
            <FaConciergeBell style={{width: '30px', height: '25px', color: 'white'}}/>
            <Title>Servicio</Title>
        </SubBox>
        <SubBox >
            <FaMapMarkerAlt style={{width: '30px', height: '25px', color: 'white'}}/>
            <Title>Encontranos</Title>
        </SubBox>
        <SubBox >
            <TbArrowsRandom style={{width: '30px', height: '25px', color: 'white'}}/>
            <Title>Reciclaje</Title>
        </SubBox>
        <SubBox >
            <RiQuestionnaireFill style={{width: '30px', height: '25px', color: 'white'}}/>
            <Title>Ayuda</Title>
        </SubBox>
        <SubBox>
            <FaUserTie style={{width: '30px', height: '25px', color: 'white'}}/>
            <Title>Professional</Title>
        </SubBox>
        <SubBox style={{borderRight: '0px'}}>
            <FaTruck style={{width: '30px', height: '25px', color: 'white'}}/>
            <Title>Segui tu pedido</Title>
        </SubBox>
    </Container>
    
    {/* {ArrayDeploy?.map((item) =>{
        return (div ? <Deploy>
                <DivFromDeploy>
                    <Typography>{item.text}</Typography>
                    <img src={item.image}/>
                </DivFromDeploy>
              </Deploy> : false)
        
    })} */}
    </>
  )
}

export default SubNavBar