import { useState } from "react";
import styled from "styled-components";
import miLogo from "./miLogo.png";
import { NavLink as Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import BurgerButton from "./BurgerButton";

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

  const closeMobileMenu = () => {
    if (window.innerWidth <= 1060) {
      setClicked(false);
    }
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <Nav>
      <Logo href="/">
        <img src={miLogo} height="70px" alt="logo" />
      </Logo>
      <BurgerButton clicked={clicked} handleClick={handleClick} />
      <Menu clicked={clicked}>
        <NavLink
          to="/"
          onClick={() => {
            scrollToTop();
            closeMobileMenu();
          }}
        >
          Home
        </NavLink>
        <NavbarDropdown
          onClick={() => handleDropdownToggle(1)}
          onBlur={() => handleDropdownClose(1)}
        >
          <NavLink style={{ textDecoration: "none" }}>
            Casamentos <RiArrowDropDownLine />
          </NavLink>
          {/* <Link to={`/blogs/${b.id}`}>See more</Link> */}
          <NavbarDropdownContent>
            <NavLink
              to="/category/2"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
            >
              Pedidos de Casamento
            </NavLink>{" "}
            <NavLink
              to="/category/3"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
            >
              Despedidas de Solteira
            </NavLink>
            <NavLink
              to="/category/1"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
            >
              Casamentos
            </NavLink>
            <NavLink
              to="/category/4"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
            >
              Renovação de Votos/Bodas
            </NavLink>
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
            <NavLink
              to="/category/8"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
            >
              Aniversários Infantis
            </NavLink>
            <NavLink
              to="/category/9"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
            >
              Aniversários Adultos
            </NavLink>
            <NavLink
              to="/category/5"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
            >
              Batizados
            </NavLink>
            <NavLink
              to="/category/6"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
            >
              Baby Showers
            </NavLink>
            <NavLink
              to="/category/7"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
            >
              Chás de Revelação
            </NavLink>
            <NavLink
              to="/category/10"
              onClick={() => {
                scrollToTop();
                closeMobileMenu();
              }}
            >
              Outros Eventos
            </NavLink>
          </NavbarDropdownContent>
        </NavbarDropdown>
        <NavLink
          to="/diy/11"
          onClick={() => {
            scrollToTop();
            closeMobileMenu();
          }}
        >
          Blog
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => {
            scrollToTop();
            closeMobileMenu();
          }}
        >
          Sobre
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => {
            scrollToTop();
            closeMobileMenu();
          }}
        >
          Contacto
        </NavLink>
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
