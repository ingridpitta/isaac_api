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

  const data = await client.request(query);
  const { users: students } = data;

  return students;
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

  const data = await client.request(query);
  const { user: student } = data;

  return student;
};

export const getSchoolGraphQLData = {
  getStudents,
  getStudentByID,
};
