import React, { useState } from "react";
import Navbar from "./UI/Navbar";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch();
  };

  if (isAuthenticated) {
    navigate("/");
    return;
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="border border-solid border-slate-300 p-10 w-96">
          <h1 className="text-2xl font-bold">Вход в аккаунт</h1>
          <form className="flex flex-col gap-3 mt-3" onSubmit={loginUser}>
            <Input
              label="Почта*"
              placeholder="Введите вашу почту"
              type="email"
              required="required"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Пароль*"
              placeholder="Введите пароль"
              type="password"
              required="required"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button theme="black">Зарегистрироваться</Button>
            <p className="text-sm flex flex-col justify-center items-center">
              Еше нет аккаунта?
              <Link
                to="/register"
                className="text-sm text-slate-500 underline decoration-dotted"
              >
                Давайте создадим его вместе!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
