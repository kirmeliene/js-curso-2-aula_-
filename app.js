let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';



//let numeroSecreto =  gerarNumeroAleatorio();
let numeroSecreto =  2;
//let mensagemTentativas = `Você descobriu o número secreto com 5 tentativas!`;

  function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
let tentativas = 1;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}
// function verificarChute() {
//     let chute = document.querySelector('input').value;
//     console.log(numeroSecreto);
//     console.log(chute == numeroSecreto);
// }
function verificarChute() {
        let chute = document.querySelector('input').value;
        
        if (chute == numeroSecreto) {
                exibirTextoNaTela('h1', 'Acertou!');
                let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
                let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
                exibirTextoNaTela('p', mensagemTentativas);
        } else {

                if (chute > numeroSecreto) { exibirTextoNaTela ('p', '0 número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
                tentativas++;                   
        }


        
 }
