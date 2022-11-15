// Exercício 1
const { gets, print } = require('./desafio-aux1');
const tabuada = gets();
for (let i = 1; i < 11; i++) {
    print(`${tabuada}x${i} = ${tabuada * i}`);
}