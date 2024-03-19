import React from 'react'
import styled from 'styled-components'
const Square = styled.div`
width:60px;
height:60px;
border-radius:50px 10px 10px 10px;
background-color:#4eb6ff;
opacity:0.7;
position:absolute;
top:-60px;
left:-60px;
z-index:-1;
animation: square 25s linear alternate infinite;
@keyframes square{
    to{
        transform: translate(100vw, 100vh);
    }
}
`
const Circle = styled.div`
width:100px;
height:100px;
border-radius:50%;
background-color:#669966;
position:absolute;
top:200px;
left:-100px;
z-index:-1;
animation: circle 28s linear alternate infinite;
@keyframes circle{
    to{
        transform: translate(100vw, -100vh);
    }
}
`
const Arrow = styled.div`
width:50px;
height:100px;
background-color:#ff97af;
border-radius:50px 20px 0px 10px;
position:absolute;
opactiy:0.5;
top:400px;
left:-50px;
z-index:-1;
animation: arrow 28s linear alternate infinite;
@keyframes arrow{
    to{
        transform: translate(100vw, -50vh);
    }
}
`;


const AnimatedShap = () => {
    return <>
    <Square/>
    <Circle/>
    <Arrow/>
    </>
 
};

export default AnimatedShap
