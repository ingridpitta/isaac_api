import axios from "axios";
import { FormatData } from "../utils";

const base_url = process.env.REST_URL;

const getStudents = () => {
  const res = axios
    .get(base_url, {
      auth: {
        token: process.env.REST_TOKEN,
      },
    })
    .then((response) => {
      const { data } = response;
      const formatedData = await FormatData(data);

      return formatedData;
    })
    .catch((err) => console.log({ err }));

  return res;
};

const getStudent = (id) => {
  const res = axios
    .get(`${base_url}/${id}`, {
      auth: {
        token: process.env.REST_TOKEN,
      },
    })
    .then((response) => {
      const { data } = response;
      const formatedData = await FormatData([data]);

      return formatedData;
    })
    .catch((err) => console.log({ err }));

  return res;
};

export default {
  getStudents,
  getStudent,
};
