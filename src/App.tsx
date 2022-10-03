import { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Dispatch, Selector } from "./store/store";
import {
  changeCreateDateAccessToken,
  changeTimeAccessToken,
  toggleAuth,
} from "./store/slices/authorization-slice/authorization-slice";
import {
  Dashboard,
  Transactions,
  Reports,
  PageNotFound,
  ForgotPassword,
} from "./app/pages";
import AuthContainer from "./app/auth/auth-container";

import "./App.scss";

function App() {
  const dispatch = Dispatch();
  const auth: boolean = Selector((state) => state.authorization.auth);

  useEffect(() => {
    setInterval(() => {
      if (!localStorage.getItem("token")) {
        dispatch(toggleAuth(false));
      } else {
        dispatch(toggleAuth(true));
      }
      const createDateAccessToken = localStorage.getItem("token");
      const timeAccessToken = localStorage.getItem("token");
      if (createDateAccessToken && timeAccessToken) {
        dispatch(changeTimeAccessToken(+timeAccessToken));
        dispatch(changeCreateDateAccessToken(+createDateAccessToken));
      } else {
        dispatch(changeTimeAccessToken(0));
        dispatch(changeCreateDateAccessToken(0));
      }
    }, 500);
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={auth ? <Outlet /> : <AuthContainer />}>
          <Route path="/" element={<Transactions />} />
          <Route path="reports" element={<Reports />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        {/* <Route path="/forgot" element={<ForgotPassword />} /> */}
      </Routes>
    </div>
  );
}

export default App;
