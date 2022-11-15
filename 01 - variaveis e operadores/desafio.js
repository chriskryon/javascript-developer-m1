// Definição das variáveis do caso a se resolver
let precoCombustivel = 3.70; // Aproximadamente o valor do Etanol
let consumoKm = 11; // Consumo médio do carro
let distanciaKm = 70; // Distancia da viagem

// Calcula o Combustível necessário de acordo com a distância da viagem.
let combustivelNecessario = distanciaKm / consumoKm;

// Calcula o valor do Combustível necessário da viagem
let valorViagem = combustivelNecessario * precoCombustivel;

// Exibe no terminal
console.log(`O valor da viagem de ${distanciaKm}km é de R$ ${valorViagem.toFixed(2)}.`);