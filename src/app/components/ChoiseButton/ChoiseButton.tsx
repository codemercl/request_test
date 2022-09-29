import { Checkbox } from "@mui/material";
import React, { FC, useState } from "react";
import styles from "./ChoiseButton.module.scss";

interface IExport {
  name: string;
  image: string;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const ChoiseButton: FC<IExport> = ({ name, image }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.dropdown}>
      <button onClick={() => setOpen(!open)}>
        <img src={image}></img>
        <span>{name}</span>
      </button>
      {open && (
        <div className={styles.content}>
          <button>
            <label>
              הכל
              <Checkbox {...label} />
            </label>
          </button>
          <button>
            <label>
              0882577012 - שם מסוף
              <Checkbox {...label} />
            </label>
          </button>
          <button>
            <label>
              07725111012 - שם מסוף
              <Checkbox {...label} />
            </label>
          </button>
          <button>
            <label>
              0880007012 - שם מסוף -
              <Checkbox {...label} />
            </label>
          </button>
          <button>
            <label>
              0882377012 - שם מסוף
              <Checkbox {...label} />
            </label>
          </button>
          <button>
            <label>
              0882577012 - שם מסוף
              <Checkbox {...label} />
            </label>
          </button>
        </div>
      )}
    </div>
  );
};
