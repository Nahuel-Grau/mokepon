const seleccionAtaques = document.getElementById("seleccion-ataques")
const contenedorAtaques = document.getElementById("Contenedor-tarjeta")


const vidaEne= document.getElementById("vida-enemigo")
const vidajug= document.getElementById("vida-jugador")
const botonMascotaJugador = document.getElementById('boton-mascota') 
const botonReiniciar = document.getElementById("boton-reiniciar")
const sectionSeleccionarMascota= document.getElementById("seleccionar-mascota")
const spanMascotaEnemigo = document.getElementById("mascota-enemigo")
const spanMascotaJugador = document.getElementById("mascota-jugador")
const mensaje= document.getElementById("mensajes")
const sectionMensajes= document.getElementById("mensajes")
const textAtaqueJugador = document.getElementById("ataque-jugador")
const textAtaqueEnemigo = document.getElementById("ataque-enemigo")
const moverDerecha = document.getElementById("moverDerecha")
const moverArriba = document.getElementById("moverArriba")
const moverAbajo = document.getElementById("moverAbajo")
const moverIzquierda = document.getElementById("moverIzquierda")

const sectionVerMapa = document.getElementById("ver-mapa")
const mapa = document.getElementById("mapa")



let jugadorId = null
let ataqueJugador = [] 
let ataquePc = []
let vidaJugador = 3
let vidaEnemigo = 3
let win
let a
let inputHipodoge = document.getElementById('Hipodoge')
let inputCapipepo = document.getElementById('Capipepo')
let inputRatigueya = document.getElementById('Ratigueya')
let inputLangostelvis = document.getElementById('Langostelvis')
let inputTucapalma = document.getElementById('Tucapalma')
let inputPydos = document.getElementById('Pydos')
let mascotaJugador
let botones = [] 
let botonFuego 
let botonAgua 
let botonTierra 
let sectionSeleccionarAtaque= document.getElementById("seleccionar-ataque")
let ataquesMokeponEnemigo 
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let intervalo
let mapaBackground = new Image()
mapaBackground.src= "./img/mokemapa.png"
let mascotaJugadorObjeto
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350




if (anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa -20
}
alturaQueBuscamos = anchoDelMapa * 600/800
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

let lienzo = mapa.getContext("2d")
class Mokepon{
    constructor(nombre, foto, vida, fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida 
        this.ataques =[]
        this.ancho = 30
        this.alto= 30
        this.x= aleatorio(mapa.width - this.ancho)
        this.y = aleatorio(mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
         
            this.x,//x
            this.y, //y
            this.ancho, //ancho
            this.alto //alto
        )}
}
/* let imagenCapipepo = new Image */
let hipodoge = new Mokepon("Hipodoge", "./img/mokepons_mokepon_hipodoge_attack.png", 5, "./img/hipodoge.png")
let Capipepo = new Mokepon("Capipepo","./img/mokepons_mokepon_capipepo_attack.png", 5, "./img/capipepo.png" )
let ratigueya = new Mokepon("Ratigueya","./img/mokepons_mokepon_ratigueya_attack.png", 5, "./img/ratigueya.png")
let langostelvis = new Mokepon("Langostelvis", "./img/Langostelvis.png", 5, "./img/Langostelvis.png")
let tucapalma = new Mokepon("Tucapalma","./img/Tucapalma.png",5, "./img/Tucapalma.png")
let pydos = new Mokepon("Pydos", "./img/Pydos.png", 5, "./img/Pydos.png")

let hipodogeEnemigo = new Mokepon("Hipodoge", "./img/mokepons_mokepon_hipodoge_attack.png", 5, "./img/hipodoge.png")
let CapipepoEnemigo = new Mokepon("Capipepo","./img/mokepons_mokepon_capipepo_attack.png", 5, "./img/capipepo.png")
let ratigueyaEnemigo = new Mokepon("Ratigueya","./img/mokepons_mokepon_ratigueya_attack.png", 5, "./img/ratigueya.png")
let langostelvisEnemigo = new Mokepon("Langostelvis", "./img/Langostelvis.png", 5, "./img/Langostelvis.png")
let tucapalmaEnemigo = new Mokepon("Tucapalma","./img/Tucapalma.png",5, "./img/Tucapalma.png")
let pydosEnemigo = new Mokepon("Pydos", "./img/Pydos.png", 5, "./img/Pydos.png")

let mokepones = [] 

//para añadir objetos al array 

hipodoge.ataques.push(
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
)
hipodogeEnemigo.ataques.push(
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
)

