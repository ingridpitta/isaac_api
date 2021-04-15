import axios from "axios";
import { FormatData } from "../utils";
import dotenv from "dotenv";

dotenv.config();

const base_url = process.env.REST_URL;
let config;

const getToken = () => {
  return axios
    .post(`${base_url}/login`, {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
    })
    .then((res) => {
      const { data } = res;
      config = {
        headers: { Authorization: `Bearer ${data.token}` },
      };
    })
    .catch((err) => console.log(err));
};

getToken()

export const getStudents = async () => {
  const res = axios
    .get(base_url, config)
    .then(async (response) => {
      const { data } = response;
      console.log({ base_url, config });
      const formatedData = await FormatData(data);

      return formatedData;
    })
    .catch((err) => console.log({ err }));

  return res;
};

export const getStudent = async (id) => {
  const res = axios
    .get(`${base_url}/${id}`, config)
    .then(async (response) => {
      const { data } = response;
      const formatedData = await FormatData([data]);

      return formatedData;
    })
    .catch((err) => console.log({ err }));

  return res;
};
