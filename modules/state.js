/*
OBJETIVO:
Centralizar o controle das transações em memória.

PENSAMENTO:

1) Carregar as transações salvas quando o sistema iniciar.
2) Criar função para:
   - Retornar lista atual.
   - Adicionar nova transação.
   - (Opcional) remover transação.
3) Sempre que alterar o estado:
   - Atualizar o localStorage.

REFLEXÃO:
- Por que não manipular o localStorage diretamente no UI?
Resposta- 
- O que significa separar responsabilidade?
Resposta- cada modulo só faz uma coisa.

DESAFIO:
Como garantir que o array nunca fique fora de sincronia?
*/
//-----------------------------------------------------------
// carregarDados() altera transacoes

// guardarEstado() lê transacoes

// obterTransacoes() devolve transacoes

// adicionarTransacao() vai modificar transacoes

//------------------------------------------------------------

let transacoes = [];

// le o localStorage, quando o sistema inicia
export function carregardados() {
  const dados = localStorage.getItem("caixaGuardar"); // tenta ler o que estava guardado anteriormente, vai estar em string ou null(sem nada).
  transacoes = dados ? JSON.parse(dados) : []; // se dados existir = JSON.parse = converter os dados em array, se não : usa [] para começarmos com o array vazio
}

// Guarda os dados - converte o array para stringJSON e guarda no localStorage = "guardarcaixa"
function guardarEstado() {
  localStorage.setItem("guardarCaixa", JSON.stringify(transacoes)); // guardarCaixa = onde guardo dados, JSON:STRI é para converter o array em string Json
}

// Função que devolve só o array que está guardado em memória
function obterTransacoes() {
  return transacoes;
}

function adicionarTransacao(transacao){
   transacoes.push(objecto) // adicionar um objeto ao array


}