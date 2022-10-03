import React, { useEffect } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box, Tab, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dispatch, Selector } from "../../../store/store";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { ActionButton, Button, ChoiseButton, Dropdown, ExportButton, FilterButton, SideBar, Table } from "../../components";
import { getContent, getContentSelector } from "../../../store/slices/content-slice/content-slice";
import { getTerminals, getTerminalsSelector } from "../../../store/slices/terminals-slice/terminals-slice";
import { formToggle } from "../../../store/slices/authorization-slice/types";
import styles from "./Transactions.module.scss"

import Export from "../../../assets/button-group/export-icon.png";
import Arrow from "../../../assets/button-group/arrow-icon.png";
import Filter from "../../../assets/button-group/filter-icon.png";
import Delete from "../../../assets/button-group/delete-icon.svg";
import Refresh from "../../../assets/button-group/refresh-icon.svg";
import Snow from "../../../assets/button-group/snow-icon.svg";
import Signal from "../../../assets/button-group/signal-icon.svg";

export const Transactions = () => {
  const dispatch = Dispatch();
  const { content } = Selector(getContentSelector);
  const { terminals } = Selector(getTerminalsSelector);
  const [value, setValue] = React.useState("1");

  useEffect(() => {
    dispatch(getContent());
    dispatch(getTerminals());
  }, [dispatch]);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const onClickHandler = (e: any) => {
    alert();
  };

  const [valuePicker, setValuePicker] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  const handlePickerChange = (newValue: Dayjs | null) => {
    setValuePicker(newValue);
  };

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
                    <ActionButton
                      image={Delete}
                      text="מחק עסקה"
                      onClick={onClickHandler}
                    />
                    <ActionButton
                      image={Refresh}
                      text="מחק עסקה"
                      onClick={onClickHandler}
                    />
                    <ActionButton
                      image={Snow}
                      text="מחק עסקה"
                      onClick={onClickHandler}
                    />
                    <ActionButton
                      image={Signal}
                      text="מחק עסקה"
                      onClick={onClickHandler}
                    />
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
                      <FilterButton name="סנן לפי" image={Filter} />
                    </div>
                    <div className={styles.tableControll}>
                      <Button />
                      <ChoiseButton
                        terminals={terminals}
                        name="בחר מסוף"
                        image={Arrow}
                      />
                    </div>
                  </div>
                  <Table data={content} />
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className={styles.table}>
                  <div className={styles.tableSettings}>
                    <div className={styles.tableTerms}>
                      <ExportButton name="יצוא" image={Export} />
                      <FilterButton name="סנן לפי" image={Filter} />
                    </div>
                    <div className={styles.tableControll}>
                      <Button />
                      <div className={styles.tableControllField}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <div className={styles.tableFiledItem}>
                            <DesktopDatePicker
                              inputFormat="MM/DD/YYYY"
                              value={valuePicker}
                              onChange={handlePickerChange}
                              renderInput={(params: any) => (
                                <TextField {...params} />
                              )}
                            />
                          </div>
                          <div className={styles.tableFiledItem}>
                            <DesktopDatePicker
                              inputFormat="MM/DD/YYYY"
                              value={valuePicker}
                              onChange={handlePickerChange}
                              renderInput={(params: any) => (
                                <TextField {...params} />
                              )}
                            />
                          </div>
                        </LocalizationProvider>
                      </div>
                      <ChoiseButton
                        terminals={terminals}
                        name="בחר מסוף"
                        image={Arrow}
                      />
                    </div>
                  </div>
                  <Table data={content} />
                </div>
              </TabPanel>
              <TabPanel value="3">Item three</TabPanel>
              <TabPanel value="4">Item Foure</TabPanel>
              <TabPanel value="5">Item Five</TabPanel>
            </TabContext>
          </div>
        </div>
      </div>
      <div className={styles.sidebar}>
        <SideBar typeForm={formToggle.EXIT} />
      </div>
    </div>
  );
};
