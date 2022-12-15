import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

const Box = styled.div`
  padding: 80px 60px;
  background: #abdbd9;
  position: sticky;
  right: 0;
  bottom: 0;
  left: 0;
  width: auto;

  @media (max-width: 768px) {
    padding: 70px 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 900px;
  margin: auto;
  line-height: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: Opx auto 0px auto;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: auto auto auto; /*repeat(auto-fill, minmax(185px, 1fr));*/
  grid-gap: 100px;

  @media (max-width: 1000px) {
    grid-template-rows: auto auto auto;
    grid-gap: 15px;
  }
`;

const FooterLink = styled.a`
  color: white;
  margin-bottom: 20px;
  font-size: 0.8rem;
  text-decoration: none;
  font-family: "Arial";
  font-weight: bold;

  &:hover {
    color: rgb(201, 149, 44, 0.5);
    transition: 200ms ease-in;
  }

  @media (max-width: 768px) {
    display: flex;
    font-size: 0.7rem;
    line-height: 3px;
  }
`;

const FootingParagraph = styled.div`
  color: white;
  margin-bottom: 20px;
  font-family: "Arial";
  font-size: 0.8rem;
  font-weight: bold;
  line-height: 10px;
  @media (max-width: 768px) {
    display: flex;
    font-size: 0.7rem;
    line-height: 3px;
  }
`;

const Heading = styled.p`
  font-size: 22px;
  color: #c9952c;
  margin-bottom: 40px;
  font-family: "Dancing Script", cursive;
  font-weight: bold;
  @media (max-width: 768px) {
    display: flex;
    font-size: 1rem;
  }
`;

const Copyright = styled.div`
  color: white;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 15px;
  font-family: "Arial";
  font-size: small;
  @media (max-width: 768px) {
    font-size: x-small;
    margin: auto;
  }
`;

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Made By Mi</Heading>
            <FootingParagraph>
              <MdEmail style={{ marginRight: "7px" }} />
              ana_lucia3@hotmail.com
            </FootingParagraph>
            <FootingParagraph>
              <BsFillTelephoneFill style={{ marginRight: "7px" }} />{" "}
              0031639112882
            </FootingParagraph>
            <FootingParagraph>
              <ImLocation style={{ marginRight: "7px" }} /> Charneca da Caparica
            </FootingParagraph>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Weddings</FooterLink>
            <FooterLink href="#">Events</FooterLink>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#" style={{ marginLeft: "10px" }}>
              <BsFacebook />
            </FooterLink>
            <FooterLink href="#" style={{ marginLeft: "10px" }}>
              <BsInstagram />
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <Copyright>© 2022 designed by Ana Lourenço </Copyright>
    </Box>
  );
};
export default Footer;
