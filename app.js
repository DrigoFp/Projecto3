/*
OBJETIVO:
Conectar tudo.

PASSO A PASSO:

1) Capturar inputs do formulário.
2) Escutar clique do botão.
3) Validar dados.
4) Criar objeto transação.
5) Atualizar estado.
6) Re-renderizar UI.
7) Limpar formulário.

IMPORTANTE:
Sempre que adicionar uma transação:
- Atualizar lista
- Atualizar cards

Pergunta:
O que deve acontecer quando a página recarrega?
*/

// inputs do codigo 1
const inputDescricao = document.querySelector("#descricao");
const inputQuantidade = document.querySelector("#quantidade");

// 2
const botaoAdicionar = document.querySelector(".adiciona-historia");
const inputTipo = document.querySelector("#tipo-transacao");
9
botaoAdicionar.addEventListener("click", function () {
  const descricao = inputDescricao.value;
  const quantidade = Number(inputQuantidade.value);
  const tipo = inputTipo.value;
  console.log("Descrição:", descricao);
  console.log("Quantidade:", quantidade);
  console.log("Tipo:", tipo);
});

// 3