Capipepo.ataques.push(
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
)
CapipepoEnemigo.ataques.push(
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
)
ratigueya.ataques.push(
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "AGUA 💧", id: "boton-agua"},
)
ratigueyaEnemigo.ataques.push(
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "AGUA 💧", id: "boton-agua"},
)
langostelvis.ataques.push(
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
)
langostelvisEnemigo.ataques.push(
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
)
tucapalma.ataques.push(
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
)
tucapalmaEnemigo.ataques.push(
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "AGUA 💧", id: "boton-agua"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
)

pydos.ataques.push(
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "AGUA 💧", id: "boton-agua"},
)
pydosEnemigo.ataques.push(
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "TIERRA 🌱", id: "boton-tierra"},
    {nombre: "FUEGO 🔥", id: "boton-fuego"},
    {nombre: "AGUA 💧", id: "boton-agua"},
)
mokepones.push(hipodoge,Capipepo,ratigueya,langostelvis,tucapalma,pydos)



//para que cargue el html
window.addEventListener("load", iniciarJuego )
function iniciarJuego(){
    unirseAljuego()
    
   sectionSeleccionarAtaque.style.display="none" 
   sectionVerMapa.style.display= "none"

    mokepones.forEach((Mokepon)=>{
        ataquesMokepon= `
        <input type="radio" name="mascota" id=${Mokepon.nombre} />
                   
                    <label class="tarjeta-mokepon" for=${Mokepon.nombre}>
                        <p>${Mokepon.nombre}</p>
                        <img src=${Mokepon.foto} alt=${Mokepon.nombre}>
        `
        contenedorAtaques.innerHTML += ataquesMokepon

         inputHipodoge = document.getElementById('Hipodoge')
         inputCapipepo = document.getElementById('Capipepo')
         inputRatigueya = document.getElementById('Ratigueya')
         inputLangostelvis = document.getElementById('Langostelvis')
         inputTucapalma = document.getElementById('Tucapalma')
         inputPydos = document.getElementById('Pydos')
         botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
         botonReiniciar.addEventListener("click", reiniciarJuego)
         botonReiniciar.style.display="none"
        
         
       
    })

    function unirseAljuego(){
        
        fetch("http://localhost:8080/unirse")
            .then(function (res){
              
                if(res.ok){
                    res.text()
                        .then(function (respuesta){
                            console.log(respuesta)
                            jugadorId = respuesta
                        })
                }
            })
        
    }
    
    
    
  

 
}
  
//funcion para los valores aleatorios que necesite mas adelante
function aleatorio(valor){
    return Math.ceil(Math.random()*valor);
     }

    // funcion para seleccionar mascota del enemigo 
function seleccionarMascotaEnemigo(enemigo){      
             
   

     
              
       /* let pc = aleatorio(mokepones.length-1)
      
        ataquesMokeponEnemigo = mokepones[pc].ataques
        spanMascotaEnemigo.innerHTML = mokepones[pc].nombre
        secuenciaAtaque() */
 
         spanMascotaEnemigo.innerHTML = enemigo.nombre
            ataquesMokeponEnemigo = enemigo.ataques
            clearInterval(intervalo)
            secuenciaAtaque() 
            
} 
   


       //funcion para seleccionar mascota
function seleccionarMascotaJugador(){     
        if(inputHipodoge.checked){
            spanMascotaJugador.innerHTML=inputHipodoge.id
            mascotaJugador=inputHipodoge.id
        }else if(inputCapipepo.checked){
                    spanMascotaJugador.innerHTML=inputCapipepo.id
                    mascotaJugador = inputCapipepo.id
        }else if(inputRatigueya.checked){
                    spanMascotaJugador.innerHTML=inputRatigueya.id
                    mascotaJugador = inputRatigueya.id
        } else if(inputLangostelvis.checked){
                    spanMascotaJugador.innerHTML=inputLangostelvis.id
                    mascotaJugador=inputLangostelvis.id
        }  else if(inputTucapalma.checked){  
                    spanMascotaJugador.innerHTML= inputTucapalma.id
                    mascotaJugador=inputTucapalma.id
        }  else if(inputPydos.checked){  
                    spanMascotaJugador.innerHTML=inputPydos.id
                    mascotaJugador=inputPydos.id
        } else{
            alert("No seas tarado man, elegí uno")
            reiniciarJuego()
        }
       
        seleccionarMokepon(mascotaJugador)
        
        extraerAtaques(mascotaJugador)
        
        sectionSeleccionarMascota.style.display="none" 
        /* seleccionarMascotaEnemigo() */
        sectionVerMapa.style.display="flex"   
        iniciarMapa()
        
} 

