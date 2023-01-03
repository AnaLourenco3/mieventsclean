import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const navigate = useNavigate();

  return (
    <Container>
      <Text>Lets Celebrate!</Text>

      <Button onClick={() => navigate("/contact")}>Contact Us</Button>
    </Container>
  );
}

export default ContactUs;

const Container = styled.div`
  width: 100%;
  margin: 180px auto 40px auto;
  background-color: rgb(226, 183, 185, 0.8);
  height: 200px;
  padding: 30px 0px;
  text-align: center;
`;

const Text = styled.h1`
  font-family: Amsterdam;
  color: white;
`;

const Button = styled.button`
  padding: 10px;
  font-family: "Poppins", sans-serif;
  color: white;
  background: none;
  cursor: grab;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 50px;

  &:hover {
    background-color: rgb(250, 250, 250, 0.2);
    padding: 11px;
  }

  &:active {
    background-color: rgb(250, 250, 250, 0.4);
    padding: 11px;
  }
`;
