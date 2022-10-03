import React, { FC, useState } from "react";
import styles from "../Table.module.scss";

import Visa from "../../../../assets/card-icons/Visa.svg";
import Amex from "../../../../assets/card-icons/Amex.svg";
import Diners from "../../../../assets/card-icons/Diners.svg";
import Discover from "../../../../assets/card-icons/Discover.svg";
import Isracard from "../../../../assets/card-icons/Isracard.svg";
import JCB from "../../../../assets/card-icons/JCB.svg";
import Maestro from "../../../../assets/card-icons/Maestro.svg";
import Mastercard from "../../../../assets/card-icons/Mastercard.svg";
import PL from "../../../../assets/card-icons/PL.svg";
import { Checkbox } from "@mui/material";

interface IWrapper {
  item: any;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };


export const Wrapper: FC<IWrapper> = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <p>{item.uid <= 0 ? "0" : item.uid}</p>
        <p>{item.confirmationNumber <= 0 ? "0" : item.confirmationNumber}</p>
        <p>{item.otherPaymentAmount <= 0 ? "0" : item.otherPaymentAmount}</p>
        <p>{item.firstPaymentAmount <= 0 ? "0" : item.firstPaymentAmount}</p>
        <p>{item.paymentsCount <= 0 ? "0" : item.paymentsCount}</p>
        <p>{item.currencyDescription <= 0 ? "0" : item.currencyDescription}</p>
        <p>
          {item.transactionTypeDescription <= 0
            ? "0"
            : item.transactionTypeDescription}
        </p>
        <p>{item.transactionCode <= 0 ? "0" : item.transactionCode}</p>
        <p>
          {item.creditTypeDescription <= 0 ? "0" : item.creditTypeDescription}
        </p>
        <p>{item.ccExpiryDate <= 0 ? "0" : item.ccExpiryDate}</p>
        <p>{item.ccNumber <= 0 ? "0" : item.ccNumber}</p>
        <p>
          {item.ccBrandDescription == "Visa" ? (
            <img src={Visa} alt="card"></img>
          ) : "Amex" ? (
            <img src={Amex} alt="card"></img>
          ) : "Diners" ? (
            <img src={Diners} alt="card"></img>
          ) : "Discover" ? (
            <img src={Discover} alt="card"></img>
          ) : "Isracard" ? (
            <img src={Isracard} alt="card"></img>
          ) : "JCB" ? (
            <img src={JCB} alt="card"></img>
          ) : "Maestro" ? (
            <img src={Maestro} alt="card"></img>
          ) : "Mastercard" ? (
            <img src={Mastercard} alt="card"></img>
          ) : "PL" ? (
            <img src={PL} alt="card"></img>
          ) : (
            "0"
          )}
        </p>
        <p>{item.voucherNumber <= 0 ? "0" : item.voucherNumber}</p>
        <p>{item.createdDate <= 0 ? "0" : item.createdDate}</p>
        <p>{item.terminalNumber <= 0 ? "0" : item.terminalNumber}</p>
        <p onClick={() => setOpen(!open)}>
          <span className={styles.tab}>{open ? "-" : "+"}</span>
        </p>
        <Checkbox {...label} />
        {open && (
          <div className={styles.content}>
            <p>22083015054008825772053 :מזהה עסקה</p>
            <p>0 :קוד מבצע</p>
            <p>500 :קוד המסר</p>
            <p>EMV contactless :מקור נתוני כרטיס</p>
            <p>0 :Z-DATA</p>
            <p>22083014324908825770214: מזהה עסקת מקור</p>
            <p>2203707071 :מזהה חומרה</p>
            <p>1262002746 :מספר עסקה בפלאקארד</p>
            <p>154615779 :ת.ז</p>
            <p>13612087502716 :טוקן</p>
          </div>
        )}
      </div>
    </>
  );
};