function seleccionarMokepon(mascotaJugador){
    fetch("http://localhost:8080/mokepon/" + jugadorId, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            mokepon: mascotaJugador
        }
          
        )
    })
}


function extraerAtaques(mascotaJugador)
{let ataques
    for(let i=0;i<mokepones.length;i++){
        if(mascotaJugador===mokepones[i].nombre){
            ataques=mokepones[i].ataques}
    }
    mostrarAtaques(ataques)
} 

function mostrarAtaques(ataques){
    ataques.forEach((ataques) =>{
      botones =  `
        <button class="boton-ataques  BAtaque" id=${ataques.id} >${ataques.nombre} </button>
        `
        seleccionAtaques.innerHTML += botones
    })

      

    botonFuego = document.getElementById("boton-fuego")
    botonAgua = document.getElementById("boton-agua")
    botonTierra = document.getElementById("boton-tierra")
  /*   botonFuego.addEventListener("click", ataqueFuego)     
    botonAgua.addEventListener("click", ataqueAgua)       
    botonTierra.addEventListener("click", ataqueTierra)  */
    botones = document.querySelectorAll(".BAtaque")
    
}

function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener("click", (e) =>{
            if(e.target.innerText === "AGUA 💧"){
                ataqueJugador.push("AGUA")
                console.log(ataqueJugador)
                boton.style.background = "#150050"
                boton.disabled = true
            }else if(e.target.innerText === "FUEGO 🔥"){
                ataqueJugador.push("FUEGO")
                console.log(ataqueJugador)
                boton.style.background = "#150050"
                boton.disabled = true
            }else{
                ataqueJugador.push("TIERRA")
                console.log(ataqueJugador)
                boton.style.background = "#150050"
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })

    
}




function crearMensaje(){
   
    let parrafo= document.createElement("p")   
    sectionMensajes.innerHTML= win
     if (victoriasJugador < victoriasEnemigo){
        sectionMensajes.innerHTML="HAS PERDIDO 💀☠💀"
           mensaje.appendChild(parrafo)   
            botonReiniciar.style.display="block"
    }   else if(victoriasJugador > victoriasEnemigo) {
            sectionMensajes.innerHTML="FELICIDADES! GANASTE LA PARTIDA 🎉🎉🎉"
          mensaje.appendChild(parrafo)
            botonReiniciar.style.display="block"
    }else/* (victoriasEnemigo === victoriasJugador) */{
        sectionMensajes.innerHTML="EMPATE 😴😴🥱"
          mensaje.appendChild(parrafo)
          botonReiniciar.style.display="block"
    }
    
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataquePc[enemigo]
}

function combate(){  
    
    for (let index = 0; index < ataqueJugador.length; index++) {
         indexAmbosOponentes(index, index)

        if(indexAtaqueJugador === indexAtaqueEnemigo){
            win = "EMPATE 🤷‍♂️"
       /*      textAtaqueEnemigo.innerHTML=indexAtaqueEnemigo
            textAtaqueJugador.innerHTML=indexAtaqueJugador */
            console.log("empataron "+victoriasEnemigo, victoriasJugador)
             }else  if(indexAtaqueJugador == "AGUA" &&  indexAtaqueEnemigo == "FUEGO"){
                win = "GANASTE 🎉"
              /*   textAtaqueEnemigo.innerHTML=indexAtaqueEnemigo
                textAtaqueJugador.innerHTML=indexAtaqueJugador */
                victoriasJugador++
                vidajug.innerHTML=victoriasJugador
                
                console.log("gano jug  "+victoriasEnemigo, victoriasJugador)
            } else if(indexAtaqueJugador == "FUEGO" &&  indexAtaqueEnemigo == "TIERRA"){
                win = "GANASTE 🎉"                
               /*  textAtaqueEnemigo.innerHTML=indexAtaqueEnemigo
                textAtaqueJugador.innerHTML=indexAtaqueJugador */
                victoriasJugador++
                vidajug.innerHTML=victoriasJugador
               
                console.log("gano jug  "+victoriasEnemigo, victoriasJugador)
            }else if( indexAtaqueJugador == "TIERRA" &&  indexAtaqueEnemigo == "AGUA" ){
                win = "GANASTE 🎉"                
            /*     textAtaqueEnemigo.innerHTML=indexAtaqueEnemigo
                textAtaqueJugador.innerHTML=indexAtaqueJugador */
                victoriasJugador++
                vidajug.innerHTML=victoriasJugador
                console.log("gano jug  "+victoriasEnemigo, victoriasJugador)
                
            }else{
                
                win = "PERDISTE 🤦‍♂️"
            /*     textAtaqueEnemigo.innerHTML=indexAtaqueEnemigo
                textAtaqueJugador.innerHTML=indexAtaqueJugador */
                victoriasEnemigo++
                console.log("perdio jug  "+victoriasEnemigo, victoriasJugador)
                vidaEne.innerHTML=victoriasEnemigo  
    }

   
    crearMensaje()
    }           
}

