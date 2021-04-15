import {
  getStudentsFromRestAPI,
  getStudentFromRestAPI,
  getStudentsFromGraphQLAPI,
  getStudentFromGraphQLAPI,
} from "../service";

class StudentsController {
  getStudents = (req, res) => {
    const restApiStudents = getStudentsFromRestAPI();
    const graphQLApiStudents = getStudentsFromGraphQLAPI();
  };

  getStudent = (req, res) => {
    const { matricula } = req.params;

    const restApiStudent = getStudentFromRestAPI(matricula);
    const graphQLApiStudent = getStudentFromGraphQLAPI(matricula);
  };
}

export default StudentsController;
