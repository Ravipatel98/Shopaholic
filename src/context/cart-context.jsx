import React, { createContext, useReducer } from "react";
import cartReducer, { sumItems } from "./cart-reducer";

const cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export const CartContext = createContext();

const initialState = {
  cartItems: cartFromStorage,
  ...sumItems(cartFromStorage),
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  //create action creator function to add product to cart

  const addProduct = (product) =>
    dispatch({ type: "ADD_ITEM", payload: product });
  const increase = (product) =>
    dispatch({ type: "INCREASE", payload: product });
  const decrease = (product) =>
    dispatch({ type: "DECREASE", payload: product });
  const removeProduct = (product) =>
    dispatch({ type: "REMOVEPRODUCT", payload: product });
  const clear = () => dispatch({ type: "CLEAR" });

  const contextValues = {
    ...state,
    addProduct,
    increase,
    decrease,
    clear,
    removeProduct,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
