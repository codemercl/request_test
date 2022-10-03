import Checkbox from "@mui/material/Checkbox";
import { FC, useState } from "react";

import styles from "./Table.module.scss";
import { Wrapper } from "./Wrapper/Wrapper";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface ITable {
  data: any;
}

export const Table: FC<ITable> = ({ data }) => {
  return (
    <div className={styles.table}>
      <div className={styles.head}>
        <p>פרטים נוספים</p>
        <p>מספר אישור</p>
        <p>תשלום קבוע</p>
        <p>תשלום ראשון</p>
        <p>מס' תש</p>
        <p>סוג אשראי</p>
        <p>סוגעסקה</p>
        <p>סכוםהעסקה ומטבעה</p>
        <p>חברה סולקת</p>
        <p>תוקף</p>
        <p>מספר כרטיס</p>
        <p>מותג</p>
        <p>מספר שובר</p>
        <p>תאריך ושעה</p>
        <p>מספר מסוף</p>
        <p></p>
        <Checkbox {...label} />
      </div>
      <div className={styles.body}>
        {data.map((item: any, index: any) => (
          <div key={index}>
            <Wrapper item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
