import React, { useRef, useState } from "react";
import { FaRegImages } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";

export default function CreateReport() {
  const [image, setImage] = useState("");
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div>
      {image ? (
        <img src={URL.createObjectURL(image)} alt="fish" />
      ) : (
        <>
          <input
            type="file"
            onChange={handleImageChange}
            className="hidden"
            ref={inputRef}
          />
          <button
            type="button"
            onClick={handleButtonClick}
            className="w-40 h-40 border-dashed border-2 border-gray-400 rounded-xl text-gray-400 m-auto hover:text-sky-600 hover:border-sky-600"
          >
            <div className="flex justify-center gap-2">
              <IoAdd className="text-5xl" />
              <FaRegImages className="text-5xl" />
            </div>
          </button>
        </>
      )}
    </div>
  );
}
