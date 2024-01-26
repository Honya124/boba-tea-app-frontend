import styled from "styled-components";
import { motion } from "framer-motion";

export const FeaturesImgWrapper = styled(motion.div)`
  width: 90%;
  margin-left: auto;
  

  @media screen and (max-width: 760px) {
    width: 100%;
    transition: all 0.6s ease;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 600px;
  object-fit: contain;
  object-position: center;
`;

