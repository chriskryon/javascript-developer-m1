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

/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        let imc = this.peso / (this.altura * this.altura);
        let situacaoImc;

        if (imc >= 18.5 && imc < 25) situacaoImc = 'Peso Normal';
        else if (imc >= 25 && imc < 30) situacaoImc = 'Acima do Peso';
        else if (imc >= 30 && imc < 40) situacaoImc = 'Obeso';
        else if (imc > 40) situacaoImc = 'Obesidade Grave';
        else situacaoImc = 'Abaixo do peso';

        console.log(`O IMC é de ${imc.toFixed(2)} e a situação é: ${situacaoImc}`);
    }
}

//Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
const p1 = new Pessoa("José", 70, 1.75);
p1.calcularImc();