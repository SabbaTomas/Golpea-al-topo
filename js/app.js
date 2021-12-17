const cuadros = document.querySelectorAll('.cuadro');
const topo = document.querySelector('.topo');
const tiempoRestante = document.querySelector('#tiempoRestante')
const puntaje = document.querySelector('#puntaje')

let resultado = 0;
let hitPostition
let tiempoTotal = 60;
let timerId = null

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
    timerId = setInterval(randomCuadro, 500)
}
moverTopo();

function contador () {
    tiempoTotal--
    tiempoRestante.textContent = tiempoTotal

    if(tiempoTotal == 0){
        clearInterval(Temporadizador)
        clearInterval(timerId)
        alert("Gamer Over! tu resultado es: " + resultado)
    }
}

let Temporadizador = setInterval(contador, 1000)