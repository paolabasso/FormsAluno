
//Construindo um array de objetos para armazenar os registros que realizaremos:

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
    resultado: true
    },
];


//adicionando um evento de click ao button que chamará nossa função de validação.
const buttonEntrarNotas = document.getElementById('buttonEntrarNotas');
buttonEntrarNotas.addEventListener('click', validarCamposIdentificacao);



//validar os Campos, além de validar, essa função chama a função que busca a turma selecionada, cria um objeto com o registro dos inputs, e insere ele no nosso array.
//Essa função tb chamará a renderização da div de notas se os campos estiverem preenchidos.


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
            notas:{
                nota1: '0',
                nota2: '0',
                nota3: '0',
                media: '0',
                },
            resultado: false
        };
        identificacao.push(registroIdentificacao);
        renderizarCampoNotas()
    }

    console.log('fora do if');
    console.log(identificacao);
    
}



//Função que procura qual foi a turma selecionada

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

//Função renderização da div de notas

    function renderizarCampoNotas() {
        //cria um elemento que vai anexar toda a estrutura - pai com filho. pai - div
        const camposNotas = document.createElement('div');
        camposNotas.classList.add('notas');

        const estruturaNotas = `
            <h2>Notas</h2>
                <form action="">
                    <div class="form-group">
                        <label for="nota1">Nota 1</label>
                        <input type="number" id="nota1">
                    </div>
                    <div class="form-group">
                        <label for="nota2">Nota 2</label>
                        <input type="number" id="nota2">
                    </div>
                    <div class="form-group">
                        <label for="nota3">Nota 3</label>
                        <input type="number" id="nota3">
                    </div>
                    <div class="container-submit">
                        <button type="button" id="buttonEnviarNotas" onClick="validarNotas()" >Enviar</button>
                    </div>
                </form>

                <div class="media">
                    <label for="media">Média</label>
                    <output type="number" id="media">
                </div>

        `
        camposNotas.innerHTML = estruturaNotas;

        document.querySelector('.container').appendChild(camposNotas);

    }

    //Validação das Notas

    // const buttonEnviarNotas = document.getElementById('buttonEnviarNotas');
    // buttonEnviarNotas.addEventListener('click', validarNotas);

    function validarNotas() {
        const nota1 = Number(document.getElementById('nota1').value);
        const nota2 = Number(document.getElementById('nota2').value);
        const nota3 = Number(document.getElementById('nota3').value);
        console.log(typeof nota1);


        if (
            nota1 >= 0 &&
            nota1 <= 10 &&
            nota2 >= 0 &&
            nota2 <= 10 &&
            nota3 >= 0 &&
            nota3 <= 10     
        ) {
            media = calcularMedia(nota1, nota2, nota3).toFixed(2);
            resultado(media);
            document.getElementById('media').value = media;
        } else {
            alert('As nota precisam ser entre 0 e 10, por favor, corrigir!')
        }

    }




//        const notas = Number(document.getElementsByClassName('nota').value);





    function calcularMedia(nota1, nota2, nota3) {
        const media = (nota1 + nota2 + nota3) / 3;
        return media
    }

    function resultado(media){
        if(media < 7){
            alert('Aluno reprovado.')
        } else {
            alert('Parabéns, aluno aprovado!')
        }
    }

    console.log(`a média é ${calcularMedia(5, 4, 5)}`);



    /* -------------- PRÓXIMOS PASSO --------------- */


       
        //ARRAY[quantidade de inputs de nota]

        // iterar o array(laço de repetição)
        // if para verificar se o valor estava entre 0 >= || >= 10


        //Talvez vamos precisar desestruturação de objetos para conseguir realizar a inserção de um novo registro.

    /* GUARDAR OS REGISTROS:

       1) COMO INSERIR NOVOS VALORES EM ATRIBUTOS DE UM OBJETO JÁ CRIADO??

    */
   
    /* CRIAR A DIV DE REGISTROS 
        1) Criar a div;
        2) Criar a estrutura dessa div (TABLE); 
    */

    /* ADICIONAR OS REGISTROS
        1)
    */

    /* ------------ BACK-END ------------------*/
    /* CRIAR O SERVIDOR
        1)
    */

    /* CRIAR OS MÉTODOS 
        1)
    */

    /* CONECTAR FRONT COM BACK 
        1)
    */

    /* CRIAR O BANCO DE DADOS 
        1)
    */

    /* CONECTAR O DB AO SERVIDOR 
        1)
    */















// ---------- comentários aleatórios da pesquisa de REGEX

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