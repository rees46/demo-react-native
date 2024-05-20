import { useMemo } from "react";
import { axiosInstance } from "./axios-instance";

export const useApi = () =>
  useMemo(() => {
    return axiosInstance;
  }, []);
