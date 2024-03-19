import React from 'react'
import styled from 'styled-components'
import PriceContainer from './PriceContainer'
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100%;
@media only screen and (max-width: 480px) {
  flex-direction:column;
  height:auto;
  padding:20px;
  }`;
const Prices = () => {
  return (
    <>
      <Container>
        <PriceContainer price="10" type="Basic"/>
        <PriceContainer price="30" type="Permium"/>
        <PriceContainer price="50" type="Advanced"/>
      </Container>
    </>
  )
}

export default Prices
