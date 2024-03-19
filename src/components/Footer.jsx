import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #555;
  height: 10%;
  color: lightgray;
`;
const Warpper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    padding:10px;
    flex-direction:column;
    }
`;
const List = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  display: flex;
`;
const ListItems = styled.li`
  margin-right: 20px;
  font-size: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
  font-size:15px;
    }
`;
const Copyright = styled.span`
  font-size: 15px;
`;
const Footer = () => {
  return (
    <>
      <Container>
        <Warpper>
          <List>
            <ListItems>Guide</ListItems>
            <ListItems>Support</ListItems>
            <ListItems>Community</ListItems>
            <ListItems>API</ListItems>
          </List>
          <Copyright>
            Alba Agancy Corporation © 2024 Tearms & Condition | Privacy
          </Copyright>
        </Warpper>
      </Container>
    </>
  );
};

export default Footer;
