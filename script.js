//Construindo um array de objetos para armazenar os registros que realizaremos:



//objeto que será inserido no array:
let identificacao = {};
const path = "http://localhost:5000/registers/"; 





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
        identificacao = {  
            professor: nomeProfessor,
            disciplina: disciplina,
            turma: turma,
            aluno: nomeAluno,
            notas:[],
            media: 0,
            resultado: "",
        };

        renderizarCampoNotas()
    }
    
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
    return turmaSelecionada
}

//Função renderização da div de notas
//Mudamos essa função, antes ela criava elementos HTML dinamicamente, então, mudamos: criamos ele no proprio HTML e colocamos o atributo hidden
function renderizarCampoNotas() {
        const divNotas = document.getElementById('notas');
        divNotas.removeAttribute('hidden');
}


 //------------------------ REFATORAÇÃO DO PROCESSAMENTO DE NOTAS

 //Esta função orquestrará as funções especificas:
function processarNotas() {
    const notas = getNotas();
    if(novaValidarNotas(notas)){
        const media = novoCalcularMedia(notas);
        const resultado = resultadoDisciplina(media);
        
        // inserindo novos valores no nosso objeto identificação:
        identificacao.notas = notas;
        identificacao.media = media;
        identificacao.resultado = resultado;
        //inserindo no objeto no array de registros:
        //registros.push(identificacao);

        //colocando a média no output
        document.getElementById('media').value = media;
        renderizarResultados();
     
        //salvar o registro no back-end
        if(enviarRegistro(identificacao)){ 
            addRegistroTabela();
            resetarFormulario();
        }


        //Aqui vamos chamar a função que vai renderizar a div com a tabela Resultados
    }
};


//pegar o array de notas(elementos) colocadas e criar um novo array só com as notas
function getNotas() {
    const elementosNotas = document.getElementsByClassName('nota');
    let notas = [];

    for(let i = 0; i <elementosNotas.length; i++){
        notas.push(Number(elementosNotas[i].value));
    }
    return notas
}

function novaValidarNotas(notas) {
    notas.forEach(nota => {
        if(nota < 0 || nota > 10){
            alert('Adicione notas entre 0 e 10');
            return false
        }        
    });
    return true
}

const novoCalcularMedia = ((notas) => {
    let soma = 0;
    notas.forEach(nota => {
        soma += nota;
    });
    return (soma / notas.length ).toFixed(2)
});

const resultadoDisciplina = ((media) => {
    if(media < 7){
        alert('Aluno foi reprovado.')
        return 'reprovado'
    }
    return 'aprovado'
});

function renderizarResultados() {
    const divResultados = document.getElementById('resultados');
    divResultados.removeAttribute('hidden')
}

 async function addRegistroTabela() {

    const registros = await getRegistros();
    console.log(registros);

    //forEach que vai percorrer o JSON que ta vindo do nosso back, a cada registro, ele renderiza uma nova linha.
     registros.forEach(registro => {
        const linhaTabela = document.createElement('tr');
        linhaTabela.setAttribute('id', registro._id);
        let colunas = `
        <td>${registro.aluno}</td>
        <td>${registro.disciplina}</td>`

        registro.notas.forEach(nota => {
            colunas += `<td>${nota}</td>`
        });

        colunas += `
        <td>${registro.media}</td>
        <td>${registro.resultado}</td>
        <td><button value="${registro._id}" onClick="deleteRegister(event)">X</button></td>
        <td><button value="${registro._id}" onClick="getRegister(event)">Editar</button></td>
        `

        linhaTabela.innerHTML = colunas;
        document.querySelector('.body-table').appendChild(linhaTabela);
    });
}

function resetarFormulario() {
    
    const formularios = document.querySelectorAll('.formulario');
    formularios.forEach(formulario => {
       formulario.reset()
    });
    
}

async function enviarRegistro(data) {
    const url = 'http://localhost:5000/registers/'
    const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-type': 'application/json; charset=UTF-8 '}
    });
    console.log(result);
    return result.status === 201;
    //metodos, url, objeto que vamos mandar - ela vai fazer a requisição para o back-end
}

async function getRegistros() {
    const url = 'http://localhost:5000/registers/'

    let result = await fetch(url, {
        method: 'GET',
        headers: {'Content-type': 'application/json; charset=UTF-8 '}
    });
    result = await result.json();

    return result
}

async function deleteRegister(e){
    id = e.currentTarget.value;
    if(confirm(`Tem certeza que deseja apagar este registro ${id}?`)){
        const url = 'http://localhost:5000/registers/' + id;
        const result = await fetch(url, {
            method: 'DELETE',
            headers: {'Content-type': 'application/json; charset=UTF-8 '}
        });
        console.log(result);

        if(result === 400){
            console.log('Deu erro!')
            return result.status(400);
        }
        
        document.getElementById(id).remove();
        return result.status === 204;

    }
}

function getRegister(e) {
    id = e.currentTarget.value;
    console.log(id);
    // if(//quando o back-end responder que encontrou o ID, nós queremos que uma nova página seja renderizada, com as informações que estão vindo desse registro

    //     //resposta que será um JSON;
    // ){
    //     window.location.href = "./editar.html";    
    // }else{
    //     //não saia da página e de um alerta, informando que não foi encontrado.
    // }
}


    /* -------------- PRÓXIMOS PASSO --------------- */

    /* CRIAR A DIV DE REGISTROS - 
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