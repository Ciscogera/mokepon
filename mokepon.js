let ataqueJugador
let ataqueEnemigo
let resultadoCombate
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"
    
    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonPlanta = document.getElementById("boton-planta")
    botonPlanta.addEventListener("click", ataquePlanta)   
    
    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}


function seleccionarMascotaJugador() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"

    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let jugar = 1
    let inputDantecito = document.getElementById("Dantecito")
    let inputMonkigiuli = document.getElementById("Monkigiuli")
    let inputGaticisco = document.getElementById("Gaticisco")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputDantecito.checked) {
            alert("Seleccionaste a Dantecito"),
            spanMascotaJugador.innerHTML = "Dantecito"
    }   else if (inputMonkigiuli.checked) {
            alert("Seleccionaste a Monkigiuli")
            spanMascotaJugador.innerHTML = "Monkigiuli"
    }   else if (inputGaticisco.checked) {
            alert("Seleccionaste a Gaticisco")
            spanMascotaJugador.innerHTML = "Gaticisco"
    }   else {
            alert("Selecciona una mascota");
            jugar = 0
    }

    if (jugar == 1) {
        seleccionarMascotaEnemigo()
    }
}

function seleccionarMascotaEnemigo(){
        let seleccionAleatoria = aleatorio(1,3)
        let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

        if (seleccionAleatoria == 1){
            spanMascotaEnemigo.innerHTML = "Dantecito"
        } else if (seleccionAleatoria){
            spanMascotaEnemigo.innerHTML = "Monkigiuli"
        } else {
            spanMascotaEnemigo.innerHTML = "Gaticisco"
        }

}


function ataqueFuego() {
        ataqueJugador = "FUEGO"
        ataqueAleatorioEnemigo()
}

function ataqueAgua() {
        ataqueJugador = "AGUA"
        ataqueAleatorioEnemigo()
}

function ataquePlanta() {
        ataqueJugador = "PLANTA"
        ataqueAleatorioEnemigo()

}

function ataqueAleatorioEnemigo(){
        ataqueEnemigo = aleatorio(1,3)
        
        if (ataqueEnemigo == 1){
                ataqueEnemigo = "FUEGO"
        } else if (ataqueEnemigo == 2){
                ataqueEnemigo = "AGUA"
        } else if (ataqueEnemigo == 3){
                ataqueEnemigo = "PLANTA"
        }

        combate()
}

function combate() {
        let spanVidasJugador = document.getElementById("vidas-jugador")
        let spanVidasEnemigo = document.getElementById("vidas-enemigo")

        if(ataqueEnemigo == ataqueJugador) {
            resultadoCombate = "EMPATE"
        } else if((ataqueJugador== "FUEGO" && ataqueEnemigo == "PLANTA") || (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") || (ataqueJugador == "PLANTA" && ataqueEnemigo == "AGUA")) {
            resultadoCombate = "GANASTE 😂"
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else {
            resultadoCombate = "PERDISTE 💔"
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }

        crearMensajes()

        revisarVidas()
}

function revisarVidas() {
        if (vidasEnemigo == 0) {
                crearMensajeFinal("Ejo mi niño!! GANASTEE")
        } else if (vidasJugador == 0) {
                crearMensajeFinal("NUUUUU!!, pucha perdiste 😢")
        }
}

function crearMensajes() {
        let sectionMensajes = document.getElementById("mensajes")

        let parrafo = document.createElement("p")
        parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + " = " + resultadoCombate

        sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal) {
        let sectionMensajes = document.getElementById("mensajes")

        let parrafo = document.createElement("p")
        parrafo.innerHTML = resultadoFinal

        sectionMensajes.appendChild(parrafo)

        let botonFuego = document.getElementById("boton-fuego")
        botonFuego.disabled = true
        let botonAgua = document.getElementById("boton-agua")
        botonAgua.disabled = true
        let botonPlanta = document.getElementById("boton-planta")
        botonPlanta.disabled = true 
        
        let sectionReiniciar = document.getElementById("reiniciar")
        sectionReiniciar.style.display = "block"

 }

function reiniciarJuego() {
        location.reload()
}

function aleatorio(min,max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }

window.addEventListener("load", iniciarJuego)