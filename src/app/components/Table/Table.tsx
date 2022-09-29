import Checkbox from "@mui/material/Checkbox";
import styles from "./Table.module.scss";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Table = () => {
  return (
    <div className={styles.table}>
      <div className={styles.head}>
        <p>פרטים נוספים</p>
        <p>מספר אישור</p>
        <p>תשלום קבוע</p>
        <p>תשלום ראשון</p>
        <p>מס' תש</p>
        <p>סוג אשראי</p>
        <p>סוג עסקה</p>
        <p>סכוםהעסקה ומטבעה</p>
        <p>חברה סולקת</p>
        <p>תוקף</p>
        <p>מספר כרטיס</p>
        <p>מותג</p>
        <p>מספר שובר</p>
        <p>תאריך ושעה</p>
        <p>מספר מסוף</p>
        <Checkbox {...label} />
      </div>
      <div className={styles.body}>
        <p>c64kav030075634145</p>
        <p>6031101</p>
        <p>41.66</p>
        <p>41.70</p>
        <p>1</p>
        <p>רגיל</p>
        <p>CONTACTLESS</p>
        <p>25000.59</p>
        <p>ישראכארד</p>
        <p>12/23</p>
        <p>****2169</p>
        <p>image</p>
        <p>32-001-002</p>
        <p>30/08/2022 13:05:58</p>
        <p>0882577012</p>
        <Checkbox {...label} />
      </div>
    </div>
  );
};
