
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
                        <input type="number" name="nota1">
                    </div>
                    <div class="form-group">
                        <label for="nota2">Nota 2</label>
                        <input type="number" name="nota2">
                    </div>
                    <div class="form-group">
                        <label for="nota3">Nota 3</label>
                        <input type="number" name="nota3">
                    </div>
                    <div class="container-submit">
                        <button type="button">Enviar</button>
                    </div>
                </form>

                <div class="media">
                    <label for="media">Média</label>
                    <input type="number" name="media">
                </div>

        `
        camposNotas.innerHTML = estruturaNotas;

        document.querySelector('.container').appendChild(camposNotas);

    }

    /* -------------- PRÓXIMOS PASSO --------------- */

    /* VALIDAÇÃO DE NOTAS:
        1) vamos verificar se as notas inseridas são entre 0 e 10;
        2) Se não forem: Dar alerta de que as notas precisam estar nesse intervalo
        3) Essa função também chamará o calculo de média e a inserção do registro.
    */

    /* CALCULAR A MÉDIA:
        1) Pegar os valores dos inputs de notas;
        2) Calcular a média
        3) Inserir essas notas no objeto existente de acordo com o ID;
        4) Decidir se o aluno foi aprovado ou reprovado;
    */

    /* CRIAR A DIV DE REGISTROS 
        1) Criar a div;
        2) Criar a estrutura dessa div; 
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