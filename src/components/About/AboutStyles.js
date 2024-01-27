import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  padding-top: clamp(70px, 25vh, 220px);
`;
export const AboutVideo = styled.video`
  z-index: -1;
  object-fit: cover;
  width: 50%;
  height: 100%;
  top: 0;
  right: 0;
  position: absolute;
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;
export const AboutMainHeading = styled(motion.h1)`
  font-size: clamp(
    2.5rem,
    8vw,
    4.7rem
  ); //xoi font'akai 6vw nayalet la 2.3 kamtr w la 4.5 ziatr bet
  margin-bottom: 2rem;
  color: ${({ inverse }) => (inverse ? "#AE7175" : "#fff")};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;
export const AboutText = styled(motion.p)`
  font-size: clamp(1.1rem, 1.7vw, 1.5rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`;

export const AboutBackgroundColor = styled.div`
  background: #ffcbc3;
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
`;

export const AboutImgWrapper = styled.div`
  position: absolute;
  z-index: -1;
  width: 35%;
  bottom: 12%;
  left: 5%;

  @media screen and (min-width: 760px) and (max-width: 1100px) {
    bottom: 18%;
    width: 45%;
  }
  @media screen and (max-width: 760px) {
    display: none;
  }
`;
export const Img = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  transform: rotate(190deg);
`;
