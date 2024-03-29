import styled from "styled-components";
import { Link } from "react-router-dom";
import { Row, Column } from "../../globalStyles";

export const FooterContainer = styled.div`
  background: #221018;
  padding: 4rem 0 2rem 0;
`;
export const FooterWrapper = styled.div`
  // max-width: 1280px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;
export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterRow = styled(Row)`
  flex-wrap: wrap;

  @media screen and (max-width: 820px) {
    > div {
      width: 20%;
    }
    > div:first-child {
      width: 100%;
    }
  }

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: center;

    * {
      width: 100%;
      text-align: center;
    }
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  align-items: center;
`;

export const FooterImgColumn = styled(Column)`
  align-items: center;
  @media screen and (max-width: 999px) {
    align-items: center;
    grid-column: 1/-1; //span full wata hamw column'aka bgretawa
  }
`;
export const FooterColumn = styled(Column)`
  @media screen and (max-width: 999px) {
    align-items: center;
    grid-column: 1/-1; //span full wata hamw column'aka bgretawa
  }
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  text-align: left;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 1000px) {
    align-items: center;
  }
`;
export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;
export const FooterLogo = styled(Link)`
  color: #fff;
  //justify-self: start;
  justify-self: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;

  margin-bottom: 70px;
  @media screen and (max-width: 1000px) {
    margin: 0;
  }
  //margin-bottom: 8px;
`;

export const SocialIcon = styled.img`
  //margin-right: 10px;
  //width: 80px;
  width: 155px;
`;
export const FooterRights = styled.div`
  color: #fff;
  /* margin-bottom: 16px; */
  width: 100%;
  font-size: 1.1rem;
  text-align: center;
  border: 1px solid #fff;
  padding: 1rem 0;
  margin: 1rem 0 16px;

`;
export const BobaText=styled.div`
font-size: 1rem;
padding: 2px 0;
`
export const FooterSocialIcon = styled.a`
  color: #fff;
  font-size: 26px;
`;

export const FooterTime = styled.div`
  color: #fff;
  margin: 0.4rem auto 0.4rem;
  max-width: 20rem;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2;
  text-align: center;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    text-align: left;
    margin-right: 1rem;
  }
`;
export const FooterCall = styled.div`
  color: #fff;
  margin: 0.4rem auto 0.4rem;
  max-width: 20rem;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2;
  text-align: center;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    text-align: left;
    margin-right: 1rem;
  }
`;
export const FooterEmail = styled.div`
  color: #fff;
  margin: 0.4rem auto 0.4rem;
  max-width: 20rem;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2;
  text-align: center;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    text-align: left;
    margin-right: 1rem;
  }
`;
export const FooterAddress = styled.div`
  color: #fff;
  margin: 0.4rem auto 0.4rem;
  max-width: 20rem;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2;
  text-align: center;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    text-align: left;
    margin-right: 1rem;
  }
`;
