import { getStudents, getStudent } from "./rest.api";
import { getStudentsGraphQL, getStudentGraphQL } from "./graphql.api";

const getStudentsFromRestAPI = async () => {
  const students = await getStudents();
  return students;
};

const getStudentFromRestAPI = async (id) => {
  const student = await getStudent(id);
  return student;
};

const getStudentsFromGraphQLAPI = async () => {
  const students = await getStudentsGraphQL();
  return students;
};

const getStudentFromGraphQLAPI = async (id) => {
  const student = await getStudentGraphQL(id);
  return student;
};

export default {
  getStudentsFromRestAPI,
  getStudentFromRestAPI,
  getStudentsFromGraphQLAPI,
  getStudentFromGraphQLAPI,
};
