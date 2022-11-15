// Definição das variáveis do caso a se resolver
let precoEtanol = 3.7; // Aproximadamente o valor do Etanol
let precoGasolina = 4.9; // Aproximadamente o valor da Gasolina
let tipoCombustivel = "Gasolina"; // Tipo de gasolina que está no automóvel
let consumoKm = 15; // Consumo médio do carro
let distanciaKm = 90; // Distancia da viagem

// Variáveis para cálculo
let combustivelNecessario = 0;
let valorViagem = 0;

if (tipoCombustivel === "Etanol") {
    // Calcula o Combustível necessário de acordo com a distância da viagem.
    let combustivelNecessario = distanciaKm / consumoKm;
    
    // Calcula o valor do Combustível necessário da viagem
    valorViagem = combustivelNecessario * precoEtanol;
} else {
    // Calcula o Combustível necessário de acordo com a distância da viagem.
    let combustivelNecessario = distanciaKm / consumoKm;
    
    // Calcula o valor do Combustível necessário da viagem
    valorViagem = combustivelNecessario * precoGasolina;
}

// Exibe no terminal
console.log(`O valor da viagem de ${distanciaKm}km para o combustível ${tipoCombustivel} é de R$ ${valorViagem.toFixed(2)}.`);