import styled from "styled-components";

export const ShopItemsTextWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;
  padding: 0 0 20px;
`;
export const ShopItemTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, 15vw, 3.3rem);
  //color: #9c1d3b;
  color: #AE7175;
  letter-spacing: 0.2rem;
  line-height: 1.06;
  margin: auto;
`;
export const ShopItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
  margin-top: 4rem;
`;
export const ShopItemsColumn = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
  border-radius: 0.3rem;
  padding: 1.6rem;
  box-shadow: 0 0 32px 8px #d0d0d0;
`;

export const ShopItemsIconWrapper = styled.div`
  margin-left: auto;
  font-size: 1.6rem;

  &:hover {
    .activeDesc {
      visibility: visible;
      opacity: 1;
      transition: opacity 0.3s ease;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
export const ShopItemsDescriptionWrapper = styled.div`
  position: absolute;
  top: 4.4rem;
  right: 3rem;
  background: rgba(167,108,112, 0.6);
  color: #fff;
  width: 200px;
  padding: 10px;
  border-radius: 0.3rem 0.3rem 0 0.3rem;
  backdrop-filter: blur(10px);
  visibility: hidden;
  opacity: 0;
`;

export const ShopItemsIngredients = styled.p`
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: 0.01rem;
  width: 100%;
  /* font-size: 50; */
`;

export const ShopItemsImageWrapper = styled.div`
  width: 155px;
  margin-bottom: 0.5rem;
  border: 1px solid #AE7175;
  border-radius: 50%;
  background: #AE7175;
`;
export const Img = styled.img`
  width: 100%;
  height: 155px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  z-index: -1;
`;

export const ShopItemPrice = styled.p`
  margin-right: auto;
  letter-spacing: 1px;
  font-size: 1.1rem;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ShopItemsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  column-gap: 2rem;
`;
export const ShopItemsName = styled.h3`
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 1.3px;
  color: #AE7175;
  text-transform: capitalize;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const ShopItemsButton = styled.button`
  margin-top: 3rem;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  background: #B77076;
  color: #fff;
  padding: 12px 22px;
  outline: none;
  overflow: hidden;
  text-align: center;
  border: 2px solid #AE7175;
  white-space: nowrap;
  border-radius: 4px;
  font-size: 1rem;
  text-transform: capitalize;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: 0.9px;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &:before {
    background: #fff;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    transition: all 0.6s ease;
    height: 0%;
    width: 100%;
    transform: translate(-50%, -50%) rotate(45deg);

  
  }

  &:hover:before {
    height: 500%;
  }
 

  &:hover {
    color: #AE7175;
  }
`;
export const ShopItemsButtonCard = styled.button`
  background: #AE7175;
  min-width: 42px;
  min-height: 30px;
  border-radius: 0.2rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 0.8rem;

  &:hover{
    color: #fff;
  }
`;
