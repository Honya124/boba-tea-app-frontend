import { Link } from "react-router-dom";
import { Container } from "./../../globalStyles";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled.nav`
  background: transparent;
  margin-bottom: -80px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1.4rem;
  position: absolute;
  top: 0;
  z-index: 50;
  transition: background-color 0.3s ease-in;
`;
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  height: 80px;
  ${Container}
`;
export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  align-self: baseline;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  background: ${({ inverse }) => (inverse ? inverse : "")};
  opacity: ${({ inverse }) => (inverse ? ".8" : "")};
  border-radius: ${({ inverse }) => (inverse ? "50%" : "")};
  z-index: 50;
`;
export const NavIcon = styled.img`
  /* margin-right: 1rem; */
  width: 17rem;

  @media screen and (max-width: 760px) {
    width: 11rem;
    transition: width 0.2s ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  z-index: 50;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
    padding-top: 10%;
    top: 0;
    left: 0;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    transform: translateY(${({ show }) => (show ? "0" : "-10px")});
    transition: opacity 0.5s ease;
    /* box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);  */
    background-color: #ae7175;
  }
  > li:first-child {
    margin-left: auto;
  }

  svg {
    cursor: pointer;
    font-size: 22px;
    /* &:hover {
      color: #dbbac5;
      transition: all 0.3s ease;
    } */
  }
`;
export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
export const NavLinks = styled.span`
  color: ${({ inverse }) => (inverse ? inverse : "#fff")};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  display: table;
  height: 100%;

  &:hover {
    color:${({ inverse }) => (inverse ? inverse :"#AE7175" )};
    opacity: ${({ inverse }) => (inverse ? "0.5" : "")};
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #fff;

    &:hover {
      /* color: ${({ inverse }) => (inverse ? "" : "#AE7175")}; */
      color: #fff;
      opacity: 0.5;
      transition: all 0.3s ease;
    }
  }
`;
export const NavLinksSHop = styled(motion.span)`
  /* color: ${({ shop }) => (shop ? "#fff" : "#AE7175")}; */
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 1rem 1rem;
  margin: ${({ shop }) => (shop ? "0 1rem" : "")};
  display: table;
  z-index: 70;
  position: ${({ shop }) => (shop ? "absolute" : "")};
  cursor: pointer;
  right: ${({ shop }) => (shop ? 0 : "")};

  @media screen and (max-width: 960px) {
    position: absolute;
    right: ${({ shop }) => (shop ? "0" : "14%")};
    padding: ${({ shop }) => (shop ? "" : "0 1rem")};
    opacity: ${({ show }) => (show ? 0 : 1)};
    visibility: ${({ show }) => (show ? "hidden" : "visible")};
    transition: opacity 0.5s ease;
  }

  /* @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  } */
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
