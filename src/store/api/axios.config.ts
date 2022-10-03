import axios, { AxiosRequestConfig } from "axios";
import configServer from "./server.config.json";

export const axiosConfig = axios.create({
  baseURL: configServer.serviceURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// axiosConfig.interceptors.request.use((req) => {
//   if (localStorage.getItem("access_token")) {
//     const token: string | null = localStorage.getItem("access_token");
//     req.headers!["Authorization"] = `Bearer ${token}`;
//   }
//   return req;
// });

axiosConfig.interceptors.request.use(function (config: AxiosRequestConfig) {
  const token: string | null = localStorage.getItem("token");
  if (token) {
    const clearedToken = JSON.parse(token);
    config.headers!.Authorization = `Bearer ${clearedToken}`;
  }

  return config;
});
