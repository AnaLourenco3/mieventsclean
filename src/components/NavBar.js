import React, { useState } from "react";
import styled from "styled-components";
import miLogo from "./miLogo.png";
import { NavLink as Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/">
        <img src={miLogo} height="70px" alt="logo" />
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/weddings">Weddings</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/diy">Diy</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
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
  font-family: "Dancing Script";
  font-size: 1.3rem;
  transition: all 0.3s ease-in;

  &:hover {
    font-size: 1.4rem;
    transition: 300ms ease-in;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  flex-wrap: wrap;
  background: rgb(250, 250, 250, 0.8);
  position: fixed;
  top: 45px;
  left: 0;
  right: 0;
  z-index: 7;
`;

const Logo = styled.a`
  padding: 2rem 0;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    background-color: rgb(255, 255, 255, 0.9);
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #abdbd9;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
