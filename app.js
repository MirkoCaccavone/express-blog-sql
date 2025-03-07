// Importo il modulo Express e cors
const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")

// middleware per il CORS
app.use(cors({
    origin: '*'
}));

// importo il router
const postsRouter = require('./routers/routes');

// Usa il router per le richieste alla route '/posts'
app.use("/posts", postsRouter)


// Avvia il server sulla porta specificata
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})