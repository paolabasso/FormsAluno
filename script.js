

const identificacao = [
    {
    id: 1,
    professor: 'Teste',
    disciplina: 'Matemática',
    turma: 'turma1',
    aluno: 'Rosana',
    notas:{
        nota1: '4',
        nota2: '5',
        nota3: '10',
        media: '7',
        },
    },
];

const buttonEntrarNotas = document.getElementById('buttonEntrarNasNotas');
buttonEntrarNotas.addEventListener('click', validarCamposIdentificacao);

//validar os Campos
function validarCamposIdentificacao(){
    const nomeProfessor = document.getElementById('nomeProfessor').value;
    const nomeAluno = document.getElementById('nomeAluno').value;
    const disciplina = document.getElementById('disciplina').value;
    const turma = turmaSelecionada();

    if(!( nomeProfessor && nomeAluno && disciplina && turma)){
        alert('Complete os campos de identificação.')
    } else {
        alert('Identificação realizada com sucesso, adicione as notas!')
        let registroIdentificacao = {  
            id: identificacao.length + 1,
            professor: nomeProfessor,
            disciplina: disciplina,
            turma: turma,
            aluno: nomeAluno,
        };
        identificacao.push(registroIdentificacao);
    }
    console.log(identificacao);
}

//Selecionar a turma
function turmaSelecionada (){
    let turmaSelecionada = '';
    const turmas = document.getElementsByName('turma');

    for (let i = 0; i < turmas.length; i++){
        if (turmas[i].checked) {
            turmaSelecionada = turmas[i].value;
            break
        }
    }
    return turmaSelecionada;
}












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