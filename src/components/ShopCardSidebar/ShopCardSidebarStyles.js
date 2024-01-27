import styled from "styled-components";
import { Column } from "../../globalStyles";

export const ShopCardSection = styled.div`
  width: 600px; //400
  height: 100vh;
  /* background: #fff; */
  background: #ae7175;
  // background: #ee7989;
  // box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  /* position: absolute; */
  position: fixed;
  top: 0;
  right: 0;
  /*   
   transition: all 1s ease; */
  z-index: 50;
`;

export const ShopCardColumn = styled(Column)`
  padding: 1.2rem;
  height: 90%;
  width: 100%;
`;
export const ShopCardSide = styled.ul`
  list-style: none;
  height: 60%;
  margin-top: 50px;
  border-bottom: 1px solid #d1d5db;
  overflow-y: auto;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    outline: 1px solid #fff;
    border-radius: 1rem;
  }
`;

export const ShopCardItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-right: 1rem;
`;
export const ImgItem = styled.div`
  width: 30%;
`;
export const Img = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 0.4rem;
`;
export const ShopCardTitle = styled.span`
  margin: 0.6rem 0 0 1rem;
  text-align: start;
  align-self: flex-start;
  font-size: 1.2rem;
  line-height: 24px;
  /* font-weight: 600; */
  color: #fff;
`;

export const ShopCardWrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
`;
export const ShopCardWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d1d5db;
  width: 100%;
  margin: auto 0;
  align-items: stretch;
  height: 60px;
`;
export const ShopCardTextWrapper = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  margin: auto 0;
`;
export const ShopCardPrice = styled.span`
  color: #fff;
  font-size: 17px;
  letter-spacing: 1px;
  text-align: end;
  margin-bottom: 9px;
`;
export const ShopCardText = styled.span`
  font-size: 17px;
  // color: #d1d5db;
  color: #ffcbc3;
  letter-spacing: 1px;
  line-height: 24px;
`;
export const ShopCardSubtotal = styled.span`
  font-size: 17px;
  letter-spacing: 1px;
`;
export const ShopCardShippingFee = styled.span`
  font-size: 17px;
  letter-spacing: 1px;
`;
export const ShopCardTotal = styled.span`
font-size: 1.6rem;
  letter-spacing: 1px;
`;

export const ShopCardButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  background: #fff;
  width: 70px;
`;
export const ShopCartButton = styled.button`
  color: #adaaa5;
  outline: none;
  width: auto;
  height: 100%;
  font-size: 1.3rem;
  white-space: nowrap;
  overflow: hidden;
  /* padding: 3px 6px 4px 6px; */

  text-decoration: none;
  cursor: pointer;
  text-align: center;
  background: #ffffff;
  border: none;
  /* border: 1px solid #D1D5DB; */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  &:nth-of-type(1) {
    border-radius: 0.5rem 0 0 0.5rem;
    padding: 3px 6px;
  }
  &:nth-of-type(2) {
    border-radius: 0 0.5rem 0.5rem 0;
    padding: 3px 6px 4px 6px;
  }

  &:hover {
    color: #000;
  }
`;
export const ShopCartCount = styled.span`
  text-align: center;
  padding: 0 7px;
  font-size: 1.1rem;
`;
