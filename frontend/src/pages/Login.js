import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/session";
export default function Login() {
  const navigate = useNavigate();
  const session = useSelector((state) => state.session);
  const urlParams = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
  const email = urlParams.get("email");
  const password = urlParams.get("password");
  const user = session.user;

  if (email && password && !user) {
    dispatch(login(email, password));
  }
  navigate("/");

  return null;
}
