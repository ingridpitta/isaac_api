import axios from "axios";
import dotenv from "dotenv";
import { ParseData } from "../utils/parser";

dotenv.config();

const baseUrl = process.env.REST_URL;

const getStudents = async (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = axios
    .get(baseUrl, config)
    .then(async (response) => {
      const { data } = response;

      !data && new Error();

      const formatedData = await ParseData(data);

      return formatedData;
    })
    .catch((error) => {
      error.message = "Something went wrong";
      throw error;
    });

  return res;
};

const getStudentByID = (token, id) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const res = axios
    .get(`${baseUrl}/${id}`, config)
    .then(async (response) => {
      const { data } = response;

      !data?.nome && new Error();

      const formatedData = await ParseData([data]);

      return formatedData[0];
    })
    .catch((error) => {
      error.message = "Student not found.";
      throw error;
    });

  return res;
};

export const getSchoolRestData = {
  getStudents,
  getStudentByID,
};
