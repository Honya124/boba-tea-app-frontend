import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { BsShop } from "react-icons/bs";
// import { IconContext } from "react-icons"; //for color icon
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavLinksSHop,
  NavItem,
} from "./NavbarStyles";
import { useLocation, useNavigate } from "react-router-dom";
import { data } from "../../data/NavbarData";
import ShopCardSidebar from "../ShopCardSidebar/ShopCardSidebar";

function Navbar() {
  const [show, setShow] = useState(false);
  const [shop, setShop] = useState(false);
  let history = useNavigate();
  let location = useLocation();

  const handleClick = () => setShow(!show);
  const handleShopClick = () => setShop(!shop);

  // const scrollTo = (id) => {
  //   console.log(id);
  //   const element = document.getElementById(id);
  //   {
  //     element &&
  //       element.scrollIntoView({
  //         behavior: "smooth",
  //       });
  //   }
  // };
  const closeMobileMenu = (to, id) => {
    // if (id && location.pathname === "/") {
    //   scrollTo(id);
    // }
    history(to);
    setShow(false);
  };
  return (
    // <IconContext.Provider  value={{color:"#fff"}}>
    <Nav>
      <NavbarContainer>
        <NavLogo
          to="/"
          inverse={location.pathname.substring(1) === "shops" ? "#AE7175" : ""}
        >
          <NavIcon src="./assets/bobaLogo.png" alt="logo" />
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {show ? (
            <FaTimes color="#fff" />
          ) : (
            <CgMenuRight
              color={
                location.pathname.substring(1) === "shops" ? "#AE7175" : "#fff"
              }
            />
          )}
        </MobileIcon>
        <NavMenu show={show}>
          {data.map((el, index) => (
            <NavItem key={index}>
              <NavLinks
                onClick={() => closeMobileMenu(el.to, el.id)}
                inverse={
                  location.pathname.substring(1) === "shops" ? "#AE7175" : ""
                }
              >
                {el.text}
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
        <NavLinksSHop
          onClick={handleShopClick}
          whileHover={{ rotate: 20, scale: 1.02 }}
          transition={{ duration: 0.5 }}
          shop={shop}
          show={show}
        >
          {shop ? (
            <FaTimes color="#fff" />
          ) : (
            <BsShop
              color={
                location.pathname.substring(1) === "shops" ? "#AE7175" : "#fff"
              }
            />
          )}
        </NavLinksSHop>
        {shop && <ShopCardSidebar shop={shop} />}
      </NavbarContainer>
    </Nav>
    // </IconContext.Provider>
  );
}

export default Navbar;
