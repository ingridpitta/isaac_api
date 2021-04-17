import ParseDate from "./parseDate";

export const ParseData = (data) => {
    const formatedData = data.map(student => {
        const { informacoes_pessoais, contatos, endereco, informacoes_internas} = student;

        const { primeiro_nome, sobrenome, sexo, nascimento, cpf } = informacoes_pessoais;

        const { email, telefones } = contatos;

        const { cep, logradouro, numlogradouro } = endereco;

        const { matricula, username } = informacoes_internas;

        const parsedData = {
            nome: `${primeiro_nome} ${sobrenome}`,
            matricula,
            datanascimento: ParseDate(nascimento),
            usuario: username,
            email,
            cpf,
            sexo: sexo[0],
            telefone: `(${telefones[0].ddd}) ${telefones[0].numero}`,
            celular: telefones.lenght >= 2 ? `(${telefones[1].ddd}) ${telefones[1].numero}` : null,
            cep,
            endereco: `${logradouro} ${numlogradouro}`

        }
        return parsedData;
    });

    return formatedData[0];
};