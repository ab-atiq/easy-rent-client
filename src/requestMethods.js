import axios from "axios";

const common_URL = "https://easy-rent-server.onrender.com/api";

export const commonRequest = axios.create({
  commonURL: common_URL,
});
