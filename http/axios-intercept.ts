import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

export default axios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    config.baseURL = "https://api.github.com/";
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
