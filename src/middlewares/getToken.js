import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const base_url = process.env.REST_URL;

export const getToken = (req, res, next) => {
  console.log('token')
  return axios
    .post(`${base_url}/login`, {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    })
    .then((r) => {
      const { data } = r;
      console.log(data)
      return data.token;
      next();
    })
    .catch((err) => console.log(err));
};