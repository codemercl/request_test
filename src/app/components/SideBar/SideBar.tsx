import React, { FC } from "react";
import styles from "./SideBar.module.scss";
import dashboard from "../../../assets/sidebar-icons/dashboard-icon.png";
import transitions from "../../../assets/sidebar-icons/transitions-icon.png";
import reports from "../../../assets/sidebar-icons/reports-icon.png";
import logo from "../../../assets/logo/logo-small.png";
import { Link } from "react-router-dom";
import {
  formToggle,
  IForm,
} from "../../../store/slices/authorization-slice/types";
import { Dispatch, Selector } from "../../../store/store";
import { onForm } from "../../../hooks/auth-form";

interface IProps {
  typeForm: IForm;
}

export const SideBar: FC<IProps> = ({ typeForm }) => {
  const auth: boolean = Selector((state) => state.authorization.auth);
  const dispatch = Dispatch();
  return (
    <aside className={styles.sidebar}>
      <nav>
        <Link to="/" className={styles.sidebarLogo}>
          <img src={logo} alt="logo" />
          <h2>Pelecard</h2>
        </Link>
        <ul className={styles.sidebarMenu}>
          <li>
            <Link to="/dashboard" style={{pointerEvents: 'none'}}>
              <p>{"<"}</p>
              <span>Dashboard</span>
              <img src={dashboard} alt="icon" />
            </Link>
            <Link to="/">
              <p>{"<"}</p>
              <span>Transitions</span>
              <img src={transitions} alt="icon" />
            </Link>
            <Link to="/reports">
              <p>{"<"}</p>
              <span>Reports</span>
              <img src={reports} alt="icon" />
            </Link>
            <Link to="/">
              <p>{"<"}</p>
              <button onClick={(e) => onForm(formToggle.EXIT, dispatch, e)}>Logout</button>
              <img src={reports} alt="icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
