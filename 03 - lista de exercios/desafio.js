
/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/
let nota1 = 4, nota2 = 5, nota3 = 5;
let media = (nota1 + nota2 + nota3) / 3;
let situacaoMedia;

if (media >= 5 && media < 7) situacao = "Recuperação";
else if (media >= 7) situacao = "Passou de Semestre";
else situacaoMedia = "Reprovação";
console.log(`A média do aluno foi de ${media.toFixed(2)} e a situação é: ${situacaoMedia}`);

console.log('--------------------------------------');

/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/
let peso = 30;
let altura = 1.6;
let imc = peso / (altura * altura);
let situacaoImc;

if (imc >= 18.5 && imc < 25) situacaoImc = 'Peso Normal';
else if (imc >= 25 && imc < 30) situacaoImc = 'Acima do Peso';
else if (imc >= 30 && imc < 40) situacaoImc = 'Obeso';
else if (imc > 40) situacaoImc = 'Obesidade Grave';
else situacaoImc = 'Abaixo do peso';

console.log(`O IMC é de ${imc.toFixed(2)} e a situação é: ${situacaoImc}`);

console.log('--------------------------------------');

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
let precoNormal = 100;
let condicaoDePagamento = 4;
let valorFinal;

if (condicaoDePagamento === 1) valorFinal = precoNormal * 0.9;
else if (condicaoDePagamento === 2) valorFinal = precoNormal * 0.85;
else if (condicaoDePagamento === 3) valorFinal = precoNormal;
else if (condicaoDePagamento === 4) valorFinal = precoNormal + (precoNormal * 0.1);

console.log(`O produto no valor de R$ ${precoNormal} com a condição de pagamento de código ${condicaoDePagamento} ficará no valor de R$ ${valorFinal}.`);

console.log('--------------------------------------');