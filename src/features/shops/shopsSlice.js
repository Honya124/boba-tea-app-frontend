import { createSlice } from "@reduxjs/toolkit";
import { shopItemsData } from "../../data/ShopItemsData";
const initialState = {
  shopItemsData,
  shopItem: [],
  totalQuantity: 0,
  totalAmount: 0,
  shippingFee: 9.99,
};

const shopsSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.shopItem.find(
        (el) => Number(el.id) === Number(newItem.id)
      );
      state.totalQuantity = state.totalQuantity + 1;
      if (!existingItem) {
        state.shopItem.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          img: newItem.img,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.shopItem.reduce(
        (total, currentItem) =>
          total + Number(currentItem.quantity) * Number(currentItem.price),0
      ); //similar to ForEach()=== reduce total har variableka datakan ka lekdan akren axreta nawi
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.shopItem.find(
        (el) => Number(el.id) === Number(id)
      );
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.shopItem = state.shopItem.filter((el) => el.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      state.totalAmount = state.shopItem.reduce(
        (total, currentItem) =>
          total + Number(currentItem.quantity) * Number(currentItem.price),
        0 // abet initial value 0
      );
    },

    deleteItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.shopItem.find((el) => el.id === newItem.id);
      if (existingItem) {
        state.shopItem = state.shopItem.filter(
          (el) => el.item.id !== newItem.id
        );
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }
      state.totalAmount = state.shopItem.reduce(
        (total, currentItem) =>
          total + Number(currentItem.quantity) * Number(currentItem.price),
        0
      );
    },
  },
});

export const selectAllShops = (state) => state.shops;
export const { addItemToCart, removeItem, deleteItem } = shopsSlice.actions;

export default shopsSlice.reducer;
