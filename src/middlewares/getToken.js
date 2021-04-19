import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const baseUrl = process.env.REST_URL;

export const getToken = () => axios
  .post(`${baseUrl}/login`, {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
  })
  .then((res) => {
    const { data } = res;

    !data?.token && new Error();

    return data.token;
  })
  .catch((error) => error);
