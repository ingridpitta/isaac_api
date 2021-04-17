import { GraphQLClient, gql } from "graphql-request";
import dotenv from "dotenv";

dotenv.config();

const base_url = process.env.GRAPHQL_URL;
const client = new GraphQLClient(base_url, {
  headers: {
    Authorization: `Basic ${process.env.GRAPHQL_TOKEN}`,
  },
});

const getStudents = async () => {
  const query = gql`
    query {
      users {
        nome
        matricula
        datanascimento
        usuario
        email
        cpf
        sexo
        telefone
        celular
        cep
        endereco
      }
    }
  `;

  try {
    const data = await client.request(query);
    const { users: students } = data;

    !students && new Error();

    return students;
  } catch (error) {
    error.message = "Something went wrong";
    throw error;
  }
};

const getStudentByID = async (id) => {
  const query = gql`
    query {
      user(matricula: "${id}") {
        nome
        matricula
        datanascimento
        usuario
        email
        cpf
        sexo
        telefone
        celular
        cep
        endereco
      }
    }
`;

  try {
    const data = await client.request(query);
    const { user: student } = data;

    !student.nome && new Error();

    return student;
  } catch (error) {
    error.message = "Student not found.";
    throw error;
  }
};

export const getSchoolGraphQLData = {
  getStudents,
  getStudentByID,
};
