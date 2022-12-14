import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formToggle, IAuthorizationState, IForm } from "./types";
import { RootState } from "../../store";
import {
  IRefreshTokenBody,
  IUserAuthBody,
} from "../../api/requests/auth/types";
import AuthRequests from "../../api/requests/auth/auth";

export const asyncSignIn = createAsyncThunk(
  "authorization/asyncSignIn",
  async (_, thunkAPI) => {
    const state = (thunkAPI.getState() as RootState).authorization;
    if (!state.email || !state.password) {
      return thunkAPI.rejectWithValue("поля не должны быть пустыми");
    } else {
      try {
        const body: IUserAuthBody = {
          email: state.email,
          password: state.password,
        };
        const { data } = await AuthRequests.auth(body);
        return data;
      } catch (e) {
        // @ts-ignore
        return thunkAPI.rejectWithValue(e?.response?.data?.message);
      }
    }
  }
);
export const asyncSignUp = createAsyncThunk(
  "authorization/asyncSignUp",
  async (_, thunkAPI) => {
    const state = (thunkAPI.getState() as RootState).authorization;
    if (!state.email || !state.password) {
      return thunkAPI.rejectWithValue("поля не должны быть пустыми");
    } else {
      try {
        const body: IUserAuthBody = {
          email: state.email,
          password: state.password,
        };
        const { data } = await AuthRequests.registr(body);
        return data;
      } catch (e) {
        // @ts-ignore
        return thunkAPI.rejectWithValue(e?.response?.data?.message);
      }
    }
  }
);
export const asyncUpdateRefreshToken = createAsyncThunk(
  "authorization/asyncUpdateRefreshToken",
  async (_, thunkAPI) => {
    try {
      const body: IRefreshTokenBody = {
        refreshToken: JSON.parse(localStorage.getItem("token") || ""),
      };
      const { data } = await AuthRequests.refreshToken(body);
      return data;
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e?.response?.data?.message);
    }
  }
);

const initialState: IAuthorizationState = {
  createDateAccessToken: 0,
  timeAccessToken: 0,
  auth: false,
  typeForm: formToggle.SIGN_IN,
  email: "",
  password: "",
  error: "",
};
const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    changeLogin: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    changeCreateDateAccessToken: (state, action: PayloadAction<number>) => {
      state.createDateAccessToken = action.payload;
    },
    changeTimeAccessToken: (state, action: PayloadAction<number>) => {
      state.timeAccessToken = action.payload;
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    toggle: (state, action: PayloadAction<IForm>) => {
      state.typeForm = action.payload;
    },
    exit: (state) => {
      localStorage.clear();
      state.auth = false;
      state.typeForm = formToggle.SIGN_UP;
    },
    toggleAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
  },
  extraReducers: {
    [asyncSignUp.fulfilled.type]: (state, action: PayloadAction<any>) => {
      localStorage.setItem("token", JSON.stringify(action.payload.accessToken));
      state.email = "";
      state.password = "";
      state.error = "";
      state.auth = true;
      state.typeForm = formToggle.EXIT;
    },
    [asyncSignUp.rejected.type]: (state, action: PayloadAction<any>) => {
      state.email = "";
      state.password = "";
      state.error = action.payload;
      state.auth = false;
      state.typeForm = formToggle.SIGN_UP;
    },
    [asyncSignIn.fulfilled.type]: (state, action: PayloadAction<any>) => {
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      state.email = "";
      state.password = "";
      state.error = "";
      state.auth = true;
      state.typeForm = formToggle.EXIT;
    },
    [asyncUpdateRefreshToken.fulfilled.type]: (
      state,
      action: PayloadAction<any>
    ) => {
      localStorage.setItem("token", JSON.stringify(action.payload.accessToken));
      state.email = "";
      state.password = "";
      state.error = "";
      state.auth = true;
    },
    [asyncUpdateRefreshToken.rejected.type]: (
      state,
      action: PayloadAction<any>
    ) => {
      state.email = "";
      state.password = "";
      state.error = action.payload;
      state.auth = false;
      state.typeForm = formToggle.SIGN_UP;
    },
    [asyncSignIn.rejected.type]: (state, action: PayloadAction<any>) => {
      state.email = "";
      state.password = "";
      state.error = action.payload;
      state.auth = false;
      state.typeForm = formToggle.SIGN_IN;
    },
  },
});
export const {
  changeLogin,
  changePassword,
  exit,
  toggle,
  toggleAuth,
  changeCreateDateAccessToken,
  changeTimeAccessToken,
} = authorizationSlice.actions;
export default authorizationSlice;
