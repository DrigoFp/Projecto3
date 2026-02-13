/*
OBJETIVO:
Atualizar a interface sempre que o estado mudar.

PENSAMENTO:

1) Selecionar o container da lista.
2) Limpar o conteúdo antes de renderizar novamente.
3) Para cada transação:
   - Criar elemento HTML dinamicamente.
   - Inserir no DOM.
4) Atualizar os cards com os valores calculados.

REFLEXÃO:
- Por que limpar antes de renderizar?
- O que acontece se não limpar?

DESAFIO:
Como aplicar classes diferentes para receita e despesa?
*/

export function criarEstrutura() {
  const listaTransacoes = document.querySelector(".lista-transacoes");
  listaTransacoes.innerHTML(""); // limpar o container
}

function receberTransacoes(transacoes) {
  const acederLista = document.getElementsByClassName("lista-transacoes");
  transacoes.forEach(function (transacao) {
    const caixaTransacao = document.createElement("div");
    caixaTransacao.innerHTML = `<p>${transacao.descricao}</p>
                        <p>${transacao.valor}</p>
                        <p>${transacao.data}</p>
                        <p>${transacao.categoria}</p>`;
    acederLista.appendChild(caixaTransacao);
  });

}

// enviar para o html as transacoes,  <div class="lista-transacoes"></div>

// obter os dados do estado global

//ler, percorrer com o foreach
// dentro do foreach criar o html
// criar um funcao para fazer a parte de cima.
