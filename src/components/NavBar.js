import { useState } from "react";
import styled from "styled-components";
import miLogo from "./miLogo.png";
import { NavLink as Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import BurgerButton from "./BurgerButton";

const scrollToTop = () => window.scrollTo(0, 0);
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  const [dropdownVisible, setDropdownVisible] = useState({
    1: false,
    2: false,
  });

  const handleDropdownToggle = (id) => {
    setDropdownVisible((prevState) => {
      return { ...prevState, [id]: !prevState[id] };
    });
  };

  const handleDropdownClose = (id) => {
    setDropdownVisible((prevState) => {
      return { ...prevState, [id]: false };
    });
  };

  return (
    <Nav>
      <Logo href="/">
        <img src={miLogo} height="70px" alt="logo" />
      </Logo>
      <BurgerButton clicked={clicked} handleClick={handleClick} />
      <Menu clicked={clicked}>
        <NavLink to="/">Home</NavLink>
        <NavbarDropdown
          onClick={() => handleDropdownToggle(1)}
          onBlur={() => handleDropdownClose(1)}
        >
          <NavLink style={{ textDecoration: "none" }}>
            Casamentos <RiArrowDropDownLine />
          </NavLink>
          {/* <Link to={`/blogs/${b.id}`}>See more</Link> */}
          <NavbarDropdownContent>
            <NavLink to="/category/2">Pedidos de Casamento</NavLink>{" "}
            <NavLink to="/category/3">Despedidas de Solteira</NavLink>
            <NavLink to="/category/1">Casamentos</NavLink>
            <NavLink to="/category/4">Renovação de Votos/Bodas</NavLink>
          </NavbarDropdownContent>
        </NavbarDropdown>
        <NavbarDropdown
          onClick={() => handleDropdownToggle(2)}
          onBlur={() => handleDropdownClose(2)}
        >
          <NavLink style={{ textDecoration: "none" }}>
            Festas&Eventos <RiArrowDropDownLine />
          </NavLink>
          <NavbarDropdownContent>
            <NavLink to="/category/8" onClick={scrollToTop}>
              Aniversários Infantis
            </NavLink>
            <NavLink to="/category/9" onClick={scrollToTop}>
              Aniversários Adultos
            </NavLink>
            <NavLink to="/category/5" onClick={scrollToTop}>
              Batizados
            </NavLink>
            <NavLink to="/category/6" onClick={scrollToTop}>
              Baby Showers
            </NavLink>
            <NavLink to="/category/7" onClick={scrollToTop}>
              Chás de Revelação
            </NavLink>
            <NavLink to="/category/10" onClick={scrollToTop}>
              Outros Eventos
            </NavLink>
          </NavbarDropdownContent>
        </NavbarDropdown>
        <NavLink to="/diy/11">DIY</NavLink>
        {/* <NavLink to="/blog">Blog</NavLink> */}
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/contact">Contacto</NavLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;

const NavLink = styled(Link)`
  padding: 1rem 2rem;
  cursor: grab;
  text-align: center;
  text-decoration: none;
  color: #c9952c;
  font-family: "Helvetica";
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  flex-wrap: wrap;
  background: rgb(250, 250, 250, 0.9);
  position: fixed;
  top: 35px;
  left: 0;
  right: 0;
  z-index: 7;
`;

const Logo = styled.a`
  padding: 1rem 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  position: relative;
  @media (max-width: 1060px) {
    overflow: hidden;
    background-color: rgb(255, 255, 255, 0.9);

    flex-direction: column;
    padding: ${({ clicked }) => (clicked ? "20px 0" : "0")};
    max-height: ${({ clicked }) => (clicked ? "auto" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const NavbarDropdown = styled.div`
  cursor: grab;
  text-align: center;
  text-decoration: none;
  color: #c9952c;
  font-family: "Helvetica";
  font-size: 1rem;

  &:hover {
    display: block;

    div {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      background-color: rgb(255, 255, 255);
    }
  }

  @media (max-width: 1060px) {
    display: flex;

    &:hover {
      position: relative;
      display: block;

      div {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        background-color: rgb(171, 219, 217, 0.3);
      }
    }
  }
`;

const NavbarDropdownContent = styled.div`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  position: absolute;
  flex-direction: column;

  min-width: 240px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  z-index: 1;
  @media (max-width: 1060px) {
    position: static;
  }
`;
