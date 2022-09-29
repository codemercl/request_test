import React from "react";
import AuthForm from "./auth-components/auth-form/AuthForm";
import { IForm } from "../../../store/slices/authorization-slice/types";
interface IProps {
  typeForm: IForm;
  email: string;
  password: string;
  error: string;
}
const Auth: React.FC<IProps> = ({ typeForm, email, password, error }) => {
  return (
    <AuthForm typeForm={typeForm} email={email} password={password} error={error} />
  );
};

export default Auth;
