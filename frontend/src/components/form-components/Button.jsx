import React from "react";

export default function Button({ children, className, onClick }) {
  return (
    <button
      className={`bg-sky-600 text-white rounded-md p-2 mt-4 ${className}`}
    >
      {children}
    </button>
  );
}
