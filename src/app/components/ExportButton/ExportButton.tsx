import React, { FC, useState } from "react";
import styles from "./ExportButton.module.scss";

interface IExport {
  name: string;
  image: string;
}

export const ExportButton: FC<IExport> = ({ name, image }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.dropdown}>
      <button onClick={() => setOpen(!open)}>
        <span>{name}</span>
        <img src={image}></img>
      </button>
      {open && (
        <div className={styles.content}>
          <button onClick={() => alert("שלח למייל")}>שלח למייל</button>
          <button onClick={() => alert("EXCEL- יצוא ל")}>EXCEL- יצוא ל</button>
          <button onClick={() => alert("CSV- יצוא ל")}>CSV- יצוא ל</button>
          <button onClick={() => alert("PDF- יצוא ל")}>PDF- יצוא ל</button>
          <button onClick={() => alert("יצוא למדפסת")}>יצוא למדפסת</button>
          <button onClick={() => alert("תצוגה")}>תצוגה</button>
        </div>
      )}
    </div>
  );
};
