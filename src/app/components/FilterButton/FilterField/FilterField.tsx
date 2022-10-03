import React, { FC, useState } from "react";
import styles from "./FilterField.module.scss";

interface IFilterField {
  text: string;
}

export const FilterField: FC<IFilterField> = ({ text }) => {
  const [search, setSearch] = useState("");

  const handlerField = (e: any) => {
    setSearch(e.target.value)
    console.log(search)
  };


  return (
    <div className={styles.filterField}>
      <label>{text}</label>
      <input onChange={handlerField} type="number" id="test"></input>
    </div>
  );
};
