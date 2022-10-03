import { configureStore } from "@reduxjs/toolkit";
import authorizationSlice from "./slices/authorization-slice/authorization-slice";
import contentSlice from "./slices/content-slice/content-slice";
import terminalsSlice from "./slices/terminals-slice/terminals-slice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
const store = configureStore({
  reducer: {
    authorization: authorizationSlice.reducer,
    content: contentSlice.reducer,
    terminals: terminalsSlice.reducer,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const Selector: TypedUseSelectorHook<RootState> = useSelector;
export const Dispatch = () => useDispatch<AppDispatch>();
export default store;
