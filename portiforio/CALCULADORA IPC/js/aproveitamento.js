const addPeca = document.getElementById('add');
const calcularBtn = document.getElementById('calcular');
const conjuntoPecas = document.querySelector('.conjunto-pecas');
const tituloResult = document.querySelector('.titulo-result');
const resultDiv = document.getElementById('result');
const sobras = document.getElementById("sobras");

let pecas = [];
let pecasInteirasExtras = [];

// Adiciona peças extras (sobras)
sobras.addEventListener('click', () => {
    let medida = parseFloat(prompt("Medida da sobra (mm)"));
    let quantidade = parseInt(prompt("Quantidade de sobras"));
    
    if (!isNaN(medida) && !isNaN(quantidade) && medida > 0 && quantidade > 0) {
        pecasInteirasExtras.push({ medida, quantidade, tipo: 'sobra' });
    } else {
        alert("Por favor, insira valores válidos para a sobra.");
    }
});

// Função para salvar as peças
function salvarPeca(inteiro, corte, quant) {

    const existente = pecas.find(
        p => p.inteiro === inteiro && p.corte === corte
    );

    if (existente) {
        existente.quant += quant;
    } else {
        pecas.push({inteiro,corte,quant,tipo: 'inteiro'});
    }

    atualizarListaPecas();
}

// Função para atualizar a lista de peças
function atualizarListaPecas() {
    conjuntoPecas.innerHTML = '';
    pecas.forEach((peca, index) => {
        const pecaElement = document.createElement('p');
        pecaElement.dataset.index = index;
        pecaElement.innerHTML = `Peça ${index + 1}: Inteiro - ${peca.inteiro}, Corte - ${peca.corte}, Quantidade - ${peca.quant}, Tipo - ${peca.tipo} <i class="fa-regular fa-circle-xmark delete"></i> `;
        conjuntoPecas.appendChild(pecaElement);
    });
}

// Evento de clique para deletar peças
conjuntoPecas.addEventListener('click', (e) => {

    const btnExcluir = e.target.closest('.delete');

    if (!btnExcluir) return;

    const linha = btnExcluir.parentElement;

    const indice = parseInt(linha.dataset.index);

    if (indice > -1) {
        pecas.splice(indice, 1);

        atualizarListaPecas();

        recalcular();
    }
});

// Adicionar peça ao clicar no botão "Adicionar"
addPeca.addEventListener('click', (e) => {
    e.preventDefault();
    const inteiro = parseFloat(document.getElementById('inteiro').value);
    const MedidaCorte = parseFloat(document.getElementById('MedidaCorte').value);
    const quantidadePecas = parseFloat(document.getElementById('quantidade').value);
    if (!isNaN(inteiro) && !isNaN(MedidaCorte) && !isNaN(quantidadePecas)) {
        salvarPeca(inteiro, MedidaCorte, quantidadePecas);
    } else {
        alert('Por favor, preencha todos os campos com valores válidos.');
    }
    document.getElementById('MedidaCorte').value = "";
    document.getElementById('quantidade').value = "";
});

// Algoritmo de corte de barras
const espessuraSerra = 3; // Defina a espessura da serra

function encontrarMelhorCombinacao(inteiro, pecas) {
    let melhorCombinacao = [];
    let melhorUtilizacao = 0;

    function gerarCombinacoes(pecas, combinacaoAtual, somaAtual, cortes, indice) {
        if (somaAtual + cortes * espessuraSerra > inteiro) {
            return;
        }

        if (somaAtual > melhorUtilizacao) {
            melhorUtilizacao = somaAtual;
            melhorCombinacao = combinacaoAtual.slice();
        }

        for (let i = indice; i < pecas.length; i++) {
            if (pecas[i].quant > 0) {
                pecas[i].quant--;
                combinacaoAtual.push(pecas[i].corte);
                gerarCombinacoes(pecas, combinacaoAtual, somaAtual + pecas[i].corte, cortes + 1, i);
                combinacaoAtual.pop();
                pecas[i].quant++;
            }
        }
    }

    gerarCombinacoes(pecas, [], 0, 0, 0);
    return melhorCombinacao;
}

