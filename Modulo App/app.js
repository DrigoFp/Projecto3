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

// IMPORTS
import { adicionarTransacao, obterTransacoes } from "../Modulo State/state.js";
import { renderizarTransacoes, renderizarCards } from "../Modulo UserInterface/userIterface.js";

// CAPTURAR ELEMENTOS DO DOM (Passo 1)
const inputDescricao = document.querySelector("#descricao");
const inputQuantidade = document.querySelector("#quantidade");
const inputTipo = document.querySelector("#tipo-transacao");
const botaoAdicionar = document.querySelector(".adiciona-historia");
const calendario = document.querySelector(".calendario");

// BOTOES DE ACRESCENTAR ELEMENTOS ÀS DESPESAS/RECEITAS

let categoriaSelecionada = null;

const botoesCategoria = document.querySelectorAll(".categorias");
const selectTipo = document.querySelector("#tipo-transacao");

// quando clico num botão de categoria
botoesCategoria.forEach(botao => {
    botao.addEventListener("click", () => {

        const tipoBotao = botao.classList.contains("receita") ? "receita" : "despesa";

        // verificar compatibilidade
        if (tipoBotao !== selectTipo.value) {
            alert(`Esta categoria só pode ser usada para ${tipoBotao}.`);
            return;
        }

        // remover seleção anterior
        botoesCategoria.forEach(b => b.classList.remove("ativa"));

        // ativar o botão clicado
        botao.classList.add("ativa");

        // guardar categoria
        categoriaSelecionada = botao.textContent.trim();
    });
});


// CALENDÁRIO DINÂMICO

const hoje = new Date();
const meses = [
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
];
const dia = hoje.getDate();
const mes = meses[hoje.getMonth()];
const ano = hoje.getFullYear();

calendario.textContent = `${dia} ${mes} ${ano}`;

// CARREGAR TRANSACOES EXISTENTES
const transacoesIniciais = obterTransacoes();
renderizarTransacoes(transacoesIniciais);
renderizarCards(transacoesIniciais);

// EVENTO DO BOTÃO (Passos 2 a 7)

botaoAdicionar.addEventListener("click", function () {
  // PASSO 2: Ler inputs

  const descricao = inputDescricao.value.trim();
  const quantidade = Number(inputQuantidade.value);
  const tipo = inputTipo.value;

  // PASSO 3: Validar dados

  if (descricao === "") {
    alert("A descrição não pode estar vazia.");
    return;
  }

  if (isNaN(quantidade) || quantidade <= 0) {
    alert("O valor deve ser um número maior que zero.");
    return;
  }
  // PASSO 4: Criar objeto transação
  const novaTransacao = {
    id: crypto.randomUUID(),
    descricao: descricao,
    valor: tipo === "despesa" ? -quantidade : quantidade,
    tipo: tipo,
    data: new Date().toISOString().split("T")[0],
    categoria: "Outros",
  };

  // ---------------------------
  // PASSO 5: Atualizar estado
  // ---------------------------
  const listaAtualizada = adicionarTransacao(novaTransacao);

  // ---------------------------
  // PASSO 6: Re-renderizar UI
  // ---------------------------
  renderizarTransacoes(listaAtualizada);
  renderizarCards(listaAtualizada);

  // ---------------------------
  // PASSO 7: Limpar formulário
  // ---------------------------
  inputDescricao.value = "";
  inputQuantidade.value = "";
  inputTipo.value = "receita";
});
