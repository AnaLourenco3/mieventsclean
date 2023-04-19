import styled from "styled-components";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const email = "madebymieventos@gmail.com";
const mobile = "964345526";

function Header() {
  return (
    <Container>
      <Details>
        <ClickableLink href={`mailto:${email}`}>
          <MdEmail style={{ paddingRight: "5px" }} />
          <p style={{ paddingRight: "20px" }}> {email} </p>{" "}
        </ClickableLink>
        <ClickableLink href={`tel:${mobile}`}>
          <BsFillTelephoneFill style={{ paddingRight: "5px" }} />
          <p>964345526</p>
        </ClickableLink>
      </Details>
      <SocialMedia>
        {/* <HeaderLink href="https://instagram.com/madebymiweddings?igshid=YmMyMTA2M2Y=">
          <BsInstagram style={{ paddingRight: "10px" }} />{" "}
        </HeaderLink> */}
        <HeaderLink href="https://instagram.com/madebymievents?igshid=YmMyMTA2M2Y=">
          <BsInstagram style={{ paddingRight: "10px" }} />
        </HeaderLink>
        {/* {/* <HeaderLink href="https://www.facebook.com/profile.php?id=1000884">
          <BsFacebook style={{ paddingRight: "10px" }} />
        </HeaderLink> */}
        <HeaderLink href="https://www.pinterest.pt/madebymievents/_saved/">
          <BsPinterest style={{ paddingRight: "10px" }} />
        </HeaderLink>{" "}
      </SocialMedia>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  padding: 0 2rem;
  width: auto;
  height: 35px;
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
  font-weight: 500;
  @media (max-width: 768px) {
    display: flex;
    font-size: small;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-size: 18px;
  padding-top: 5px;
  @media (max-width: 768px) {
    display: flex;
    font-size: small;
    padding-left: 20px;
  }
`;

const HeaderLink = styled.a`
  color: white;
  text-decoration: none;
`;

const ClickableLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
`;
