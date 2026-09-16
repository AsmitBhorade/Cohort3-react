import { createContext, useState } from "react";

export const MyShop = createContext();

export const MyShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <MyShop.Provider
      value={{ cartItems, setCartItems, isCartOpen, setIsCartOpen }}>
      {children}
    </MyShop.Provider>
  );
};