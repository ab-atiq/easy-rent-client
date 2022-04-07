import axios from "axios";

const common_URL = "http://localhost:5000/api";

export const commonRequest = axios.create({
  commonURL: common_URL,
});