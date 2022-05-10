
//pegar esses elementos pelo DOM
let nomeProfessor = document.getElementById('nomeProfessor');
console.log(nomeProfessor);
// let nomeAluno = document.getElementById('nomeAluno').value;
// let disciplina = document.getElementById('disciplina').value;
// let turma = document.getElementById('turma').value;

const buttonEntrarNotas = document.getElementById('buttonEntrarNasNotas');



buttonEntrarNotas.addEventListener('click', (e) => {
    console.log(nomeProfessor);
    e.preventDefault();
    e.stopPropagation();
})
    // e.preventDefault();
    // e.eventoClick();


// function eventoClick(){
//     console.log('de novo');
// };












//Regex para deixar letras no campo de Nome Professor e Nome do Aluno
//Conferir se todos os campos foram preenchidos.
//Calcular média; Decidir se foi aprovado ou reprovado;
//Inserir uma div com uma table com os dados



/* EXPRESSÃO PARA VALIDAR NOME
function valida(nome){
    return !!nome.match(/^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/) + ' ' + nome;
}

const testes = ["Maria Silva", "Åsa Ekström", "John Ó Súilleabháin", "Gregor O'Sulivan", "Maria  Silva", "Maria silva", "maria Silva", "MariaSilva"];
const resultados = testes.map(valida);
console.log(resultados);
*/