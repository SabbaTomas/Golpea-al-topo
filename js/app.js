const cuadros = document.querySelectorAll('.cuadro');
const topo = document.querySelector('.topo');
const tiempoRestante = document.querySelector('#tiempoRestante')
const puntaje = document.querySelector('#puntaje')

let resultado = 0;
let hitPostition
let tiempoTotal = 10;

function randomCuadro () {
    cuadros.forEach(cuadro => {
        cuadro.classList.remove('topo');
    })

    let randomCuadro = cuadros[Math.floor(Math.random() * 9)]
    randomCuadro.classList.add('topo')

    hitPostition = randomCuadro.id;
}

cuadros.forEach(cuadro => {
    cuadro.addEventListener('mousedown', () => {
        if(cuadro.id == hitPostition) {
            resultado++
            puntaje.textContent = resultado
            hitPostition = null
        }
    })
})

function moverTopo () {
    let timerId = null
    timerId = setInterval(randomCuadro, 1000)
}
moverTopo();

function contador () {
    tiempoTotal--
    tiempoRestante.textContent = tiempoTotal

    if(tiempoTotal == 0){
        clearInterval(Temporadizador)
        alert("Gamer Over! tu resultado es: " + resultado)
    }
}

let Temporadizador = setInterval(contador, 1000)