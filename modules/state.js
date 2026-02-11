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

function adicionarTransacao(novaTransacao) {
  // parametro recebe uma nova transacao
  transacoes.push(novaTransacao); // adicionar um objeto ao array
  guardarEstado(); // ve o nome da função
  return transacoes; // devolve o array actualizado
}

function removerTransacao(id) {
  const indice = transacoes.findIndex((t) => t.id === id); // findIndex() percorre o array, t.id === id compara o id da transação com o id que queremos remove, devolve o índice exato da transação
  transacoes.splice(indice, 1); // remove 1 elemento 
  guardarEstado(); // ve o nome da função
  return transacoes; // devolve o array actualizado
}