function ataqueAleatorioEnemigo(){
    let pc = aleatorio(ataquesMokeponEnemigo.length)
    if(pc == 0 || pc == 1){
        ataquePc.push("FUEGO")
        console.log(ataquePc)
    }else if(pc == 3 || pc == 4){
        ataquePc.push("AGUA")
        console.log(ataquePc)
    }else {
        ataquePc.push("TIERRA")
        console.log(ataquePc)
    }
    iniciarPelea()
    
}    

function iniciarPelea(){
   if (ataqueJugador.length === 5){
    combate()
   }
}
function reiniciarJuego(){
    location.reload()
}

function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0,0,mapa.width,mapa.height) 
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    mascotaJugadorObjeto.pintarMokepon()

    enviarposicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)
    
    hipodogeEnemigo.pintarMokepon()
    CapipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
        revisarColision(hipodogeEnemigo)
        revisarColision(CapipepoEnemigo)
        revisarColision(pydosEnemigo)
        revisarColision(ratigueyaEnemigo)
        revisarColision(tucapalmaEnemigo)
        revisarColision(langostelvisEnemigo)

       
  
    
    }}

    function enviarposicion(x,y){
        fetch("http://localhost:8080/mokepon/:"+jugadorId+"/posicion", {
            method: "post",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({
                x,
                y
            })
        })

        }
    

function Derecha(){
    mascotaJugadorObjeto.velocidadX = 5
    
       
}

function Izquierda(){
    mascotaJugadorObjeto.velocidadX = -5
    
}

function Abajo(){
    mascotaJugadorObjeto.velocidadY =  +5
    
}

function Arriba (){
    mascotaJugadorObjeto.velocidadY = -5
    
}

function detenerMovimiento(){
   const miMokepon = obtenerObjetoMascota()
   mascotaJugadorObjeto.velocidadY= 0
   mascotaJugadorObjeto.velocidadX=0
}

function iniciarMapa(){
 
    mascotaJugadorObjeto = obtenerObjetoMascota()
    moverDerecha.addEventListener("mousedown", Derecha)
    moverIzquierda.addEventListener("mousedown", Izquierda)
    moverAbajo.addEventListener("mousedown", Abajo)
    moverArriba.addEventListener("mousedown", Arriba)
    moverDerecha.addEventListener("mouseup", detenerMovimiento)
    moverIzquierda.addEventListener("mouseup", detenerMovimiento)
    moverAbajo.addEventListener("mouseup", detenerMovimiento)
    moverArriba.addEventListener("mouseup", detenerMovimiento)
    window.addEventListener("keydown", MovimientoDeJugador)
    window.addEventListener("keyup", detenerMovimiento)
    intervalo = setInterval(pintarCanvas, 50)
   
    }
 
    function MovimientoDeJugador(Event){
        console.log(Event.key)
        switch (Event.key) {
            case "ArrowUp":
                Arriba()
                
                break;
            case "ArrowDown":
                Abajo()
                break;
    
            case "ArrowLeft":
                Izquierda()
                break;
    
            case "ArrowRight":
                Derecha()
                break;
    
            default:
                break;
        }}

function obtenerObjetoMascota (){
    {let ataques
        for(let i=0;i<mokepones.length;i++){
            if(mascotaJugador===mokepones[i].nombre){
                return mokepones[i]
        
    
            }
        }
    }
}

function revisarColision(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x
    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota= mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x
    

    if(abajoMascota < arribaEnemigo || arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo|| izquierdaMascota > derechaEnemigo){
            return
        }
        detenerMovimiento()
        /* seleccionarMascotaEnemigo(enemigo) */
        sectionVerMapa.style.display = "none"
        sectionSeleccionarAtaque.style.display="flex" 
           /*  alert("hay coloxion con " +enemigo.nombre) */
           seleccionarMascotaEnemigo(enemigo)
}