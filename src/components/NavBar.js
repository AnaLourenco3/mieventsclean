import React, { useState } from "react";
import styled from "styled-components";
import miLogo from "./miLogo.png";
import { NavLink as Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo href="/">
        <img src={miLogo} height="70px" alt="logo" />
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <NavLink to="/">Home</NavLink>
        <NavbarDropdown>
          <NavLink style={{ textDecoration: "none" }}>
            Weddings <RiArrowDropDownLine />
          </NavLink>
          {/* <Link to={`/blogs/${b.id}`}>See more</Link> */}
          <NavbarDropdownContent>
            <NavLink to="/category/2">Wedding Proposal</NavLink>{" "}
            <NavLink to="/category/3">Bachelorette Party</NavLink>
            <NavLink to="/category/1">Wedding</NavLink>
            <NavLink to="/category/4">Vow Renewal</NavLink>
          </NavbarDropdownContent>
        </NavbarDropdown>
        <NavbarDropdown>
          <NavLink style={{ textDecoration: "none" }}>
            Parties&Events <RiArrowDropDownLine />
          </NavLink>
          <NavbarDropdownContent>
            <NavLink to="/category/8">Child Birthday</NavLink>{" "}
            <NavLink to="/category/9">Adult Birthday</NavLink>
            <NavLink to="/category/5">Baptism</NavLink>
            <NavLink to="/category/6">Baby Shower</NavLink>
            <NavLink to="/category/7">Gender Reveal</NavLink>
            <NavLink to="/category/10">Other Events</NavLink>
          </NavbarDropdownContent>
        </NavbarDropdown>
        <NavLink to="/diy">Diy</NavLink>
        {/* <NavLink to="/blog">Blog</NavLink> */}
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
  @media (max-width: 1060px) {
    overflow: hidden;
    background-color: rgb(255, 255, 255, 0.9);
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
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
  @media (max-width: 1050px) {
    display: flex;
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

    > div {
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      background-color: rgb(255, 255, 255);
    }
  }

  @media (max-width: 1050px) {
    display: flex;

    &:hover {
      display: block;

      > div {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        background-color: rgb(255, 255, 255);
      }
    }
  }
`;

const NavbarDropdownContent = styled.div`
  display: none;
  position: absolute;
  /* background-color: #f9f9f9; */
  min-width: 240px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  z-index: 1;
`;
