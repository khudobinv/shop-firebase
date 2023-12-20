import React from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import Button from "./UI/Button";

const Product = ({ id, photoUrl, title, price, addToCart }) => {

  return (
    <div className="flex flex-col gap-4 p-5 border border-slate-300">
      <img src={photoUrl} alt="" />
      <div className="flex flex-col gap-2 items-between">
        <div className="flex-auto">
          <h1 className="font-bold text-lg flex-initial">{title}</h1>
          <h3 className="font-semibold text-lg">{price} рублей</h3>
        </div>
        <Button theme={"black"} onClick={addToCart}>
          <RiShoppingCart2Line className="mr-5" />В корзину
        </Button>
      </div>
    </div>
  );
};

export default Product;
