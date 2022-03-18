import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { setAuth } from "../../redux/authSlice";
import { AuthenticatorForm } from "./AuthenticatorForm";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);
  const [loginData, setLoginData] = useState<{
    id: number;
    secret?: string;
    otpauth_url?: string;
  }>({
    id: 0,
  });

  const success = () => {
    setRedirect(true);
    dispatch(setAuth(true));
  };

  // redirect to home on successful form submission
  if (redirect) return <Navigate to="/" />;

  let form;

  if (loginData?.id === 0) {
    form = <LoginForm setLoginData={setLoginData} />;
  } else {
    form = <AuthenticatorForm success={success} loginData={loginData} />;
  }

  return <main className="form-signin">{form}</main>;
};
