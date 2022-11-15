
// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex2');
const quantidade = gets();
let maiorPar = -Infinity;
let menorImpar = Infinity;

for (let i = 0; i < quantidade; i++) {
    const atual = gets();
    if (atual % 2 === 0 && atual > maiorPar) maiorPar = atual;
    else if (atual % 2 === 1 && atual < menorImpar) menorImpar = atual;
}

print(`Maior número par: ${maiorPar}`);
print(`Menor número impar: ${menorImpar}`);