import styled, { keyframes } from "styled-components";
import { useState, FC } from "react";

const NavigationBarDesktop = styled.div`
  height: 80px;
  align-items: center;
  width: 100%;
  display: flex;
  /* background-color: purple; */
  justify-content: space-between;
  /* position: sticky;
  top: 0px; */
  @media (max-width: 1279px) {
    height: 80px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const NavLinksContainerDesktop = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  @media (max-width: 1279px) {
    display: none;
  }
`;

const NavLinksDesktop = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: grey;
  border-radius: 100%;
  margin: 0px 30px;
  padding: 25px 30px;
  width: 150px;
  font-family: "Spartan", sans-serif;
  font-size: 18px;
  text-align: center;
  :hover {
    border-radius: 0px;
    background-color: grey;
    color: white;
  }
`;

const Logo = styled.img`
  height: 100%;
  margin: auto 20px;
  @media (min-width: 1280px) {
    margin-left: 50px;
  }
`;

const TagLine = styled.div`
  /* background-color: purple; */
  color: black;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Spartan", sans-serif;
  font-size: 24px;
  padding: 10px;
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
      left: 100%;
      /* opacity: 0%; */
    }
    100% {
      left: 0;
      /* opacity: 100%; */
    }
`;

const NavLinksContainerMobile = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${SlideInMobileMenu} 0.5s ease-out 0s both;
  background-color: white;
  justify-content: center;
  z-index: 9;
`;

const NavLinksMobile = styled.a`
  background-color: grey;
  color: white;
  width: 60%;
  justify-content: center;
  display: flex;
  animation: ${SlideIn} 1s ease-out 0s both;
  height: 100px;
  @media (max-width: 413px) {
    height: 60px;
  }
  align-items: center;
  margin: 20px 0px;
  border-radius: 500px;
  :hover {
    background-color: grey;
    color: white;
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
    background-color: grey;
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
          <BurgerMenuClose />
          <NavLinksMobile href="/#home">Home </NavLinksMobile>
          {/* <NavLinksMobile href="/about">About </NavLinksMobile> */}
          <NavLinksMobile href="/podcast">Podcast </NavLinksMobile>
          <NavLinksMobile href="/events">Events</NavLinksMobile>
          <NavLinksMobile href="/blog">Blog</NavLinksMobile>
          {/* <NavLinksMobile href="/contact">Contact</NavLinksMobile> */}
        </NavLinksContainerMobile>
      ) : null}

      <NavigationBarDesktop>
        <MenuToggle onClick={() => setShowBurgerMenu(!toggleBurgerMenu)}>
          <BurgerMenu />
          <BurgerMenu />
          <BurgerMenu />
        </MenuToggle>
        <Logo
          src="/logo.png"
          alt="Sarah Collinson logo"
          crossOrigin="anonymous"
        />
        <NavLinksContainerDesktop>
          <NavLinksDesktop href="/#home">Home </NavLinksDesktop>

          <NavLinksDesktop href="/podcast">Podcast </NavLinksDesktop>
          <NavLinksDesktop href="/events">Events </NavLinksDesktop>

          <NavLinksDesktop href="/blog">Blog </NavLinksDesktop>
        </NavLinksContainerDesktop>
      </NavigationBarDesktop>
      {/* <TagLine> The Grief Gang Podcast</TagLine> */}
    </>
  );
};
export default NavBar;
