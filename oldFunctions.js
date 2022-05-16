// FUNÇÕES QUE VALIDAVAM OS INPUT DE NOTAS E CALCULAVAM MEDIA





    //Validação das Notas


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




