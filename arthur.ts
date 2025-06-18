const readline = require('readline-sync')
let aluno
const user: string[] = [];
const idade: number[] = [];
const Rm: number[] = [];
const serie:string[] = [];
const cidade:string[] = [];

function adicionarUser(): void {
  const nome = readline.question("Digite o nome do nome: ");
  const precoStr = readline.question("Digite a idade do aluno: ");
  const preco = parseFloat(precoStr);

  if (nome && !isNaN(preco)) {
    user.push(nome);
    idade.push(preco);

    console.log(`user "${nome}" adicionado com sucesso!\n`);
  } else {
    console.log("Dados inválidos!\n");
  }
}

function listarUser(): void {
  if (user.length === 0) {
    console.log("Nenhum user cadastrado.\n");
    return;
  }

  console.log("user cadastrados:");
  user.forEach((user, i) => {
    console.log(`${i + 1}. ${user} - ${idade[i].toFixed(2)}`);
  });
  console.log("");
}

function removerUser(): void {
  const indexStr = readline.question("Digite o nome do usuario a remover: ");
  const index = parseInt(indexStr) - 1;

  if (index >= 0 && index < user.length) {
    const removido = user.splice(index, 1);
    idade.splice(index, 1);
    console.log(`Arthur"${removido}" removido com sucesso.\n`);
  } else {
    console.log("Índice inválido.\n");
  }
}

function menu(): void {
  let opcao: string;

  do {
    console.log("Menu de Opções:");
    console.log("1 - Adicionar user ");
    console.log("2 - Listar user");
    console.log("3 - Remover user");
    console.log("0 - Sair");

    opcao = readline.question("Escolha uma opção: ");
    console.log("");

    switch (opcao) {
      case "1":
        adicionarUser();
        break;
      case "2":
        listarUser();
        break;
      case "3":
        removerUser();
        break;
      case "0":
        console.log("Encerrando o programa...");
        break;
      default:
        console.log("Opção inválida.\n");
    }
  } while (opcao !== "0");
}

// Início do programa
menu();
