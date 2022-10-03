import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import ContentRequests from "../../api/requests/auth/content";
import { RootState } from "../../store";

export const getContent = createAsyncThunk(
  "content/getContent",
  async (_, thunkAPI) => {
    try {
      const { data } = await ContentRequests.getContent();

      return data.resultData;
    } catch (e) {
      // @ts-ignore
      return thunkAPI.rejectWithValue(e?.response?.data?.message);
    }
  }
);

const initialState = {
  content: [],
  error: null,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setContent: (state, action: PayloadAction<[]>) => {
      state.content = action.payload;
    },
  },
  extraReducers: {
    [getContent.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.content = action.payload;
      state.error = null;
    },
    [getContent.rejected.type]: (state, action: PayloadAction<any>) => {
      state.content = [];
      state.error = action.payload;
    },
  },
});
export const { setContent } = contentSlice.actions;

export default contentSlice;

export const getContentSelector = (state: RootState) => state.content;
