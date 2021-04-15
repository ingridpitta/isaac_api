import { getStudents, getStudent } from "./rest.api";
import { getStudentsGraphQL, getStudentGraphQL } from "./graphql.api";

export const getStudentsFromRestAPI = async () => {
  const students = await getStudents();
  return students;
};

export const getStudentFromRestAPI = async (id) => {
  const student = await getStudent(id);
  return student;
};

export const getStudentsFromGraphQLAPI = async () => {
  const students = await getStudentsGraphQL();
  return students;
};

export const getStudentFromGraphQLAPI = async (id) => {
  const student = await getStudentGraphQL(id);
  return student;
};
