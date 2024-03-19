import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-direction: column;
  margin-right:10px;
  border-radius: 5px;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
`;
const Image = styled.img`
  width: 20%;
`;
const Text = styled.span`
  text-align: center;
  margin-top: 10px;
  cursor: pointer;
`;
const MinCard = () => {
  return (
    <>
      <Container>
        <Image src="https://www.clarin.eu/sites/default/files/styles/medium/public/icon-services-fcs.png?itok=seug9Hqn" />
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </Container>
    </>
  );
};

export default MinCard;
