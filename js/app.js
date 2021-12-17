const cuadros = document.querySelectorAll('.cuadro');
const topo = document.querySelector('.topo');
const tiempoRestante = document.querySelector('#tiempoRestante')
const puntaje = document.querySelector('#puntaje')

let resultado = 0;

function randomCuadro () {
    cuadros.forEach(cuadro => {
        cuadro.classList.remove('topo');
    })

    let randomPosicion = cuadros[Math.floor(Math.random() * 9)]
}

randomCuadro();