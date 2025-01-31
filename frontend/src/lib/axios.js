import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://wishper-chat-application-jw4s.vercel.app/api" : "/api",
  withCredentials: true,
});