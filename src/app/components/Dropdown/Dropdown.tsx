import { useState } from "react";
import styles from "./Dropdown.module.scss";

export const Dropdown = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.dropdown}>
      <button onClick={() => setOpen(!open)}>פעולות</button>
      {open && (
        <div className={styles.content}>
          <button onClick={() => alert('עצור שידור')}>עצור שידור</button>
          <button onClick={() => alert('הפעל שידור אוטומטי')}>הפעל שידור אוטומטי</button>
          <button onClick={() => alert('הסר שעת שידור אוטומטי')}>הסר שעת שידור אוטומטי</button>
        </div>
      )}
    </div>
  );
};
