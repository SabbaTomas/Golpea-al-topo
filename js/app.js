const cuadros = document.querySelectorAll('.cuadro');
const topo = document.querySelector('.topo');
const tiempoRestante = document.querySelector('#tiempoRestante')
const puntaje = document.querySelector('#puntaje')

let resultado = 0;
let hitTopo
let tiempoTotal = 60;
let timerId = null

moverTopo();

function randomCuadro () {
    cuadros.forEach(cuadro => {
        cuadro.classList.remove('topo');
    })

    let randomCuadro = cuadros[Math.floor(Math.random() * 9)]
    randomCuadro.classList.add('topo')

    hitTopo = randomCuadro.id;
}

cuadros.forEach(cuadro => {
    cuadro.addEventListener('mousedown', () => {
        if(cuadro.id == hitTopo) {
            resultado++
            puntaje.textContent = resultado
            hitTopo = null
        }
    })
})

function moverTopo () {
    timerId = setInterval(randomCuadro, 500)
}

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