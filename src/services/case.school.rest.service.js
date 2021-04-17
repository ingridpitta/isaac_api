import axios from "axios";
import { ParseData } from "../utils/parser";
import dotenv from "dotenv";

dotenv.config();

const base_url = process.env.REST_URL;

const getStudents = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = axios
    .get(base_url, config)
    .then(async (response) => {
      const { data } = response;
      console.log({ base_url, config });
      const formatedData = await ParseData(data);

      return formatedData;
    })
    .catch((err) => console.log({ err }));

  return res;
};

const getStudentByID = (token, id) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = axios
    .get(`${base_url}/${id}`, config)
    .then(async (response) => {
      const { data } = response;
      const formatedData = await ParseData([data]);

      return formatedData;
    })
    .catch((err) => console.log({ err }));

  return res;
};

export const getSchoolRestData = {
    getStudents,
    getStudentByID
}