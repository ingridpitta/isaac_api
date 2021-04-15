import { GraphQLClient } from "graphql-request";

const base_url = process.env.GRAPHQL_URL;
const client = new GraphQLClient(base_url, {
  headers: {
    Authorization: `Basic ${process.env.GRAPHQL_TOKEN}`,
  },
});

const getStudentsGraphQL = async () => {
  const query = `
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
  return data;
};

const getStudentGraphQL = async (id) => {
  const query = `
    query {
       user(matricula: ${id}) {
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
  return data;
};

export default {
  getStudentsGraphQL,
  getStudentGraphQL,
};
