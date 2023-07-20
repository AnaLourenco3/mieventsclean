import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { BsPinterest } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";

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
            {/* <FootingParagraph>
              <ImLocation style={{ marginRight: "5px" }} /> Lisboa e Vale do
              Tejo
            </FootingParagraph> */}

            <FooterLink to="/about" style={{ marginTop: "20px" }}>
              Sobre
            </FooterLink>
            <FooterLink to="/contact">Contacto </FooterLink>
          </Column>
          <Column>
            <Heading>Casamentos</Heading>
            <FooterLink to="/category/1">Casamentos</FooterLink>
            <FooterLink to="/category/2">Pedidos de Casamento</FooterLink>
            <FooterLink to="/category/3">Despedidas de Solteira</FooterLink>
            <FooterLink to="/category/4">Renovação de Votos/Bodas</FooterLink>
          </Column>
          <Column>
            <Heading>Festas&Eventos</Heading>
            <FooterLink to="/category/5">Batizados</FooterLink>
            <FooterLink to="/category/6">Baby Showers</FooterLink>
            <FooterLink to="/category/7">Chás de Revelação</FooterLink>
            <FooterLink to="/category/8">Aniversários Infantis</FooterLink>
            <FooterLink to="/category/9">Aniversários Adultos</FooterLink>
            <FooterLink to="/category/10">Outros Eventos</FooterLink>
          </Column>
          <Column>
            <Heading>Redes Sociais</Heading>

            <FooterLinkSocialMedia href="https://instagram.com/madebymiweddings?igshid=YmMyMTA2M2Y=">
              <BsInstagram style={{ marginRight: "5px" }} /> Made By Mi Weddings
            </FooterLinkSocialMedia>
            <FooterLinkSocialMedia href="https://instagram.com/madebymievents?igshid=YmMyMTA2M2Y=">
              <BsInstagram style={{ marginRight: "5px" }} /> Made By Mi Events
            </FooterLinkSocialMedia>
            <FooterLinkSocialMedia href="https://www.facebook.com/profile.php?id=100088437476729">
              <BsFacebook />
            </FooterLinkSocialMedia>
            <FooterLinkSocialMedia href="www.pinterest.pt/madebymieventplanner">
              <BsPinterest />
            </FooterLinkSocialMedia>
            <FooterLinkSocialMedia href="www.youtube.com">
              <TfiYoutube />
            </FooterLinkSocialMedia>
          </Column>
        </Row>
      </Container>
      <Copyright>© 2023 Made by Mi </Copyright>
    </Box>
  );
};
export default Footer;

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
  grid-template-columns: auto auto auto auto;
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
    font-size: 14px;
    display: flex;
  }
`;

const FooterLinkSocialMedia = styled.a`
  color: white;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  line-height: 17px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
    transition: 200ms ease-in;
  }

  @media (max-width: 1060px) {
    display: flex;
    font-size: 14px;
  }
`;

const FootingParagraph = styled.div`
  color: white;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 10px;
  align-items: center;
  display: flex;

  @media (max-width: 1060px) {
    display: flex;
    font-size: 14px;
  }
`;

const Heading = styled.p`
  font-size: 17px;
  color: #c9952c;
  margin-bottom: 40px;
  font-family: "Poppins", sans-serif;
  font-weight: 600;

  @media (max-width: 1060px) {
    display: flex;
    font-size: 1rem;
  }
`;

const Copyright = styled.div`
  color: white;
  text-align: center;
  margin-top: 60px;
  font-size: 14px;
`;
