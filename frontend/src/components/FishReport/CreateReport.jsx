import React, { useRef, useState } from "react";
import { useHistory, useNavigate } from "react-router";
import { FaRegImages } from "react-icons/fa";
import { IoAdd } from "react-icons/io5";
import InputField from "../form-components/InputField";
import TextBoxField from "../form-components/TextBoxField";
import Button from "../form-components/Button";

export default function CreateReport({ reports, setReports }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    image: null,
    description: "",
    date: "",
  });
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setForm({ ...form, image });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("date", form.date);
    formData.append("image", form.image);
    formData.append("description", form.description);

    fetch("/api/fish_report", {
      method: "POST",
      body: formData,
    }).then(() => {
      // This is a hacky way to refresh the page
      navigate("/fish-report");
      window.location.reload();
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[80rem] flex flex-col w-[30rem]"
    >
      {/* Extract this? */}
      {form.image ? (
        <img
          src={URL.createObjectURL(form.image)}
          alt="fish"
          className="w-[30rem] rounded-md min-w-96 "
        />
      ) : (
        <>
          <input
            type="file"
            onChange={handleImageChange}
            className="hidden"
            ref={inputRef}
            accept=".png, .jpg, .jpeg"
          />
          <button
            type="button"
            onClick={handleButtonClick}
            className="w-[30rem] min-w-96 h-96 border-dashed border-2 border-gray-400 rounded-xl text-gray-400 m-auto hover:text-sky-600 hover:border-sky-600"
          >
            <div className="flex justify-center gap-2">
              <IoAdd className="text-5xl" />
              <FaRegImages className="text-5xl" />
            </div>
          </button>
        </>
      )}
      <div className="flex flex-col justify-between pt-4 gap-4">
        <InputField
          placeholder="Date"
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <TextBoxField
          placeholder="Description"
          type="text"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className={"h-40"}
        />
      </div>
      <Button>Add Fish Report</Button>
    </form>
  );
}
