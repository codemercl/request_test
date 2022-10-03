import { Checkbox } from "@mui/material";
import React, { FC, useState } from "react";
import styles from "./ChoiseButton.module.scss";

interface IExport {
  name: string;
  image: string;
  terminals: any;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const ChoiseButton: FC<IExport> = ({ name, image, terminals }) => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.dropdown}>
      <button onClick={() => setOpen(!open)}>
        <img src={image} alt="arrow"></img>
        <span>{name}</span>
      </button>
      <div className={styles.count}>
        <p><span>{terminals.length}</span> מתוך <span>1</span> תוצאות</p>
      </div>
      {open && (
        <div className={styles.content}>
          <div className={styles.field}>
            <input
              onChange={(event: any) => {
                setSearchTerm(event.target.value);
              }}
              type="text"
              placeholder="איתור מסוף"
            />
          </div>
          {terminals
            .filter((val: any) => {
              if (searchTerm === "") {
                return val;
              } else if (val.terminalName.includes(searchTerm)) {
                return val;
              }
            })
            .map((item: any, index: any) => {
              return (
                <div className={styles.buttons} key={index}>
                  <button>
                    <label>
                      {item.terminalName}
                      <Checkbox {...label} />
                    </label>
                  </button>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};
