import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ reverse }) =>
    reverse
      ? "row-reverse" // lera resverse haya kawa ba rezbandi image la pesh contentakanawa bet
      : "row"}; // amma bo reverse bakar det example (image title) agar reverse kam awkat
  /* abeta( title image) */
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const ContentColumn = styled(motion.div)`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  z-index: 10;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    max-width: 100% !important;
    flex-basis: 100%; // width bo initial component(item) da anet
    justify-content: center;
    align-items: center;
  }
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    > h1,
    p {
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  > img {
    width: 300px;
    margin-left: -3px;
  }
`;
export const ImgWrapper = styled(motion.div)`
  display: flex;
  justify-content: "flex-end"; // aw item'anai flex'n ayan bata end
  max-height: 700px;
  justify-content: center; // item'akan abata center without flex
  position: relative;
`;
export const TopLine = styled(motion.div)`
  font-size: 0.9rem;
  line-height: 16px;
  font-weight: 550;
  letter-spacing: 1.4px;
  margin-bottom: 1.3rem;
  color: #AE7175;
  //color: #979797;
`;
export const Img = styled(motion.img)`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle; // set vertical element ka inline or inline-block or table'n
  display: inline-block;
  object-fit: cover;
  max-height:500px;
  border-radius:1rem ;
  z-index: 1;
`;
export const Heading = styled(motion.h2)`
  margin-bottom: 24px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ inverse }) => (inverse ? "#AE7175" : "#fff")};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const Subtitle = styled(motion.p)`
  max-width: 440px;
  margin-bottom: 35px;
  line-height: 24px;
  color: ${({ inverse }) => (inverse ? "#000" : "#fff")};
`;


export const ContentButton = styled(motion.button)`
  height: 3rem;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 0.8rem;
  line-height: 18px;
  letter-spacing: 1.54px;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  color: ${({ inverse }) => (inverse ? "#AE7175" : "#fff")};

  border-radius: 4px;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: 2px solid ${({ inverse }) => (inverse ? "#AE7175" : "#fff")};
  position: relative;
  overflow: hidden;

  &:before {
    background: ${({ inverse }) => (inverse ? "#B77076" : "#fff")};
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    /* transform:translate(-50%,-50%); */
    transform: translate(-50%, -50%) rotate(45deg);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0;
  }
    &:hover:before {
      height: 500%;
    }

    &:hover {
      color: ${({ inverse }) => (inverse ? "#fff" : "#AE7175")};
    }

`;
