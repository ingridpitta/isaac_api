import dateFormat from "dateformat";

const FormatData = (data) => {
    return data.map(student => {
        const { informacoes_pessoais, contatos, endereco, informacoes_internas} = student;

        const { primeiro_nome, sobrenome, sexo, nascimento, cpf } = informacoes_pessoais;

        const { email, telefones } = contatos;

        const { cep, logradouro, numlogradouro } = endereco;

        const { matricula, username } = informacoes_internas;

        const formatedStudent = {
            nome: `${primeiro_nome} ${sobrenome}`,
            matricula,
            datanascimento: dateFormat(nascimento, "isoDate"),
            usuario: username,
            email,
            cpf,
            sexo: sexo[0],
            telefone: `(${telefones[0].ddd}) ${telefones[0].numero}`,
            celular: telefones.lenght >= 2 && `(${telefones[1].ddd}) ${telefones[1].numero}`,
            cep,
            endereco: `${logradouro} ${numlogradouro}`

        }

        return formatedStudent;
    })
};

export default FormatData;