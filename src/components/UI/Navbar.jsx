import { Link } from "react-router-dom";
import {
  RiUserLine,
  RiShoppingCart2Line,
  RiLogoutBoxLine,
} from "react-icons/ri";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuth } from "../../AuthContext";

const Navbar = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const signOutUser = () => {
    signOut(auth).catch((error) => console.log(error));
    navigate("/login");
  };

  return (
    <nav className="border-y-2 border-solid border-slate-200 py-5 px-24 flex flex-row items-center justify-between">
      <Link to="/">
        <h1 className="font-bold capitalize text-2xl">Your Brand</h1>
      </Link>
      <div className="flex flex-row items-center gap-5">
        <Link to="/catalog">
          <p className="font-semibold uppercase text-xl hover:underline hover:decoration-dotted">
            Каталог
          </p>
        </Link>
        <Link to="/about">
          <p className="font-semibold uppercase text-xl hover:underline hover:decoration-dotted">
            О нас
          </p>
        </Link>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <button>
          <Link to="/account">
            <RiUserLine className="text-2xl font-bold" />
          </Link>
        </button>
        <button>
          <Link to="/cart">
            <RiShoppingCart2Line className="text-2xl font-bold" />
          </Link>
        </button>
        {isAuthenticated && (
          <button onClick={signOutUser}>
            <RiLogoutBoxLine className="text-2xl font-bold rotate-180" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
