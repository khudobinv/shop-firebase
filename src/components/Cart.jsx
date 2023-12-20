import React from "react";
import Navbar from "./UI/Navbar";
import CartSource from "./CartSource";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div className="py-10 px-24">
        <div className="text-3xl font-bold">
            Корзина
        </div>
        <CartSource />
      </div>
    </div>
  );
};

export default Cart;
