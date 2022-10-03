import React from "react";
import AuthInput from "../auth-input/AuthInput";
import AuthButton from "../auth-button/AuthButton";
import {
  formToggle,
  IForm,
} from "../../../../../store/slices/authorization-slice/types";
import { onForm, onToggleForm } from "../../../../../hooks/auth-form";
import { Dispatch, Selector } from "../../../../../store/store";
import Logo from "../../../../../assets/logo/logo.png";
import styles from "./AuthForm.module.scss";

interface IProps {
  typeForm: IForm;
  email: string;
  password: string;
  error: string;
}

const AuthForm: React.FC<IProps> = ({ typeForm, email, password, error }) => {
  const auth: boolean = Selector((state) => state.authorization.auth);
  const dispatch = Dispatch();
  return (
    <form className={styles.form}>
      {typeForm === formToggle.SIGN_IN ? (
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.head}>
              <img src={Logo} alt="Logo" />
            </div>
            <div className={styles.body}>
              <h2>Sign In to Pelecard</h2>
              <p>
                New Here?
                <button>Create an Account</button>
              </p>
              <AuthInput error={error} value={email} label="Email" type="text" />
              <AuthInput error={error} value={password} label="Password" type="password" />
              <AuthButton
                onClick={(e) => onForm(formToggle.SIGN_IN, dispatch, e)}
                text="Sign In"
              />
              <p className={styles.footer}>כל הזכויות שמורות לחברת פלאקארד ©</p>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className={styles.content}>
            {error ? <p>{error}</p> : null}
            <div className={styles.head}>
              <img src={Logo} alt="Logo" />
            </div>
            <div className={styles.body}>
              <h2>Sign Up to Pelecard</h2>
              <p>
                Have account?
                <button
                  onClick={(e) => onToggleForm(formToggle.SIGN_IN, dispatch, e)}
                >
                  Login in Account
                </button>
              </p>
              <AuthInput value={email} label="Email" type="text" />
              <AuthInput value={password} label="Password" type="password" />
              <AuthButton
                onClick={(e) => onForm(formToggle.SIGN_UP, dispatch, e)}
                text="Sign Up"
              />
              <p className={styles.footer}>כל הזכויות שמורות לחברת פלאקארד ©</p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default AuthForm;
