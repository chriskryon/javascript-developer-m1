// Exercício 3
const { gets, print } = require('./desafio-aux3');

const quantidade = gets();
let pares = [];

for(let i = 0; i < quantidade; i++) {
    const atual = gets();
    if (atual % 2 === 0) pares.push(atual);
}

print(`Números Pares: ${pares.join(', ')}`);