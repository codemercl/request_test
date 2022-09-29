import React, { FC, useState } from "react";
import styles from "./FilterSelect.module.scss";

interface IFilterSelect {
  text: string;
  image: string;
  name: string;
}

export const FilterSelect: FC<IFilterSelect> = ({ text, image, name }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.filterSelect}>
      <p>{name}</p>
      <button onClick={() => setOpen(!open)}>
        <img src={image} alt="arrow" />
        <span>{text}</span>
      </button>
      {open && (
        <div className={styles.content}>
          <button onClick={() => alert("עצור שידור")}>עצור שידור</button>
          <button onClick={() => alert("הפעל שידור אוטומטי")}>
            הפעל שידור אוטומטי
          </button>
          <button onClick={() => alert("הסר שעת שידור אוטומטי")}>
            הסר שעת שידור אוטומטי
          </button>
        </div>
      )}
    </div>
  );
};
