import React, { useEffect } from "react";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box, Tab, TextField } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dispatch, Selector } from "../../../store/store";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  ActionButton,
  Button,
  ChoiseButton,
  Dropdown,
  ExportButton,
  FilterButton,
  SideBar,
  Table,
} from "../../components";
import {
  getContent,
  getContentSelector,
} from "../../../store/slices/content-slice/content-slice";
import {
  getTerminals,
  getTerminalsSelector,
} from "../../../store/slices/terminals-slice/terminals-slice";
import { formToggle } from "../../../store/slices/authorization-slice/types";
import styles from "./Reports.module.scss";

import Export from "../../../assets/button-group/export-icon.png";
import Arrow from "../../../assets/button-group/arrow-icon.png";
import Filter from "../../../assets/button-group/filter-icon.png";
import Delete from "../../../assets/button-group/delete-icon.svg";
import Refresh from "../../../assets/button-group/refresh-icon.svg";
import Snow from "../../../assets/button-group/snow-icon.svg";
import Signal from "../../../assets/button-group/signal-icon.svg";

export const Reports = () => {
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
    <div className={styles.reports}>
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
              <TabPanel value="1">await design from pelecard </TabPanel>
              <TabPanel value="2">await design from pelecard</TabPanel>
              <TabPanel value="3">await design from pelecard</TabPanel>
              <TabPanel value="4">await design from pelecard</TabPanel>
              <TabPanel value="5">await design from pelecard</TabPanel>
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
