import axios from "axios";

const common_URL = "https://guarded-taiga-13015.herokuapp.com/api";

export const commonRequest = axios.create({
  commonURL: common_URL,
});