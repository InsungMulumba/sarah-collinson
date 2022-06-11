import styled from "styled-components";
import { FC } from "react";

const SocialMediaIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px 0px;
`;

const SocialMediaIconLink = styled.a`
  /* margin: 28px 30px; */
  @media (min-width: 1280px) {
    height: 40px;
  }
  margin: 0px 35px;
`;

const SocialMediaIcon = styled.img`
  @media (min-width: 1280px) {
    height: 60px;
    width: 60px;
  }
  margin: 0px 5px;

  :hover {
    transform: scale(1.1);
  }
`;

const platforms = ["gmail", "Twitter"];

const platformLinks = ["sfcollinson@gmail.com", "www.twitter.com/sfcollinson"];

const SMContainer: FC = () => {
  return (
    <SocialMediaIconContainer>
      {platforms.map((i, idx) => {
        const link = platformLinks[idx];

        return (
          <SocialMediaIconLink key={i} target="_blank" href={link}>
            <SocialMediaIcon
              src={`/social-media-icons/${i}.png`}
              alt={`${i} Icon`}
              loading="lazy"
              height="40"
              width="40"
            />
          </SocialMediaIconLink>
        );
      })}
    </SocialMediaIconContainer>
  );
};
export default SMContainer;
