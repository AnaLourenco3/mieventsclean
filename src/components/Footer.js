import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { BsPinterest } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Box = styled.div`
  padding: 80px 60px;
  background: #99d3d1;
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
  max-width: 1200px;
  margin: auto;
  line-height: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: O auto 0 auto;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto; /*repeat(auto-fill, minmax(185px, 1fr));*/
  grid-gap: 50px;

  @media (max-width: 1000px) {
    grid-template-columns: auto;
    grid-gap: 15px;
  }
`;

const FooterLink = styled(Link)`
  color: white;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  line-height: 17px;

  &:hover {
    text-decoration: underline;
    transition: 200ms ease-in;
  }

  @media (max-width: 768px) {
    display: flex;
    font-size: 0.6rem;
    line-height: 3px;
  }
`;

const FootingParagraph = styled.div`
  color: white;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 10px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    font-size: 0.6rem;
    line-height: 3px;
  }
`;

const Heading = styled.p`
  font-size: 17px;
  color: #c9952c;
  margin-bottom: 40px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;

  @media (max-width: 768px) {
    display: flex;
    font-size: 1rem;
  }
`;

const Copyright = styled.div`
  color: white;
  text-align: center;
  margin-top: 60px;

  font-family: "Poppins", sans-serif;
  font-size: 14px;
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
              <MdEmail style={{ marginRight: "5px" }} />
              madebymieventos@gmail.com
            </FootingParagraph>
            <FootingParagraph>
              <BsFillTelephoneFill style={{ marginRight: "5px" }} /> +351
              964345526
            </FootingParagraph>
            <FootingParagraph>
              <ImLocation style={{ marginRight: "5px" }} /> Charneca da Caparica
            </FootingParagraph>

            <FooterLink to="/about" style={{ marginTop: "20px" }}>
              About
            </FooterLink>
            <FooterLink to="/contact">Contact </FooterLink>
          </Column>
          <Column>
            <Heading>Weddings</Heading>
            <FooterLink to="/category/1">Wedding</FooterLink>
            <FooterLink to="/category/2">Wedding Proposal</FooterLink>
            <FooterLink to="/category/3">Bachelorette Party</FooterLink>
            <FooterLink to="/category/4">Vow Renewal</FooterLink>
          </Column>
          <Column>
            <Heading>Parties&Events</Heading>
            <FooterLink to="/category/5">Baptism</FooterLink>
            <FooterLink to="/category/6">Baby Shower</FooterLink>
            <FooterLink to="/category/7">Gender Reveal</FooterLink>
            <FooterLink to="/category/8">Children birthday party</FooterLink>
            <FooterLink to="/category/9">Adult birthday party</FooterLink>
            <FooterLink to="/category/10">Other Events</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>

            <FooterLink
              href="https://instagram.com/madebymiweddings?igshid=YmMyMTA2M2Y="
              style={{ marginLeft: "10px" }}
            >
              <BsInstagram style={{ marginRight: "5px" }} /> Made By Mi Weddings
            </FooterLink>
            <FooterLink
              href="https://instagram.com/madebymievents?igshid=YmMyMTA2M2Y="
              style={{ marginLeft: "10px" }}
            >
              <BsInstagram style={{ marginRight: "5px" }} /> Made By Mi Events
            </FooterLink>
            <FooterLink
              href="https://www.facebook.com/profile.php?id=100088437476729"
              style={{ marginLeft: "10px" }}
            >
              <BsFacebook />
            </FooterLink>
            <FooterLink href="#" style={{ marginLeft: "10px" }}>
              <BsPinterest />
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <Copyright>© 2022 developed by Ana Lourenço </Copyright>
    </Box>
  );
};
export default Footer;
