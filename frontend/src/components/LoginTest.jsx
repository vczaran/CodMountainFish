import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/session";

export default function LoginTest() {
  const dispatch = useDispatch();
  function logIn() {
    dispatch(login("admin@email.com", "password"));
  }

  function logOut() {
    dispatch(logout());
  }
  return (
    <div>
      <button onClick={logIn}>LOGIN</button>
      <button onClick={logOut}>LOGOUT</button>
    </div>
  );
}
