
// 1) Crie um programa que dado um número imprima a sua tabuada.
const numero = 4;
console.log("Imprimindo tabuada: ");
for (let index = 1; index <= 10; index++) {
    console.log(`${numero} * ${index} = ${numero * index}`);
}

console.log("---------------------------");

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
// Gera lista aleatória de 10 elementos
const lista2 = Array.from({length: 5}, () => Math.floor(Math.random() * 40));

console.log(`Lista gerada: ${lista2.join(" ")}.`);

for (let index = 0; index < lista2.length; index++) {
    const element = lista2[index];
    
    if (element % 2 === 0) console.log(`Número par encontrado: ${element}`);
}

console.log("---------------------------");

// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
const lista3 = ["Va", "Fa", "Vi", "Fo", "Vu", "Fu"];

for (let index = 0; index < lista3.length; index++) {
    const element = lista3[index];

    if (element.startsWith("V")) console.log(element);
}

console.log("---------------------------");

// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
let lista4 = [];

for (let index = 10; index <= 50; index++) {
    if (index % 2 === 0) lista4.push(index);
}

console.log(`Lista gerada: ${lista4.join(' ')}`);

console.log("---------------------------");

// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
// Ex de lista = [2, 7, 3, 8, 10, 4]
const lista5 = Array.from({length: 10}, () => Math.floor(Math.random() * 11));

console.log(`Lista gerada: ${lista5.join(" ")}.`);
for (let index = 0; index < lista5.length; index++) {
    const element = lista5[index];

    if (element < 5) console.log(`Essa média ficou de recuperação: ${element}.`);   
}

console.log("---------------------------");

// 6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
// Ex de lista de notas = [2, 7, 3, 8, 10, 4]
let maior = -Infinity;

const lista6 = Array.from({length: 10}, () => Math.floor(Math.random() * 11));
console.log(`Lista gerada: ${lista6.join(" ")}.`);

for (let index = 0; index < lista6.length; index++) {
    const element = lista6[index];

    if(element > maior) maior = element;
}
console.log(`A maior nota é de ${maior}.`);