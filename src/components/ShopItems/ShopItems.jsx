import React from "react";
import { IconContext } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Section } from "../../globalStyles";
import {
  ShopItemsTextWrapper,
  ShopItemTitle,
  ShopItemsWrapper,
  ShopItemsColumn,
  ShopItemsImageWrapper,
  ShopItemsIconWrapper,
  ShopItemsRow,
  Img,
  ShopItemPrice,
  ShopItemsName,
  ShopItemsButton,
  ShopItemsButtonCard,
  ShopItemsIngredients,
  ShopItemsDescriptionWrapper,
} from "./ShopItemsStyles";
// import { shopItemsData } from "../../data/ShopItemsData";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useDispatch} from "react-redux";
import { addItemToCart } from "../../features/shops/shopsSlice";

function ShopItems({ data }) {
  //const currentUser = useSelector((state) => state.auth.currentUser);
  //const isLogedin = useSelector((state) => state.auth.isLogedin);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(
      addItemToCart({
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.img,
      })
    );
  };

  return (
    <IconContext.Provider value={{ color: "#000" }}>
      <Section
        smPadding="50px 10px"
        padding={
          location.pathname.substring(1) === "shops" ? "0 0 80px 0" : "80px 0"
        }
        position="relative"
        inverse
        id="shopItems"
      >
        <Container>
          {location.pathname.substring(1) !== "shops" && (
            <ShopItemsTextWrapper>
              <ShopItemTitle>Grab your Boba Tea </ShopItemTitle>
            </ShopItemsTextWrapper>
          )}
          <ShopItemsWrapper>
            {data.map((item, index) => (
              <ShopItemsColumn key={index}>
                <ShopItemsImageWrapper className={item.imgClass}>
                  <Img src={item.img} />
                </ShopItemsImageWrapper>

                <ShopItemsIconWrapper>
                  {/* size="1rem" color="#0f0f0f" */}
                  <IoIosInformationCircleOutline />
                  <ShopItemsDescriptionWrapper className="activeDesc">
                    <ShopItemsIngredients>
                      Ingredients: {item.ingredients}
                    </ShopItemsIngredients>
                  </ShopItemsDescriptionWrapper>
                </ShopItemsIconWrapper>
                <ShopItemPrice>${item.price}</ShopItemPrice>
                <ShopItemsRow>
                  <ShopItemsName>{item.title}</ShopItemsName>
                  <ShopItemsButtonCard onClick={() => handleAddItem(item)}>
                    Add
                  </ShopItemsButtonCard>
                </ShopItemsRow>
              </ShopItemsColumn>
            ))}
          </ShopItemsWrapper>
          {location.pathname.substring(1) !== "shops" && (
            <ShopItemsButton
              onClick={() => {
               // if (isLogedin && currentUser) {
                  navigate("/shops");
               // }
              }}
            >
              Find More
            </ShopItemsButton>
          )}
        </Container>
      </Section>
    </IconContext.Provider>
  );
}

export default ShopItems;
