import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
 
`;

const Warpper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items:center ;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
`;
const Logo = styled.h1`
  font-width: bold;
  text-decoration: underline crimson;
  margin: 0;
`;
const Manu = styled.ul`
  list-style: none;
  display: flex;
  @media only screen and (max-width: 480px) {
    display:none;
  }
`;
const ManuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;
`;
const Button = styled.button`
border:1.5px solid white;
border-radius:10px;
padding:10px 15px;
background-color: crimson;
color:white;
font-size:16px;
cursor: pointer;
font-width:600;
&:hover{
  background-color:red; 
}
`;
const Navbar = () => {
  return (
    <>
      <Container>
        <Warpper>
          <Left>
            <Logo>Agency</Logo>
            <Manu>
              <ManuItem>Home</ManuItem>
              <ManuItem>Features</ManuItem>
              <ManuItem>Services</ManuItem>
              <ManuItem>Pricing</ManuItem>
              <ManuItem>Contact</ManuItem>
            </Manu>
          </Left>
          <Button>Join Now</Button>
        </Warpper>
      </Container>
    </>
  );
};

export default Navbar;
