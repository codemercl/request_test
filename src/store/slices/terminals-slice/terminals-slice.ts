import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import TerminalsRequests from "../../api/requests/terminals/terminals";
import { RootState } from "../../store";

export const getTerminals = createAsyncThunk(
  "terminals/getTerminals",
  async (_, thunkAPI) => {
    try {
      const { data } = await TerminalsRequests.getTerminals();

      return data
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e?.response?.data?.message);
    }
  }
);

const initialState = {
  terminals: [],
  error: null,
};

const terminalsSlice = createSlice({
  name: "terminals",
  initialState,
  reducers: {
    setTerminals: (state, action: PayloadAction<[]>) => {
      state.terminals = action.payload;
    },
  },
  extraReducers: {
    [getTerminals.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.terminals = action.payload;
      state.error = null;
    },
    [getTerminals.rejected.type]: (state, action: PayloadAction<any>) => {
      state.terminals = [];
      state.error = action.payload;
    },
  },
});
export const { setTerminals } = terminalsSlice.actions;

export default terminalsSlice;

export const getTerminalsSelector = (state: RootState) => state.terminals;
