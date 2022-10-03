import React from "react";
import { Dispatch } from "../../../../../store/store";
import {
  changeLogin,
  changePassword,
} from "../../../../../store/slices/authorization-slice/authorization-slice";
import { Link } from "react-router-dom";
import styles from "./AuthInput.module.scss";

interface IProps {
  value: string;
  type: string;
  label: string;
  error?: string;
}

const AuthInput: React.FC<IProps> = ({ value, type, label, error }) => {
  const dispatch = Dispatch();
  return (
    <>
      <div className={styles.forgot}>
        <label>{label}</label>
        {type === "password" && <Link to="forgot">Forgot Password ?</Link>}
        <span>{error && "incorrectly entered data in the field"}</span>
      </div>
      <input
        type={type}
        value={value}
        className={error && styles.errorInput}
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
