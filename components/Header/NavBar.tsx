import styled, { keyframes } from "styled-components";
import { useState, FC } from "react";

const NavigationBarDesktop = styled.div`
  height: 120px;
  align-items: center;
  width: 100%;
  display: flex;
  /* background-color: purple; */
  justify-content: space-between;

  @media (max-width: 1279px) {
    height: 100px;
    flex-direction: row-reverse;
    justify-content: space-between;
    border-bottom: 1px solid lightgrey;
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
  color: black;
  border-radius: 100%;
  margin: 0px 30px;
  padding: 25px 30px;
  width: 150px;
  font-family: "Spartan", sans-serif;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  :hover {
    border-radius: 0px;
    background-color: #48cccc;
    color: white;
  }
`;

const Logo = styled.img`
  height: 60%;
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
      height: 0px;
      /* opacity: 0%; */
    }
    100% {
      height: 15vh;
      /* opacity: 100%; */
    }
`;

const SlideInMobileMenu = keyframes`
    0% {
      height: 0px;
      /* opacity: 0%; */
    }
    100% {
      height: 15vh;
      /* opacity: 100%; */
    }
`;
const TagContainer = styled.div`
  display: flex;
  height: 100%;
  display: flex;
  align-items: start;
  flex-direction: column;
`;
const NameTag = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 42px;
  margin: auto 20px;
  @media (min-width: 1280px) {
    margin-left: 50px;
  }
  @media (max-width: 1280px) {
    font-size: 22px;
  }
`;

const TitleTag = styled(NameTag)`
  font-size: 32px;
  color: grey;
  @media (max-width: 1280px) {
    font-size: 16px;
  }
`;

const NavLinksContainerMobile = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  width: 100%;
  z-index: 90;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${SlideInMobileMenu} 1s ease-out 0s both;
  background-color: #48cccc;
  justify-content: center;
`;

const NavLinksMobile = styled.a`
  color: white;
  width: 60%;
  justify-content: center;
  display: flex;
  animation: ${SlideIn} 1s ease-out 0s both;
  height: 55px;
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
          <NavLinksMobile href="/">Home </NavLinksMobile>
          <NavLinksMobile href="/films">Films </NavLinksMobile>
          {/* <NavLinksMobile href="/contact">Contact</NavLinksMobile> */}
        </NavLinksContainerMobile>
      ) : null}

      <NavigationBarDesktop>
        <MenuToggle onClick={() => setShowBurgerMenu(!toggleBurgerMenu)}>
          <BurgerMenu />
          <BurgerMenu />
          <BurgerMenu />
        </MenuToggle>
        <TagContainer>
          <NameTag>SARAH COLLINSON</NameTag>
          <TitleTag>
            Documentary filmmaker and <br /> Exec producer
          </TitleTag>
        </TagContainer>
        <NavLinksContainerDesktop>
          <NavLinksDesktop href="/">Home </NavLinksDesktop>
          <NavLinksDesktop href="/films">Films </NavLinksDesktop>
        </NavLinksContainerDesktop>
      </NavigationBarDesktop>
      {/* <TagLine> The Grief Gang Podcast</TagLine> */}
    </>
  );
};
export default NavBar;
