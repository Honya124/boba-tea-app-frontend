import React from "react";
import ShopItems from "../components/ShopItems/ShopItems";
// import { shopItemsData } from "../data/ShopItemsData";
import { useSelector } from "react-redux";
import { selectAllShops } from "../features/shops/shopsSlice";

function SampleShopItems() {

  const getShopsData=useSelector(selectAllShops)
  return <ShopItems data={getShopsData && getShopsData.shopItemsData.slice(0, 8)} />;
}

export default SampleShopItems;
