import axios from "axios";
import { APP_DOMAIN, AUTH_TOKEN } from "@globals/constants";

export const axiosInstance = axios.create({
  baseURL: `${APP_DOMAIN}/api/v2`,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${AUTH_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
