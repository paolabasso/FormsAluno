//Criando um array de objetos para armazenar a identificação
const registros = [];

let identificacao = {};




//para ver se o array de objeto foi criado:
//console.log(identificacao)



//Adicionando Evento
const buttonEntrarNotas = document.getElementById('buttonEntrarNasNotas');
buttonEntrarNotas.addEventListener('click', validarCamposIdentificacao );

 

// Responsabilidade: validar campos e criar o registro no array de objetos
function validarCamposIdentificacao() {
    const turma = turmaSelecionada();
    const nomeProfessor = document.getElementById('nomeProfessor').value;
    const nomeAluno = document.getElementById('nomeAluno').value;
    const disciplina = document.getElementById('disciplina').value;
    
   if(!(nomeProfessor && nomeAluno && disciplina && turma) ){
       alert('Complete os campos de identificação.')
   } else {
       alert('Identificação realizada, adicione as notas.')

       //colocando os dados de identificação em um objeto
        identificacao = {
        id: identificacao.length + 1,
        professor: nomeProfessor,
        disciplina: disciplina,
        turma: turma,
        aluno: nomeAluno,
        notas:[],
        media:"",
        resultado: "",
        };
        //inserindo esse objeto em nosso array
    
        renderizarCampoNotas();
   }

};



//Selecionando a turma, como são várias opções, vamos entender que ela retorna um array com as três opções,
//Após, iremos checar qual é a opção que foi selecionada, realizando um laço de repetição, e uma estrutura de decisão.

function turmaSelecionada() {
    
    let  turmaSelecionada = '';
    const turmas = document.getElementsByName('turma');
    

    for (let i = 0; i < turmas.length; i++){
        if (turmas[i].checked) {
            turmaSelecionada = turmas[i].value;
            break
        }
    }


    return turmaSelecionada;
}

function renderizarCampoNotas() {
    const divNotas = document.getElementById('notas');
    divNotas.removeAttribute('hidden');
}



  //------------------------------------------REFATORAÇÃO---------------------------------//
  //Essa é a função que orquestrará o processamento das notas
  function processarNotas() {
    const notas = getNotas();
    if(validarNotas(notas)){
        const media = calcularMedia(notas);
        console.log(media);
        const resultado = resultadoDisciplina(media);
        
        identificacao.notas = notas;
        identificacao.media = media;
        identificacao.resultado = resultado;

        registros.push(identificacao);
        
        renderizarResultados();
        adicionarRegistroTabela();
        resetarFormulario();

    }
  }

  /*PEGANDO VALORES DAS NOTAS
  Quando pegamos os elementos HTML precisamos depois realizar o tratamento para para pegar o os valores e transformar em number. Isso talvez melhorado novamente com map.
  
  usando o for para percorrer o array e fazer um novo array 
  */
  function getNotas() {
      const elementosNotas = document.getElementsByClassName('nota');
      let notas = [];

      for(let i = 0; i < elementosNotas.length; i++){
          notas.push(Number(elementosNotas[i].value));
      }
      return notas;
  }

  //usando o for each para a mesma funcionalidade - iterar um array
  //VALIDANDO NOTAS
  function validarNotas(notas) {
      notas.forEach(nota => {
            if(nota < 0 && nota > 10){
                console.log('Adicione notas entre 0 e 10')
                return false
            }
      });
      return true
  }

  //Calculo de media
  const calcularMedia = ((notas) => {
    let soma = 0;
    notas.forEach(nota => {
        soma += nota;
    });
    return (soma / notas.length).toFixed(2)
  });
  
  //ResultadoDisciplna
  const resultadoDisciplina = ((media) =>{
      if(media < 7){
          alert('Aluno reprovado')
          return 'reprovado';
      } 
      return 'aprovado';
  })

    function renderizarResultados() {
        const divResultados = document.getElementById('resultados');
        divResultados.removeAttribute('hidden');
    }

    function adicionarRegistroTabela() {
        const linhaTabela = document.createElement('tr')
        let colunas = `
        <td>${identificacao.aluno}</td>
        <td>${identificacao.disciplina}</td>`;
        //acrescentando no html
        identificacao.notas.forEach(nota => {
            colunas += `<td>${nota}</td>`
        });

        colunas += `
        <td>${identificacao.media}</td>
        <td>${identificacao.resultado}</td>
        `
        
        linhaTabela.innerHTML = colunas;
        document.querySelector('.corpotabela').appendChild(linhaTabela);
    }

    function resetarFormulario() {
        const formularios = document.getElementsByClassName('formulario');
        for (let i = 0; i < formularios.length; i++) {
            formularios[i].reset()
        }
        const divNotas = document.getElementById('notas');
        divNotas.setAttribute('hidden', 'true');
    }










   








//------------------------- selecionando uma nota ou media:
// console.log(identificacao[0].notas.media)








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