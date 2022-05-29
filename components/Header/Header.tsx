import React, { FC } from "react";
import styles from "../../styles/Layout.module.css";
import styled from "styled-components";
import BulletinBar from "./BulletinBar";
import NavBar from "./NavBar";

type HeaderProps = {
  showBulletin: boolean;
};

const HeaderRoot = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 1;
`;

const Header: FC = () => {
  return (
    <HeaderRoot id="home">
      <NavBar />
    </HeaderRoot>
  );
};

export default Header;
