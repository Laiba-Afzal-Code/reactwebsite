import React from "react";
import styled from "styled-components";
import AnimatedShap from "./AnimatedShap";
const Container = styled.div`
  height: calc(100vh - 60px);
  padding: 20px;
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction:column;
    height:auto; 
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  @media only screen and (max-width: 480px) {
   width:100%;
text-align:center;
  }
`;
const Title = styled.h1`
width:60%;
font-size:60px;
margin:0;
@media only screen and (max-width: 480px) {
  font-size:40px;
width:100%; 
}
`;
const Desc = styled.p`
  font-size: 20px;
  width: 60%;
  @media only screen and (max-width: 480px) {
    width:100%;
   }
`;
const Info = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width:100%;
    flex-direction:column;
   }
`;
const Button = styled.button`
background-color: darkblue;
color:white;
border-radius:10px;
padding:10px;
border-riduse:10px
padding:10px;
font-size:17px;
font-width:600;
letter-spacing:1px;
border:none;
@media only screen and (max-width: 480px) {
  margin-bottom:20px;
 }

&:hover{
  background-color:lightblue; 
  color:black;
}
`;
const Contact = styled.div`
display:flex;
flex-direction:column;
align-items:center
justify-content:space-between
`;
const Phone = styled.span`
  color: #f0667d;
  font-weight: bold;
`;
const InfoText = styled.span`
margin-top:5px;
color:gray;
@media only screen and (max-width: 480px) {
  width:100%;
 }
`;
const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px) {
    display:none;
  }
`;
const Image = styled.img`
width:100%;
height:100%;

`

const Intro = () => {
  return (
    <>
      <Container>
        <Left>
          <Title>Adventure in Creative age</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            iure placeat molestias quos asperiores distinctio repudiandae et,
            odio tenetur nulla amet odit harum, incidunt aliquam ipsum
            consectetur provident tempore ex!
          </Desc>
          <Info>
            <Button>START A PROJECT</Button>
            <Contact>
              <Phone>Call Us (+92) 308-4590289</Phone>
              <InfoText>For any Question or concern </InfoText>
            </Contact>
          </Info>
        </Left>
        <Right><Image src="https://img.freepik.com/premium-photo/girl-is-talking-phone-girl-is-happy-with-text-message-online-news_335477-346.jpg"></Image></Right>
     <AnimatedShap/>
      </Container>
    </>
  );
};

export default Intro;
