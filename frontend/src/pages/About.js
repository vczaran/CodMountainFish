import React, { useEffect, useState } from "react";

export default function About() {

  // THIS IS TO TEST THE API
  const [text, setText] = useState("");
  useEffect(() => {
    fetch("/api/example")
      .then((res) => res.json())
      .then((data) => {
        setText(data.Message);
      });
  }, []);
  return <div>{text}</div>;
}
