/*
    1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
    Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
    Imprimir(SOMA);
    Ao final do processamento, qual será o valor da variável SOMA?
*/
// Definindo as variáveis
let index = 13;
let sum = 0;
let k = 0;

// Laço de repetição
while (k < index) {
    k = k + 1;
    sum = sum + k;
}

// Imprimindo o resultado
console.log("1) ...,  qual será o valor da variável SOMA?");
console.log("O valor da variável SOMA é:", sum, "\n");

/*
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
    escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
    IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/
function isFibonacci(number) {
    let numA = 0;
    let numB = 1;

    if (number === numA || number === numB) return true;

    let nextNumber = numA + numB;
    while (nextNumber <= number) {
        if (nextNumber === number) return true;
        numA = numB;
        numB = nextNumber;
        nextNumber = numA + numB;
    }
    return false;
}

// Definindo um número para teste
const number = 21;

// Verificando e exibindo o resultado
console.log("2) ...calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. ");
if (isFibonacci(number)) {
    console.log(`${number} pertence à sequência de Fibonacci. \n`);
} else {
    console.log(`${number} não pertence à sequência de Fibonacci. \n`);
}

/*
    3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
    • O menor valor de faturamento ocorrido em um dia do mês;
    • O maior valor de faturamento ocorrido em um dia do mês;
    • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

    IMPORTANTE:
    a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
    b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

*/
const fs = require('fs');

const faturamentoDiario = JSON.parse(fs.readFileSync('dados.json'));

const diasFaturados = faturamentoDiario.filter(dia => dia.valor > 0).map(dia => dia.valor);

const menorFaturamento = Math.min(...diasFaturados);
const maiorFaturamento = Math.max(...diasFaturados);

const somaTotalFaturados = diasFaturados.reduce((accTotal, currentValue) => accTotal + currentValue, 0);
const mediaMensal = somaTotalFaturados / diasFaturados.length;

console.log("3)Dado um vetor que guarda o valor de faturamento diário de uma distribuidora... ");
console.log(`O menor valor de faturamento ocorrido em um dia do mês: R$ ${menorFaturamento.toFixed(2)}`)
console.log(`O maior valor de faturamento ocorrido em um dia do mês: R$ ${maiorFaturamento.toFixed(2)}`)
console.log(`Número de dias acima da média mensal: R$ ${mediaMensal.toFixed(2)} \n`)

/*
    4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
    • SP – R$67.836,43
    • RJ – R$36.678,66
    • MG – R$29.229,88
    • ES – R$27.165,48
    • Outros – R$19.849,53

    Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
*/

const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

const total = Object.values(faturamentoPorEstado).reduce((accValue, currentValue) => accValue + currentValue, 0);

console.log("4)... calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.");
for(const estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`)
}
console.log("");

/*
    5) Escreva um programa que inverta os caracteres de um string.

    IMPORTANTE:
    a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
    b) Evite usar funções prontas, como, por exemplo, reverse;
*/

const string = 'Rivellon';

function reverseString(string){
    let reversedString = '';
    for(let i = string.length - 1; i >= 0; i--){
        reversedString += string[i]
    }
    return reversedString
}

const reversedString = reverseString(string);

console.log("5) Escreva um programa que inverta os caracteres de um string. ")
console.log('String invertida: ' + reversedString)