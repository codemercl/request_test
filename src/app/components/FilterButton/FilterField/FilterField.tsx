import React, { FC } from "react";
import styles from "./FilterField.module.scss";

interface IFilterField {
  text: string;
}

export const FilterField: FC<IFilterField> = ({ text }) => {
  return (
    <div className={styles.filterField}>
      <label>{text}</label>
      <input type="text" id="test"></input>
    </div>
  );
};
