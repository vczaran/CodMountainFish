import React, { useEffect, useState } from "react";

export default function About() {
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
