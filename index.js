const { select } = require('@inquirer/prompts');

const start = async () => {
  while (true) {
    const option = await select({
      message: "Menu >",
      choices: [
        {
          name: "Cadastrar meta",
          value: "Cadastrar"
        },
        {
          name: "Listar metas",
          value: "Listar"
        },
        {
          name: "Sair",
          value: "Sair"
        }
      ]
    });

    switch(option) {
      case "Cadastrar":
        console.log("Cadastrando...")
        break;
      case "Listar":
        console.log("Listando...")
        break;
      case "Sair":
        return
    }
  }
}

start();