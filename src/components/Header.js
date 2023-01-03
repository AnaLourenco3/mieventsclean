import styled from "styled-components";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0 2rem;
  width: auto;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background: #99d3d1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 8;
  @media (max-width: 768px) {
    display: flex;
    font-size: xx-small;
    flex-wrap: nowrap;
    padding: 0 1rem;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  color: white;
  font-weight: 600;
  @media (max-width: 768px) {
    display: flex;
    font-size: xx-small;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 20px;
  @media (max-width: 768px) {
    display: flex;
    font-size: x-small;
    padding-left: 20px;
  }
`;

const HeaderLink = styled.a`
  color: white;
  text-decoration: none;
`;

function Header() {
  return (
    <Container>
      <Details>
        <MdEmail style={{ paddingRight: "5px" }} />
        <p style={{ paddingRight: "10px" }}> madebymieventos@gmail.com </p>{" "}
        <BsFillTelephoneFill style={{ paddingRight: "5px" }} />
        <p>+351 964345526</p>
      </Details>
      <SocialMedia>
        <HeaderLink href="https://instagram.com/madebymiweddings?igshid=YmMyMTA2M2Y=">
          <BsInstagram style={{ paddingRight: "10px" }} />{" "}
        </HeaderLink>
        <HeaderLink href="https://instagram.com/madebymievents?igshid=YmMyMTA2M2Y=">
          <BsInstagram style={{ paddingRight: "10px" }} />
        </HeaderLink>
        <HeaderLink href="https://www.facebook.com/profile.php?id=1000884">
          <BsFacebook style={{ paddingRight: "10px" }} />
        </HeaderLink>
        <HeaderLink href="https://www.pinterest.pt/madebymievents/_saved/">
          <BsPinterest style={{ paddingRight: "10px" }} />
        </HeaderLink>
        {/* <div style={{ paddingRight: "10px" }}>🇬🇧 </div>
        <div> 🇵🇹</div> */}
      </SocialMedia>
    </Container>
  );
}

export default Header;

// href="https://instagram.com/madebymiweddings?igshid=YmMyMTA2M2Y="
// style={{ marginLeft: "10px" }}
// >
// <BsInstagram style={{ marginRight: "5px" }} /> Made By Mi Weddings
// </FooterLink>
// <FooterLink
// href="https://instagram.com/madebymievents?igshid=YmMyMTA2M2Y="
// style={{ marginLeft: "10px" }}
// >
// <BsInstagram style={{ marginRight: "5px" }} /> Made By Mi Events
// </FooterLink>
// <FooterLink
// href="https://www.facebook.com/profile.php?id=100088437476729"
// style={{ marginLeft: "10px" }}
