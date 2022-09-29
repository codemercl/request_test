import React, { FC, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Export from "../../../assets/button-group/export-icon.png";
import Arrow from "../../../assets/button-group/arrow-icon.png";
import Filter from "../../../assets/button-group/filter-icon.png";

import {
  Dropdown,
  SideBar,
  Table,
  ActionButton,
  ExportButton,
  FilterButton,
  Button,
  ChoiseButton,
} from "../../components";

import styles from "./Transactions.module.scss";
import axios from "axios";

export const Transactions = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const onClickHandler = (e: any) => {
    alert();
  };

  const [appState, setAppState] = useState([]);
  console.log(setAppState);

  useEffect(() => {
    axios
      .get(
        "https://portal.pelecard.biz/api/Transactions?FromCreatedDate=2021-02-01T01:00:00&ToCreatedDate=2022-02-10T00:00:00&Terminals=0882577012, 0883577010&PageNumber=11",
        {
          headers: {
            Authorization:
              "Bearer " +
              "eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJwb3J0YWx0ZXN0dXNlckBwZWxlY2FyZC5iaXoiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsImV4cCI6MTY2NDQ1Nzk5OX0.P4ppdCA1t9_U7vwp63ZnY58YR6vwh3FBWgZpOdy__Ii7H_V-dGc2WkDMB033vqWyvsPbOFXiFVmM5Icp14UyjA",
          },
        }
      )
      .then((res: any) => {
        const allPersons: any = res.data;
        setAppState(allPersons);
      });
  }, [setAppState]);
  const obj = {};
  return (
    <div className={styles.transactions}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.tabs}>
            <TabContext value={value}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "24px 24px 0 24px",
                }}
              >
                <div className={styles.settings}>
                  <Dropdown />
                  <div className={styles.buttonGroup}>
                    <ActionButton text="מחק עסקה" onClick={onClickHandler} />
                    <ActionButton text="מחק עסקה" onClick={onClickHandler} />
                    <ActionButton text="מחק עסקה" onClick={onClickHandler} />
                    <ActionButton text="מחק עסקה" onClick={onClickHandler} />
                  </div>
                </div>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="איתור טוקנים" value="5" />
                  <Tab label="איתור עסקאות מחוקות" value="4" />
                  <Tab label="איתור אישורים" value="3" />
                  <Tab label="עסקאות אחרי שידור" value="2" />
                  <Tab label="עסקאות לפני שידור" value="1" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className={styles.table}>
                  <div className={styles.tableSettings}>
                    <div className={styles.tableTerms}>
                      <ExportButton name="יצוא" image={Export} />
                      <FilterButton name="יצוא" image={Filter} />
                    </div>
                    <div className={styles.tableControll}>
                      <Button />
                      <ChoiseButton name="יצוא" image={Arrow} />
                    </div>
                  </div>
                  <Table />
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className={styles.table}>
                  <div className={styles.tableSettings}>
                    <div className={styles.tableTerms}>
                      <ExportButton name="יצוא" image={Export} />
                      <FilterButton name="יצוא" image={Filter} />
                    </div>
                    <div className={styles.tableControll}>
                      <Button />
                      <ChoiseButton name="יצוא" image={Arrow} />
                    </div>
                  </div>
                  <Table />
                </div>
              </TabPanel>
              <TabPanel value="3">
               
              </TabPanel>
              <TabPanel value="4">Item Foure</TabPanel>
              <TabPanel value="5">Item Five</TabPanel>
            </TabContext>
          </div>
        </div>
      </div>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
    </div>
  );
};
