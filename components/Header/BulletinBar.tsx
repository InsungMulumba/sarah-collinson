import styled, { keyframes } from "styled-components";
import { FC } from "react";
import colors from "../../styles/colors";

const fadeIn = keyframes`
    0% {

opacity: 0%;
    }

    100% {
      opacity: 100%;
    }
`;

const BulletinText = styled.div`
  animation: ${fadeIn} 1s ease-out 0s both;
  @media (max-width: 414px) {
    font-size: 14px;
  }
`;

const BulletinBar = styled.a`
  height: 40px;
  color: white;
  width: 100%;
  display: flex;
  background-color: ${colors.burntOrange};
  font-family: "Spartan", sans-serif;
  justify-content: center;
  align-items: center;
  /* position: sticky; */
  @media (max-width: 1280px) {
    padding: 20px 10px;
  }
  top: 0;
`;

const AnnounceBar: FC = () => {
  return (
    <BulletinBar
      href="https://open.spotify.com/show/6RfXRi5ZaYtFcMBTPju8tL"
      target="_blank"
    >
      <BulletinText>
        Click here to listen to the most recent episode.
      </BulletinText>
    </BulletinBar>
  );
};
export default AnnounceBar;
