import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-right: 50px;
  border-radius: 10px;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  background-color: white;
  @media only screen and (max-width: 480px) {
    padding:5px;
    margin:0;
    margin-right: 0px;
    }
`;
const PriceCard = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    font-size:30px;

    }
`;
const Type = styled.button`
  border: 1.5px solid crimson;
  color: crimson;
  padding: 10px;
  margin: 10px 0;
  border-radius: 20px;
  background-color: white;
  font-weight: bold;
  font-size: 20px;
  &:hover {
    background-color: crimson;
    color: white;
    border: 1.5px solid crimson;
  }
  @media only screen and (max-width: 480px) {
   display:none;
    }
`;
const List = styled.ul`
  list-style: none;
`;
const ListItems = styled.li`
  margin: 30px 0px;
  font-size:18px;
  @media only screen and (max-width: 480px) {
  font-size:15px;
  margin:10px;
    }
`;
const Button = styled.button`
  background-color: darkblue;
  color: white;
  padding: 10px;
  margin:10px 0px;
  border-radius: 12px;
  border: none;
  font-size: 20px;
  font-weight: bold;
  border: 1.5px solid darkblue;
  &:hover {
    background-color: white;
    color: darkblue;
    border: 1.5px solid darkblue;
  }
  @media only screen and (max-width: 480px) {
    padding:10px;
    font-size:12px;
    }
`;
const PriceContainer = ({price, type}) => {
  return (
    <>
      <Container>
        <PriceCard>
          $<Price>{price}</Price>/month
        </PriceCard>
        <Type>{type} Plan</Type>
        <List>
          <ListItems>200 hand-Crafatd Template</ListItems>
          <ListItems>Exclusive Support</ListItems>
          <ListItems>50+ PeBuild Websites</ListItems>
          <ListItems>Permium plugins</ListItems>
        </List>
        <Button>Join Now</Button>
      </Container>
    </>
  );
};

export default PriceContainer;
