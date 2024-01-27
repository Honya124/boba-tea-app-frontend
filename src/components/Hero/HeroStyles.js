import { Button } from "../../globalStyles";
import styled from "styled-components";

export const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(72px, 27vh, 222px);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2); // aw inset wata shadow bo bka bo nawawa nak darawa
`;

export const HeroBackgroundColor = styled.div`
  background: #ffcbc3;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: -2;
`;
export const HeroVideo = styled.video`
  object-fit: cover;
  width: 50%;
  height: 100%;
  /* background: linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0.1)); */
  top: 0;
  right: 0;
  position: absolute;

  z-index: -1; // wata ba bkaweta zherawai har shtek danra
  transition: all 0.5s ease;
  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(1.1rem, 1.7vw, 1.5rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
  color: var(--btn-color);
  z-index: 1;
 
  &:before {
    background: #fff;
    height: 500%;
  }

  &:hover:before {
    height: 0%;
    
  }
  &:hover {
    color: #fff;
  }
`;
