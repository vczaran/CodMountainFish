import React from "react";

export default function Report({ image, description, date }) {
  return (
    <div className="max-w-[80rem] flex min-w-[1080px]">
      <img className="w-96 rounded-md min-w-96 max-h-[480px]" src={image} alt="fish" />
      <div className="flex flex-col pl-5 justify-between">
        <p>{description}</p>
        <p className="place-self-end text-gray-500 italic">{date}</p>
      </div>
    </div>
  );
}
