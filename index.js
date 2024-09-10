const { select, input } = require('@inquirer/prompts');

let meta = {
  value: "Tomar 2L de água por dia",
  checked: false,
}

let metas = [ meta ];
const cadastrarMeta = async () => {
  const meta = await input({ message: "Digite a meta:" })

  if(meta.length == 0) {
    console.log("A meta não pode ser vazia.")
    return
  }

  metas.push({
    value: meta,
    checked: false
  });
}

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
        await cadastrarMeta();
        console.log(metas);
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