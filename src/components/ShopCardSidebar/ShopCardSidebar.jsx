import React from "react";

import {
  ShopCardSection,
  ShopCardColumn,
  ShopCardSide,
  ShopCardItem,
  ImgItem,
  Img,
  ShopCardTitle,
  ShopCardTextWrapper,
  ShopCardWrapper,
  ShopCardWrapperItem,
  ShopCardPrice,
  ShopCardText,
  ShopCardSubtotal,
  ShopCardShippingFee,
  ShopCardTotal,
  ShopCardButtonWrapper,
  ShopCartButton,
  ShopCartCount,
} from "./ShopCardSidebarStyles";
import { Button } from "../../globalStyles";
// import { IconContext } from "react-icons"; //for color icon
import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, removeItem } from "../../features/shops/shopsSlice";
function ShopCardSidebar({ shop }) {
  const itemData = useSelector((state) => state.shops.shopItem); //bang krdnawai state'akana
  const totalAmount = useSelector((state) => state.shops.totalAmount);
  const shippingFee = useSelector((state) => state.shops.shippingFee);
  const dispatch = useDispatch();

  const handleQuantityIncrement = ({ id, title, price, img }) => {
    dispatch(
      addItemToCart({
        id,
        title,
        price,
        img,
      })
    );
  };
  const handleQuantityDecrement = (id) => {
    dispatch(removeItem(id));
  };
  return (
    // <IconContext.Provider value={{ color: "red" }}>
    <ShopCardSection shop={shop}>
      <ShopCardColumn>
        <ShopCardSide>
          {itemData.map((el, index) => (
            <ShopCardItem key={index}>
              <ImgItem>
                <Img src={el.img} />
              </ImgItem>
              <ShopCardTitle>{el.title}</ShopCardTitle>

              <ShopCardWrapperItem>
                <ShopCardPrice>${Number(el.totalPrice)}</ShopCardPrice>
                <ShopCardButtonWrapper>
                  <ShopCartButton
                    onClick={() =>
                      handleQuantityIncrement({
                        id: el.id,
                        title: el.title,
                        price: el.price,
                        img: el.img,
                      })
                    }
                  >
                    +
                  </ShopCartButton>
                  <ShopCartCount>{el.quantity}</ShopCartCount>
                  <ShopCartButton
                    onClick={() => handleQuantityDecrement(el.id)}
                  >
                    –
                  </ShopCartButton>
                </ShopCardButtonWrapper>
              </ShopCardWrapperItem>
            </ShopCardItem>
          ))}
        </ShopCardSide>

        <ShopCardWrapper>
          <ShopCardTextWrapper>
            <ShopCardText>Subtotal</ShopCardText>
            <ShopCardSubtotal>${totalAmount}</ShopCardSubtotal>
          </ShopCardTextWrapper>
          <ShopCardTextWrapper>
            <ShopCardText>Shipping Fee</ShopCardText>
            <ShopCardShippingFee>${shippingFee}</ShopCardShippingFee>
          </ShopCardTextWrapper>
        </ShopCardWrapper>

        <ShopCardTextWrapper>
          <ShopCardText>Total</ShopCardText>
          <ShopCardTotal>${Number(totalAmount + shippingFee)}</ShopCardTotal>
        </ShopCardTextWrapper>
        <Button inverse>Order Now</Button>
      </ShopCardColumn>
    </ShopCardSection>
    // </IconContext.Provider>
  );
}

export default ShopCardSidebar;
