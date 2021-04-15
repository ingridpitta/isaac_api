import {
  getStudentsFromRestAPI,
  getStudentFromRestAPI,
  getStudentsFromGraphQLAPI,
  getStudentFromGraphQLAPI,
} from "../service";


class StudentsController {
  getStudents = async (req, res) => {
    const restApiStudents = await getStudentsFromRestAPI();
    const graphQLApiStudents = await getStudentsFromGraphQLAPI();

    const { users } = graphQLApiStudents

    const esco01 = {
      nome: "escola 01",
      alunos: restApiStudents
    }

    const esco02 = {
      nome: "escola 02",
      alunos: [...users]
    }

    console.log({esco01, esco02})
    res.status(200).json({esco01, esco02});
  };

  getStudent = async (req, res) => {
    const { escola, matricula } = req.params;


    const restApiStudent = await getStudentFromRestAPI(matricula);
    // const graphQLApiStudent = await getStudentFromGraphQLAPI(matricula);

    console.log(restApiStudent);
    res.json(restApiStudent);
  };
}

export default StudentsController;