function cortarBarras(pecas, pecasExtras, tamanhoInteiroPrincipal) {
    let combinacoesTotais = [];
    let pecasRestantes = JSON.parse(JSON.stringify(pecas));
    let totalInteirosNecessarios = 0;
    let totalExtraNecessarios = 0;
    let sobrasUtilizadas = [];

    // Utilizando peças extras (sobras) primeiro
    for (let extra of pecasExtras) {
        for (let i = 0; i < extra.quantidade; i++) {

            let melhorCombinacao = encontrarMelhorCombinacao(
                extra.medida,
                pecasRestantes
            );

            if (melhorCombinacao.length > 0) {

                combinacoesTotais.push({
                    combinacao: melhorCombinacao,
                    tamanho: extra.medida,
                    tipo: 'sobra'
                });

                totalExtraNecessarios++;
                sobrasUtilizadas.push(extra.medida);

                melhorCombinacao.forEach(corte => {
                    for (let j = 0; j < pecasRestantes.length; j++) {
                        if (pecasRestantes[j].corte === corte) {
                            pecasRestantes[j].quant--;
                            break;
                        }
                    }
                });
            }
        }
    }

    // Depois utiliza os inteiros principais
    while (pecasRestantes.some(peca => peca.quant > 0)) {

        let melhorCombinacao = encontrarMelhorCombinacao(
            tamanhoInteiroPrincipal,
            pecasRestantes
        );

        if (melhorCombinacao.length === 0) break;

        combinacoesTotais.push({
            combinacao: melhorCombinacao,
            tamanho: tamanhoInteiroPrincipal,
            tipo: 'inteiro'
        });

        totalInteirosNecessarios++;

        melhorCombinacao.forEach(corte => {
            for (let j = 0; j < pecasRestantes.length; j++) {
                if (pecasRestantes[j].corte === corte) {
                    pecasRestantes[j].quant--;
                    break;
                }
            }
        });
    }

    return {
        combinacoes: combinacoesTotais,
        totalInteirosNecessarios,
        totalExtraNecessarios,
        tamanhoInteiroPrincipal,
        sobrasUtilizadas
    };
}

// Função para agrupar combinações e calcular a quantidade de inteiros necessários
function agruparCombinacoes(combinacoes) {
    let combinacoesAgrupadas = {};

    combinacoes.forEach(item => {
        let chave = item.combinacao.join(",");
        if (!combinacoesAgrupadas[chave]) {
            combinacoesAgrupadas[chave] = { quantidade: 0, tamanho: item.tamanho, tipo: item.tipo };
        }
        combinacoesAgrupadas[chave].quantidade++;
    });

    return combinacoesAgrupadas;
}

// Evento de clique no botão "Calcular"
calcularBtn.addEventListener('click', (e) => {
    e.preventDefault();
    recalcular();
});

//recalcular ao clicar no título do resultado
function recalcular() {
    const tamanhoInteiroPrincipal = parseFloat(document.getElementById('inteiro').value);

    if (isNaN(tamanhoInteiroPrincipal)) {
        resultDiv.innerHTML = '';
        return;
    }

    const resultado = cortarBarras(pecas, pecasInteirasExtras, tamanhoInteiroPrincipal);
    const barrasPorTamanho = {};

    resultado.combinacoes.forEach(item => {
        if (!barrasPorTamanho[item.tamanho]) {
            barrasPorTamanho[item.tamanho] = 0;
        }

        barrasPorTamanho[item.tamanho]++;
    });
    const combinacoesAgrupadas = agruparCombinacoes(resultado.combinacoes);

    if (resultado.combinacoes.length > 0) {
        let resultHTML = ``;
        let combinacoesMostradas = new Set();

        Object.keys(combinacoesAgrupadas).forEach((chave) => {
            const comb = chave.split(",").map(Number);
            const tamanhoInteiro = combinacoesAgrupadas[chave].tamanho;
            const quantidadeInteiros = combinacoesAgrupadas[chave].quantidade;

            if (!combinacoesMostradas.has(tamanhoInteiro)) {
                combinacoesMostradas.add(tamanhoInteiro);
            }

            if (quantidadeInteiros > 1) {
                resultHTML += `<p class="item-lista">
                    Combinações com ${quantidadeInteiros} barras de ${tamanhoInteiro}mm:
                    ${comb.join(", ")}
                </p>`;
            } else {
                resultHTML += `<p class="item-lista">
                    Combinações com ${quantidadeInteiros} barra de ${tamanhoInteiro}mm:
                    ${comb.join(", ")}
                </p>`;
            }
        });

        Object.entries(barrasPorTamanho).forEach(([tamanho, quantidade]) => {
        resultHTML += `
            <p class="item-lista-total">
                ${quantidade} barra(s) de ${tamanho}mm necessária(s)
            </p>
        `;
});

        resultDiv.innerHTML = resultHTML;
    } else {
        resultDiv.innerHTML = "Não foi possível realizar cortes com as peças fornecidas.";
    }

    resultDiv.style.display = 'block';
    tituloResult.style.display = 'block';
}


