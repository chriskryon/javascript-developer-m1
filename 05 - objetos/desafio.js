/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = 1 / gastoMedioKm;
    }

    calcularValor(km, precoCombustivel) {
        let valorViagem = (this.gastoMedioKm * km) * precoCombustivel;
        console.log(`O valor necessário para a viagem de ${km}km é de R$ ${valorViagem}.`);
    }
}

const c1 = new Carro("Fiat", "Cinza Chumbo", 10);
c1.calcularValor(100, 5);