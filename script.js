//Construindo um array de objetos para armazenar os registros que realizaremos:

const registros = [];

//objeto que será inserido no array:
let identificacao = {};

//adicionando um evento de click ao button que chamará nossa função de validação.
const buttonEntrarNotas = document.getElementById('buttonEntrarNotas');
console.log(buttonEntrarNotas);
buttonEntrarNotas.addEventListener('click', validarCamposIdentificacao);

//validar os Campos, além de validar, essa função chama a função que busca a turma selecionada, cria um objeto com o registro dos inputs, e insere ele no nosso array.
//Essa função tb chamará a renderização da div de notas se os campos estiverem preenchidos.

function validarCamposIdentificacao() {
  const nomeProfessor = document.getElementById('nomeProfessor').value;
  const nomeAluno = document.getElementById('nomeAluno').value;
  const disciplina = document.getElementById('disciplina').value;

  const turma = turmaSelecionada();

  if (!(nomeProfessor && nomeAluno && disciplina && turma)) {
    alert('Complete os campos de identificação.');
  } else {
    alert('Identificação realizada com sucesso, adicione as notas!');
    identificacao = {
      id: registros.length + 1,
      professor: nomeProfessor,
      disciplina: disciplina,
      turma: turma,
      aluno: nomeAluno,
      notas: [],
      media: 0,
      resultado: ''
    };

    renderizarCampoNotas();
  }
}

//Função que procura qual foi a turma selecionada

function turmaSelecionada() {
  let turmaSelecionada = '';
  const turmas = document.getElementsByName('turma');

  for (let i = 0; i < turmas.length; i++) {
    if (turmas[i].checked) {
      turmaSelecionada = turmas[i].value;
      break;
    }
  }
  return turmaSelecionada;
}

//Função renderização da div de notas
//Mudamos essa função, antes ela criava elementos HTML dinamicamente, então, mudamos: criamos ele no proprio HTML e colocamos o atributo hidden
function renderizarCampoNotas() {
  const divNotas = document.getElementById('notas');
  divNotas.removeAttribute('hidden');
}

//------------------------ REFATORAÇÃO DO PROCESSAMENTO DE NOTAS

//Esta função orquestrará as funções especificas:
async function processarNotas() {
  const notas = getNotas();
  if (novaValidarNotas(notas)) {
    const media = Number(novoCalcularMedia(notas));
    const resultado = resultadoDisciplina(media);

    // inserindo novos valores no nosso objeto identificação:
    identificacao.notas = notas;
    identificacao.media = media;
    identificacao.resultado = resultado;
    //inserindo no objeto no array de registros:
    registros.push(identificacao);

    //colocando a média no output
    document.getElementById('media').value = media;
    renderizarResultados();
    addRegistroTabela();
    if (await submmitForm(identificacao)) {
      resetarFormulario();
    }

    //Aqui vamos chamar a função que vai renderizar a div com a tabela Resultados
  }
}

//pegar o array de notas(elementos) colocadas e criar um novo array só com as notas
function getNotas() {
  const elementosNotas = document.getElementsByClassName('nota');
  let notas = [];

  for (let i = 0; i < elementosNotas.length; i++) {
    notas.push(Number(elementosNotas[i].value));
  }
  return notas;
}

function novaValidarNotas(notas) {
  notas.forEach(nota => {
    if (nota < 0 || nota > 10) {
      alert('Adicione notas entre 0 e 10');
      return false;
    }
  });
  return true;
}

const novoCalcularMedia = notas => {
  let soma = 0;
  notas.forEach(nota => {
    soma += nota;
  });
  return (soma / notas.length).toFixed(2);
};

const resultadoDisciplina = media => {
  if (media < 7) {
    alert('Aluno foi reprovado.');
    return 'reprovado';
  }
  return 'aprovado';
};

function renderizarResultados() {
  const divResultados = document.getElementById('resultados');
  divResultados.removeAttribute('hidden');
}

function addRegistroTabela() {
  const linhaTabela = document.createElement('tr');
  let colunas = `
    <td>${identificacao.aluno}</td>
    <td>${identificacao.disciplina}</td>`;

  identificacao.notas.forEach(nota => {
    colunas += `<td>${nota}</td>`;
  });

  colunas += `
    <td>${identificacao.media}</td>
    <td>${identificacao.resultado}</td>
    `;

  linhaTabela.innerHTML = colunas;
  document.querySelector('.body-table').appendChild(linhaTabela);
}

function resetarFormulario() {
  const formularios = document.querySelectorAll('.formulario');
  console.log(formularios);
  formularios.forEach(formulario => {
    formulario.reset();
  });
}

async function submmitForm(data) {
  console.log(data);
  const url = 'http://localhost:3000/registers/';
  const result = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json; charset=UTF-8' }
  });
  console.log(result);
  return result.status === 201;
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
