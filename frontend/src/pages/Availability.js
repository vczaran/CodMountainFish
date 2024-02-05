import React from "react";
import Calendar from "../components/Calendar/Calendar";
import Trip from "../components/Trip/Trip";

export default function Availability() {
  return (
    <div className="">
      <div className="h-[auto]"><Calendar /></div>
      <Trip />
    </div>
  )

  }
