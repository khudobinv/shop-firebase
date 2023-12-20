import React from "react";

const Input = ({ label, placeholder, type, value, onChange, required }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm">{label}</label>
      <input
        className="text-sm border border-solid border-slate-300 p-3 outline-none focus:border-slate-950"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
