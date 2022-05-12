//CÓDIGO PARA TESTAR COMO EVENTO MOUSE ENTER MOUSE LEAVE

const divErrada = document.getElementsByClassName('infos');
console.log(divErrada);

const divMudandoCor = document.getElementById('infos');
console.log(divMudandoCor);


divMudandoCor.addEventListener('mouseenter', e => {
    e.target.style.background = 'red';
    });


divMudandoCor.addEventListener('mouseleave', e => {
    e.target.style.background = 'white';
    });