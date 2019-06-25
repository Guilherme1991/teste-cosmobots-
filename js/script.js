/*variável local que será usada para receber uma tag filha com criação de elemento!*/
let firstDiv = document.getElementById('container')

/*Passando um parâmetro de função que retorna uma String,
 usa o split para quebrar a frase e inverte seus valores usando o como array, 
 usa a reverse para inverter a posição da array e o join para unir tudo novamente!*/
function inverteTexto(invertendo){
return invertendo = 'É pau é pedra é o fim do caminho!'.split('').reverse().join('');
}

/*Manipulando o DOM, onde adiciono um evento de escuta na janela, 
crio um elemento e adiciono na Div principal "container", preferi usar Arrow function
nessa função!
*/
window.addEventListener('load',e=>{
    let valor = document.createElement('h2')
    valor.innerHTML = inverteTexto()
    firstDiv.appendChild(valor)  
})