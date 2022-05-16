// const buttonEnviarNotas = document.getElementById('buttonEnviarNotas');
// buttonEnviarNotas.addEventListener('click', validarNotas);


//Validando valores colocado nas notas:

function validarNotas () {
    let nota1 = Number(document.getElementById('nota1').value)
    let nota2 = Number(document.getElementById('nota2').value)
    let nota3 = Number(document.getElementById('nota3').value)
  
    if (
      nota1 >= 0 &&
      nota1 <= 10 &&
      nota2 >= 0 &&
      nota2 <= 10 &&
      nota3 >= 0 &&
      nota3 <= 10
    ) {
       calcularMedia(nota1, nota2, nota3)
    } else {
      alert('Notas inválidas.')
    }


    console.log(identificacao[length + 1]);
  }

   //CALCULANDO A MÉDIA
   function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3
    console.log(media)
    document.getElementById('media').value = media.toFixed(2)
  
    if (media < 7) {
      alert('Aluno reprovado.')
    } else {
      alert('Parabéns, aluno aprovado!')
    }
    console.log(identificacao);
    return media
  }
