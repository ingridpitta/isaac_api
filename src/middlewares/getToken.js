import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const base_url = process.env.REST_URL;

export const getToken = () => {
  return axios
    .post(`${base_url}/login`, {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    })
    .then((res) => {
      const { data } = res;
      return data.token;
    })
    .catch((err) => console.log(err));
};