import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Container = styled.div`
  padding: 0 2rem;
  width: auto;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  background: #abdbd9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  @media (max-width: 768px) {
    display: flex;
    font-size: xx-small;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  color: white;
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
  font-size: 14px;
  @media (max-width: 768px) {
    display: flex;
    font-size: x-small;
    padding-left: 20px;
  }
`;

function Header() {
  return (
    <Container>
      <Details>
        <MdEmail style={{ paddingRight: "5px" }} />
        <p style={{ paddingRight: "10px" }}> ana_lucia3@hotmail.com </p>{" "}
        <BsFillTelephoneFill style={{ paddingRight: "5px" }} />
        <p>0031639112882</p>
      </Details>
      <SocialMedia>
        <BsFacebook style={{ paddingRight: "10px" }} />
        {""}
        <BsInstagram style={{ paddingRight: "30px" }} />
        <div style={{ paddingRight: "10px" }}>🇬🇧 </div>
        <div> 🇵🇹</div>
      </SocialMedia>
    </Container>
  );
}

export default Header;
