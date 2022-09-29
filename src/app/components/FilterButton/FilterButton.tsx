import React, { FC, useState } from "react";
import styles from "./FilterButton.module.scss";
import { FilterField } from "./FilterField/FilterField";
import { FilterSelect } from "./FilterSelect/FilterSelect";
import Arrow from "../../../assets/button-group/arrow-icon.png";
import { FilterSwitch } from "./FilterSwitch/FilterSwitch";
import { FilterSlider } from "./FilterSlider/FilterSlider";

interface IFilter {
  name: string;
  image: string;
}

export const FilterButton: FC<IFilter> = ({ name, image }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.dropdown}>
      <button onClick={() => setOpen(!open)}>
        <span>{name}</span>
        <img src={image}></img>
      </button>
      {open && (
        <div className={styles.content}>
          <h2>סנן לפי</h2>
          <div className={styles.fields}>
            <FilterSelect text="חברה סולקת" name="כל החברות" image={Arrow} />
            <FilterSelect text="קופה / סוכן" name="כל הקופות" image={Arrow} />
            <FilterField text=":מספר ריכוז" />
            <FilterField text="סכום עסקה" />
            <FilterField text="מספר כרטיס" />
            <FilterField text=":פרטים נוספים" />
          </div>
          <div className={styles.swith}>
            <FilterSwitch />
          </div>
          <div className={styles.slider}>
            <FilterSlider />
          </div>
        </div>
      )}
    </div>
  );
};
