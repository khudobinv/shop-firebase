import Navbar from "./UI/Navbar";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "./UI/Button";
import Product from "./Product";
import products from "../products";

const Main = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="px-24 relative">
        <img className="w-full h-full" src="./bg.jpg" alt="" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center px-24">
          <div className="bg-slate-950 opacity-50 h-full w-full flex items-center justify-center relative"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col gap-3 items-center justify-center">
            <h1
              className="text-white font-bold text-3xl text-center"
              style={{ width: "50%" }}
            >
              Спортивная одежда в коллоборации с футбольным клубом "Зенит" уже в
              нашем каталоге!
            </h1>
            <Link to="/catalog">
              <Button>В каталог →</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="px-24 py-10 flex flex-col gap-5">
        <h1 className="text-3xl font-bold uppercase">Последние поступления</h1>
        <div className="grid grid-cols-5 gap-4">
          {products.map(product => (
            <Product title={product.title} price={product.price} photoUrl={product.photoUrl} />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Main;
