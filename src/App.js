
import './App.css';
import styled, { css } from 'styled-components';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Features from './components/Features';
import Services from './components/Services';
import Prices from './components/Prices';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Container = styled.div`
height:100vh;
overflow:hidden;
position:relative;
`;
const Shape = css`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
z-index:-1;
`
const InfoShape = styled.div`
${Shape}
clip-path: polygon(70% 0, 100% 0, 99% 99%, 48% 99%);
@media only screen and (max-width: 480px) {
  // display:none;
  background-color:pink;
}
background-color:white;
`;
const FeatureShape = styled.div`
${Shape}
clip-path: polygon(0% 0, 50% 0, 40% 99%, 0% 100%);
background-color:lightblue`;
const PriceShape = styled.div`
${Shape}
clip-path: polygon(33% 0, 100% 0, 100% 100%, 67% 100%);
background-color:crimson
@media only screen and (max-width: 480px) {
  display:none;
}`;

function App() {
  return (
    <>
    <Container>
    <Navbar/>
    <Intro/>
    <InfoShape/>
    </Container>
    <Container>
      <Features/>
      <FeatureShape/>
    </Container>
    <Container>
      <Services/>
    </Container>
    <Container>
      <Prices/>
      <PriceShape/>
    </Container>
    <Container>
      <Contact/>
    </Container>
    <Footer/>
    </>
  );
}

export default App;
