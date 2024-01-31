import React from "react";

export default function InputField({ placeholder, type, value, onChange, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border-2 border-gray-400 rounded-md p-2 ${className}`}
    />
  );
}
