// Exercício 2
const { gets, print } = require('./desafio-aux2');

const quantidade = gets();
let menor = Infinity;
let maior = -Infinity;

for(let i = 0; i < quantidade; i++) {
    const atual = gets();
    if (atual > maior) maior = atual;
    else if (atual < menor) menor = atual;
}

print(`Maior número: ${maior}`);
print(`Menor número: ${menor}`);