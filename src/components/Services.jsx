import React, { useState } from "react";
import styled from "styled-components";
import MinCard from "./MinCard";
const Conatiner = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction:column;
    width:100%;
    height:100%;
    }
`;
const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px) {
    display:none;
    }
`;
const Image = styled.img`
  display: ${(props) => props.open && "none"};
  width: 90%;
`;
const Video = styled.iframe`
  display: ${(props) => !props.open && "none"};
  height: 600;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 12px;
  margin: auto;'  @media only screen and (max-width: 480px) {
    width:100%;
    }
`;
const Right = styled.div`
  width: 60%;
  @media only screen and (max-width: 480px) {
    width:100%;
    }
`;
const Warpper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding:20px;
    }
`;
const Title = styled.h1`
  font-size: 40px;
  @media only screen and (max-width: 480px) {
   font-size:40px;
   margin:5px;
    }
`;
const Desc = styled.p`
  font-size: 20px;
  color: #555;
  margin-top: 10px;
  @media only screen and (max-width: 480px) {
    font-size:18px;
    }
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

`;
const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  color: black;
  background-color: lightblue;
  font-size: 20px;
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  &:hover {
    color: black;
    background-color: rgb(136, 202, 224);
  }
`;
const Icon = styled.img`
  width: 30px;
`;
const Model = styled.div`
width:100vw;
height:100vh;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.5)`;
const CloseButton = styled.button`
position:absolute;
background-color:white;
padding:5px;
border:none;
border-radius:5px;
top:25%;`;
const Services = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width<=480 ? true : false;
  return (
    <>
      <Conatiner>
        <Left>
          <Image
            open={open}
            src="https://png.pngtree.com/thumb_back/fh260/background/20210912/pngtree-beautiful-business-woman-at-work-image_869880.jpg"
          />
          <Video
            open={open}
            controler
            height="480"
            autoPlay
            loop
            src="https://www.youtube.com/embed/yu_x8qv6mfA"
          ></Video>
        </Left>
        <Right>
          <Warpper>
            <Title>Simple Process to Start</Title>
            <Desc>
              Beginning work means when the employee actually performs work
              under the Contract it does not mean the start date of the Contract
              unless the employee starts work on the start date.
            </Desc>
            <CardContainer>
              <MinCard />
              <MinCard />
              <MinCard />
            </CardContainer>
            <Button onClick={() => setOpen(true)}>
              <Icon src="https://cdn-icons-png.freepik.com/512/656/656446.png" />
              How It work
            </Button>
          </Warpper>
        </Right>
        {smallScreen && open &&(
          <Model>
            <Video open={open}
            controler
            height="300"
            autoPlay
            loop
            src="https://www.youtube.com/embed/yu_x8qv6mfA"/>
          <CloseButton onClick={()=>setOpen(false)}>Close</CloseButton>
          </Model>
        )}
      </Conatiner>
    </>
  );
};

export default Services;
