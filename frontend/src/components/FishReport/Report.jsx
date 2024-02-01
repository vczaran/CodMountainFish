import React from "react";
import { TiDelete } from "react-icons/ti";

export default function Report({ image, description, date, handleDelete }) {

  return (
    <div className="max-w-[80rem] flex flex-col w-[30rem] relative">
      <TiDelete className="absolute top-0 right-0 text-3xl cursor-pointer hover:text-red-600" onClick={handleDelete} />
      <img className="w-[30rem] rounded-md min-w-96 " src={image} alt="fish" />
      <div className="flex flex-col justify-between pt-4">
        <p className="italic font-bold mb-2">{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
