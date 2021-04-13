const express = require("express")
const app = express();
const cors = require("cors");
const { spotifyRoute } = require("./routes/spotify");
require('dotenv').config();

const corsOption = {
    origin: "*",
    optionsSuccessStatus: 200
};

app.use(cors(corsOption));

app.use(express.json());

app.use('/api/music', spotifyRoute)

app.listen( process.env.port || 8080,()=>{
    console.log("Corriendo servidor en el puerto " +  process.env.port || 8080)
});
