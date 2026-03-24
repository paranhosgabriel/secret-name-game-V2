let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let NumeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log('01');

function saudacao() {
    return console.log('Olá mundo');
}
saudacao();

console.log('02');
function saudacao2(nome) {
    return console.log(`Olá ${nome}`);
}
saudacao2('Gabriel');

console.log('03');

function dobrar(num) {
    return num * 2;
}
console.log('O dobro de 3 é: ', dobrar(3));

console.log('04');
function media(a, b, c) {
    return ((a + b + c) / 3);
}
console.log(media(3, 5, 9));

console.log('05');

function maior(num1, num2) {
    if (num1 >= num2) {
        console.log(`O ${num1} é maior ou igual a ${num2} `);
    } else {
        console.log(`${num2} é maior ou igual a ${num1}  `);
    }
}
maior(4, 5);

console.log('06');

function quadrado(x) {

    return x * x;
}

console.log(`O quadrado de 3 é igual a `, quadrado(3));

//limparcampo
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    exibirMensagem();
}

function verificarChute() {
    console.log('O botão foi clicado');
    console.log('Numero secreto:', NumeroSecreto);
    let chute = document.querySelector('input').value;
    console.log('valor digitado: ', chute);


    if (chute == NumeroSecreto) {
        ExibirTextoNaTela('h1', 'Acertou!');
        let mensagemTentativas = `Você descobriu o número secreto com  ${tentativas} tentativas!`;
         alert(mensagemTentativas);
        ExibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > NumeroSecreto) {
           ExibirTextoNaTela('p', 'O número secreto é menor');
           alert('O número secreto é menor');
            tentativas = tentativas + 1;
            limparCampo();
        } else {
          ExibirTextoNaTela('p', 'O número secreto é maior');
            alert('O número secreto é maior');
            tentativas = tentativas + 1;
            limparCampo();
        }
    }
}

function reiniciarjogo() {
    NumeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagem();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function exibirMensagem (){
      ExibirTextoNaTela('h1', 'Hora do Desafio');
    ExibirTextoNaTela('p', 'Escolha o número entre 1 e 10');
}

function ExibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

exibirMensagem();

function gerarNumeroAleatorio() {
   let NumeroEscolhido =parseInt(Math.random() * numeroLimite+ 1);
   let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosDaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

   if(listaDeNumerosSorteados.includes(NumeroEscolhido)){
    return gerarNumeroAleatorio;
   }else{
    listaDeNumerosSorteados.push(NumeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return NumeroEscolhido;
   }
}

