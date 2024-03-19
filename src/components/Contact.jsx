import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const Container = styled.div`
  height: 100%;
  background: url("https://img.freepik.com/premium-photo/scientific-molecule-background-dna-double-helix-illustration-with-shallow-depth-field-mysterious_230610-1287.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Warpper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction:column;
    }
`;
const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width:100%;
    }
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
    font-size:30px;
    margin:20;
    }
`;
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width: 480px) {
   flex-direction:column;
    }
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height:50%;
    align-items:center;
    margin-right:0;
    }
`;
const Input = styled.input`
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  outline:none;
  @media only screen and (max-width: 480px) {
    padding:5px;
    margin:5px;
    }
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  outline:none;
  @media only screen and (max-width: 480px) {
    padding:5px;
    margin-top:20px;
    height:30%;
    }
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height:50%;
   margin-right:0;
    }
`;

const Button = styled.button`
  background-color: darkblue;
  color: white;
  padding: 10px;
  border-radius: 12px;
  border: 1.5px solid darkblue;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: darkblue;
    border: 1.5px solid darkblue;
  }
  @media only screen and (max-width: 480px) {
    padding:5px;
    font-size:12px;
    }
  
`;
const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width:100%;

    }
`;
const AddressItems = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
   margin-buttom:10px;
    }
`;
const Icon = styled.img`
  width: 40px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width:30px;
   margin-right:10;
    }
`;
const Text = styled.span`
  font-size: 20px;
  margin: 10px;
  @media only screen and (max-width: 480px) {
    font-size:15px;
   margin:5px;
    }
`;
const Contact = () => {
  return (
    <>
      <Container>
        <Warpper>
          <FormContainer>
            <Title>
              Questions?
              <br />
              Let's Get in Touch
            </Title>
            <Form>
              <LeftForm>
                <Input placeholder="Enter Your Name" />
                <Input placeholder="Enter Your Email" />
                <Input placeholder="Enter Your Password" />
                <Input placeholder="Subject" />
              </LeftForm>
              <RightForm>
                <TextArea placeholder="Your Massage" />
                <Button>Send</Button>
              </RightForm>
            </Form>
          </FormContainer>
          <AddressContainer>
            <AddressItems>
              <Icon src="https://static-00.iconduck.com/assets.00/map-marker-icon-342x512-gd1hf1rz.png" />
              <Text>123 Park Avenue St. , New York , USA</Text>
            </AddressItems>
            <AddressItems>
              <Icon src="https://cdn4.iconfinder.com/data/icons/social-icons-6/40/phone-512.png" />
              <Text>+1 676 1234 9876</Text>|<Text>+1 656 5679 9656</Text>
            </AddressItems>
            <AddressItems>
              <Icon src="https://cdn-icons-png.flaticon.com/512/2343/2343805.png" />
              <Text>agancy@.com</Text>|<Text>sales@gmail.com</Text>
            </AddressItems>
          </AddressContainer>
        </Warpper>
      </Container>
      <Footer/>
    </>
  );
};

export default Contact;
