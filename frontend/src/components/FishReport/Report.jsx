import React from "react";

export default function Report({ image, description, date }) {
  return (
    <div className="max-w-[80rem] flex flex-col w-[30rem]">
      <img className="w-[30rem] rounded-md min-w-96 " src={image} alt="fish" />
      <div className="flex flex-col justify-between pt-4">
        <p className="italic font-bold mb-2">{date}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
