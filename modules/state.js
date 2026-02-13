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

// transacao  = [valor, data, categoria, descriçao, receita, despesa]

import { lerDados, salvarDados } from "./storage";

let lertransacoes = [];

// le o localStorage, quando o sistema inicia
export function carregardados() {
  lertransacoes = lerDados();
}

// Função que devolve só o array que está guardado em memória
function obterTransacoes() {
  return transacoes;
}

function adicionarTransacao(novaTransacao) {
  // parametro recebe uma nova transacao
  lertransacoes.push(novaTransacao); // adicionar um objeto ao array
  salvarDados(lertransacoes)// salvei na base de dados do local
  return lertransacoes; // devolve o array actualizado
}

function removerTransacao(id) {
  const indice = lertransacoes.findIndex((t) => t.id === id); // findIndex() percorre o array, t.id === id compara o id da transação com o id que queremos remove, devolve o índice exato da transação
  lertransacoes.splice(indice, 1); // remove 1 elemento
  guardarEstado(); // ve o nome da função
  return lertransacoes; // devolve o array actualizado
}
