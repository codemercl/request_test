import React from "react";
import { Dispatch } from "../../../../../store/store";
import {
  changeLogin,
  changePassword,
} from "../../../../../store/slices/authorization-slice/authorization-slice";
interface IProps {
  value: string;
  type: string;
  label: string;
}

const AuthInput: React.FC<IProps> = ({ value, type, label }) => {
  const dispatch = Dispatch();
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) =>
          type === "text"
            ? dispatch(changeLogin(e.target.value))
            : dispatch(changePassword(e.target.value))
        }
      />
    </>
  );
};

export default AuthInput;
