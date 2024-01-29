import React from "react";

export default function TextBoxField({ placeholder, value, onChange, className }) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border-2 border-gray-400 rounded-md p-2 ${className}`}
    />
  );
}
