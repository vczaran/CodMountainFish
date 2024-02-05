import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/session";

export default function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(logout());
  navigate("/");
  return null;
}
