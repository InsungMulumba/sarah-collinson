import styled, { keyframes } from "styled-components";
import { useState, FC } from "react";
import React from "react";
const Root = styled.div``;

const NavLinksContainerDesktop = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  @media (max-width: 1280px) {
    display: none;
  }
`;

const NavLinksDesktop = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: black;
  margin: 0px 20px;
  padding: 10px 30px;
  text-decoration: none;

  font-family: Inter, sans-serif;
  font-size: 18px;
  :hover {
    background-color: #2896cc;
    color: white;
  }
`;

const Logo = styled.img`
  height: 75px;
  margin: auto 15px;
  width: 50%;
  object-fit: contain;
  @media (min-width: 1280px) {
    height: 50px;
    width: auto;
  }
`;

const NavBarWrapperDesktop = styled.div`
  position: absolute;
  top: 0px;
  height: 75px;
  left: 0px;
  width: 100%;
  background-color: white;
  justify-content: space-between;
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    z-index: 9;
  }
`;

const NavBarWrapperMobile = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  @media (min-width: 1280px) {
    display: none;
  }
`;

const MenuToggle = styled.button`
  height: 100%;
  background-color: inherit;
  margin: auto 10px;
  @media (min-width: 1280px) {
    display: none;
  }
  border: none;
`;

const BurgerMenu = styled.div`
  width: 35px;
  height: 2px;
  background-color: black;
  margin: 6px;
`;

const SlideIn = keyframes`
    0% {
      top: -25px;
      opacity: 0%;
    }
    100% {
      top: 50px;
      opacity: 100%;
    }
`;

const SlideInMobileMenu = keyframes`
    0% {
      height: 0px;
      /* opacity: 0%; */
    }
    100% {
      height: 25vh;
      /* opacity: 100%; */
    }
`;

const NavLinksContainerMobile = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  z-index: 90;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${SlideInMobileMenu} 1s ease-out 0s both;
  background-color: #2896cc;
  justify-content: center;
`;

const NavLinksMobile = styled.a`
  color: white;
  width: 60%;
  justify-content: center;
  display: flex;
  animation: ${SlideIn} 1s ease-out 0s both;
  height: 75px;
  align-items: center;
  text-decoration: none;
  :hover {
    background-color: white;
    color: black;
  }
`;

const BurgerMenuClose = styled.div`
  height: 25px;
  width: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  animation: ${SlideIn} 2s ease-out 0s both;
  right: 45px;
  &:after,
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 4px;
    background-color: white;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const NavBar: FC = () => {
  const [toggleBurgerMenu, setShowBurgerMenu] = useState(false);

  return (
    <>
      {toggleBurgerMenu ? (
        <NavLinksContainerMobile
          onClick={() => setShowBurgerMenu(!toggleBurgerMenu)}
        >
          {/* <BurgerMenuClose /> */}
          <NavLinksMobile href="/">Home </NavLinksMobile>
          <NavLinksMobile href="/booking">Book a session</NavLinksMobile>
          <NavLinksMobile href="#contact">Contact</NavLinksMobile>
        </NavLinksContainerMobile>
      ) : null}

      <Root>
        <NavBarWrapperMobile>
          <Logo src="/Logo.png" alt="Rafiki Learning logo" />
          <MenuToggle onClick={() => setShowBurgerMenu(!toggleBurgerMenu)}>
            <BurgerMenu />
            <BurgerMenu />
            <BurgerMenu />
          </MenuToggle>
        </NavBarWrapperMobile>
        <NavBarWrapperDesktop>
          <Logo src="/Logo.png" alt="Rafiki Learning logo" />
          <NavLinksContainerDesktop>
            <NavLinksDesktop href="/">Home </NavLinksDesktop>
            {/* <NavLinksDesktop href="/about">About </NavLinksDesktop> */}

            <NavLinksDesktop href="/booking">Book a session </NavLinksDesktop>
            <NavLinksDesktop href="#contact">Contact </NavLinksDesktop>
          </NavLinksContainerDesktop>
        </NavBarWrapperDesktop>
      </Root>
    </>
  );
};
export default NavBar;
