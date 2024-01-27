import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
padding:0;
margin: 0;
font-family:'Montserrat',sans-serif;
}

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px; // 0 50

  @media screen and (max-width: 960px) {
    padding: 0 10px; //0 30
  }
`;

export const MainHeading = styled.h1`
  font-size: clamp(
    2.5rem,
    8vw,
    4.7rem
  ); //xoi font'akai 6vw nayalet la 2.3 kamtr w la 4.5 ziatr bet
  margin-bottom: 2rem;
  color: ${({ inverse }) => (inverse ? "#e33a6d" : "#fff")};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);
  margin: ${({ margin }) => (margin ? margin : "")};
  color: ${({ inverse }) => (inverse ? "#B77076" : "#fff")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : "100%")};
`;

export const TextWrapper = styled.span`
  color: ${({ color }) => (color ? color : "")};
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
`;

export const Section = styled.section`
  padding: ${({ padding }) => (padding ? padding : "140px 0")};
  margin: ${({ margin }) => (margin ? margin : "")};
  background: ${({ inverse }) => (inverse ? "#fff" : "#FFCBC3")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  box-shadow: ${({ inverse }) =>
    inverse ? "" : "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)"};

  @media screen and (max-width: 760px) {
    padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
`;

export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 19px;
  color: #fff;
  outline: none;
  border: 2px solid #fff;
  z-index: 1;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:before {
    background: #fff;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    /* transform: translate(-50%, -50%); */
    z-index: -1; // ama wai le akat bkaweta psht button'akai sarway(hide) abet
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    height: 800%;
  }
  &:hover {
    color: var(--btn-color);
  }
`;

export default GlobalStyle;
