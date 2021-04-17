import dateFormat from "dateformat";

dateFormat.i18n = {
    monthNames: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ]
  };

export const ParseData = (data) => {
    return data.map(student => {
        const { informacoes_pessoais, contatos, endereco, informacoes_internas} = student;

        const { primeiro_nome, sobrenome, sexo, nascimento, cpf } = informacoes_pessoais;

        const { email, telefones } = contatos;

        const { cep, logradouro, numlogradouro } = endereco;

        const { matricula, username } = informacoes_internas;

        // const date = new Date(nascimento.split(" de ").join(" "));

        // console.log({date});

        const parsedData = {
            nome: `${primeiro_nome} ${sobrenome}`,
            matricula,
            // datanascimento: dateFormat(date, "isoDate"),
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
    })
};