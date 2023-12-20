import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Navbar from "./UI/Navbar";
import Input from "./UI/Input";
import Button from "./UI/Button";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  const [error, setError] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    if (password !== checkPassword) {
      setError("Пароли не совпадают!");
      setPassword("");
      setCheckPassword("");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name + " " + surname,
      });

      await navigate("/");
    } catch (error) {}
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="border border-solid border-slate-300 p-10 w-96">
          <h1 className="text-2xl font-bold">Регистрация аккаунта</h1>
          <form className="flex flex-col gap-3 mt-3" onSubmit={registerUser}>
            <Input
              label="Имя*"
              placeholder="Введите ваше имя"
              type="text"
              required="required"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Фамилия"
              placeholder="Введите вашу фамилию"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
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
              placeholder="Введите пароль (не менее 6 символов)"
              type="password"
              required="required"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Пароль еще раз*"
              placeholder="Повторите пароль еще раз"
              type="password"
              required="required"
              value={checkPassword}
              onChange={(e) => setCheckPassword(e.target.value)}
            />
            <Button theme={'black'}>Зарегистрироваться</Button>
            <p className="text-sm flex flex-col justify-center items-center">
              Уже есть аккаунт?
              <Link
                to="/login"
                className="text-sm text-slate-500 underline decoration-dotted"
              >
                Войдите в него!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
