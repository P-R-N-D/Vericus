import axios from "axios";

export const api = axios.create({
  baseURL: "/api/",
  timeout: 5000,
});

export type HealthResponse = {
  status: string;
  service: string;
  backend: string;
  api: string;
};
