import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import
export default function Login() {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  // const dispatch = useDispatch();
  const email = urlParams.get("email");
  const password = urlParams.get("password");

  if (email && password) {

  }
  else navigate("/");

  return <div></div>;
}
