import React from 'react';
import styled from 'styled-components';
import AnimatedShap from './AnimatedShap';
const Container = styled.div`
display:flex;
@media only screen and (max-width: 480px) {
  flex-direction:column;
  padding:30px;
 }
`;
const Left = styled.div`
width:50%;
@media only screen and (max-width: 480px) {
 display:none;
 }
`;
const Image =styled.img`
width:100%;
`
const Right = styled.div`
width:50%;
display:flex;
justify-content:center;
flex-direction:column;
@media only screen and (max-width: 480px) {
width:100%;
  }
`;
const Title= styled.span`
font-size:70px;
@media only screen and (max-width: 480px) {
 font-size:40px;
  }
`
const SubTitle= styled.span`
font-size: 20px;
font-style: italic;
color:#333;
margin:10px 0px;
`
const Desc= styled.p`
font-size:20px;
color:#666;
margin:10px 0px;
`
const Button= styled.button`
background-color:darkblue;
border-radius:12px;
padding:10px;
font-size:20px;
font-wiegth:bold;
color:white;
border:none;
width:150px;
cursor:pointer;
&:hover{
    background-color:lightblue; 
    color:#666;
}
`

const Features = () => {
  return (
    <>
    <Container>
        <Left><Image src='https://storage.googleapis.com/imagina-static/images/site/features/event/inform/app/app/fr/web/visuel_event_1.webp'/></Left>
        <Right>
            <Title><b>Good </b> Design<br/> <b>Good </b>Business</Title>
        <SubTitle>We know that good design means good Business</SubTitle>
        <Desc>Business is Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate perspiciatis, dolores officiis minima voluptas placeat accusantium voluptatem maxime ea quibusdam dicta quis, consequuntur atque harum soluta! Tempora, tenetur inventore?</Desc>
        <Desc>Design is consectetur adipisicing elit. consequuntur atque harum soluta! Tempora, tenetur inventore?</Desc>
        <Button>Learn More</Button>
        </Right>
        <AnimatedShap/>

    </Container>
      
    </>
  )
}

export default Features
