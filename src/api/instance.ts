import axios from "axios";
import { getSessionStorageToken } from "../shared/helpers/storageHelpers";

export const baseUrl = "https://localhost:5001/api/";

export let baseInstance = axios.create({
  baseURL: baseUrl,
  headers: { Authorization: `Bearer ${getSessionStorageToken()}`}
});

export const setInstance = () => {
  baseInstance = axios.create({
    baseURL: baseUrl,
    headers: { Authorization: `Bearer ${getSessionStorageToken()}`}
  })
}