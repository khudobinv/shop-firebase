import Navbar from "./UI/Navbar";
import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { RiUserLine } from "react-icons/ri";
import Cart from "./Cart";
import CartSource from "./CartSource";

const Main = () => {
  const { user, isAuthenticated } = useAuth();
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col px-24 mt-5">
        <h1 className="text-3xl font-bold">Личный кабинет</h1>
        {isAuthenticated ? (
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-2xl">Добро пожаловать!</h1>
            <div className="flex flex-row items-center gap-3">
              <div className="h-12 w-12 bg-slate-950 rounded-full flex items-center justify-center">
                <RiUserLine className="text-3xl font-bold text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold">{user.displayName}</h1>
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        ) : (
          <h3>
            Вы еще не вошли в аккаунт, вам необходимо{" "}
            <Link
              to="/login"
              className="text-slate-500 underline decoration-dotted"
            >
              войти
            </Link>{" "}
            либо{" "}
            <Link
              to="/register"
              className="text-slate-500 underline decoration-dotted"
            >
              зарегистрироваться
            </Link>
            .
          </h3>
        )}
        <hr className="mt-5" />
      </div>
      <div className="flex flex-col px-24 mt-5">
        <h1 className="text-3xl font-bold">Корзина</h1>
        <CartSource />
        <hr className="mt-5" />
      </div>

    </div>
  );
};

export default Main;
