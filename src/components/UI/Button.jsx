import React from "react";

const Button = ({ theme, children }) => {
  return <button className={`flex flex-row items-center justify-center ${theme === 'black' ? "bg-slate-950 font-bold text-white hover:bg-slate-800 focus:bg-slate-800" : 'bg-white text-slate-950 hover:bg-slate-100 focus:bg-slate-100'} p-4 uppercase  outline-none `}>{children}</button>;
};

export default Button;
