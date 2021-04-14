const express = require("express")
const app = express();
const cors = require("cors");
const { spotifyRoute } = require("./routes/spotify");
require('dotenv').config();
const path = require('path');

const corsOption = {
    origin: "*",
    optionsSuccessStatus: 200
};

app.use(cors(corsOption));

app.use(express.json());

//public
app.use(express.static('public'))

//rutas
app.use('/api/music', spotifyRoute)

//VISTAS
app.get('*', (req, res) => {

    res.sendFile(path.resolve(__dirname, 'public/index.html'));

});

app.listen( process.env.port || 8080,()=>{
    console.log("Corriendo servidor en el puerto " +  process.env.port || 8080)
});
