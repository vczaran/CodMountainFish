import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { MdEditNote } from "react-icons/md";
import { HiOutlineTrash } from "react-icons/hi";
import InputField from "../form-components/InputField";
import TextBoxField from "../form-components/TextBoxField";
import Button from "../form-components/Button";

export default function Report({
  id,
  image,
  description,
  date,
  handleDelete,
  handleUpdate,
}) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [form, setForm] = useState({
    image,
    description,
    date,
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Report -> form", form, id);
    handleUpdate({ ...form, id });
    setIsUpdating(false);
  }

  console.log("Report -> isUpdating", isUpdating);
  return (
    <div className="max-w-[80rem] flex flex-col w-[30rem] relative">
      {!isUpdating ? (
        <MdEditNote
          className="absolute top-0 right-0 text-3xl cursor-pointer hover:text-blue-700"
          onClick={() => setIsUpdating(true)}
        />
      ) : (
        <TiDelete
          className="absolute top-0 right-0 text-3xl cursor-pointer hover:text-red-600"
          onClick={() => setIsUpdating(false)}
        />
      )}
      {isUpdating && (
        <HiOutlineTrash
          className="absolute top-0 left-0 text-3xl cursor-pointer hover:text-red-600"
          onClick={handleDelete}
        />
      )}
      <img className="w-[30rem] rounded-md min-w-96 " src={image} alt="fish" />
      <div className="flex flex-col justify-between pt-4 gap-2">
        {isUpdating ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between pt-4 gap-2"
          >
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
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className={"h-40"}
            />
            <Button>Update Report</Button>
          </form>
        ) : (
          <>
            <p className="italic font-bold mb-2">{date}</p>
            <p>{description}</p>
          </>
        )}
      </div>
    </div>
  );
}
