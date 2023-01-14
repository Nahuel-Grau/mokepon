const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const jugadores = []

class Mokepon{
    constructor(nombre){
        this.nombre = nombre
    }    }

class Jugador {
    constructor(id){
        this.id = id

       
    }

    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }
    
    actualizarPosicion(x,y){
        this.x =x
        this.y =y
    }
   
}

app.get("/unirse", (req, res)=>{
    const id = `${Math.random()}`

    const jugador = new Jugador(id)

    res.setHeader('Access-Control-Allow-Origin', "*")

    jugadores.push(jugador)

    res.send(id)
})

app.post("/mokepon/:jugadorId", (req,res) =>{
    const jugadorId = req.params.jugadorId || ""
    const nombre = req.body.mokepon || ""
    const mokepon = new Mokepon(nombre)
    
    const jugadoresIndex= jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if(jugadoresIndex >= 0 ){
        jugadores[jugadoresIndex].asignarMokepon(mokepon)
    }
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/mokepon/:jugadorId/posicion" , (req, res)=>{
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadoresIndex= jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if(jugadoresIndex >= 0 ){
        jugadores[jugadoresIndex].actualizarPosicion(x,y)
    }

    res.end()
})



app.listen(8080, ()=>{
    console.log("servidor funcionando")
})

