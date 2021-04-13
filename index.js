const express = require("express")
const app = express();
const cors = require("cors");
const { spotifyRoute } = require("./routes/spotify");
const corsOption = {
    origin: "*",
    optionsSuccessStatus: 200
};

app.use(cors(corsOption));

app.use(express.json());

app.use('/api/music', spotifyRoute)

app.listen( 3000,()=>{
    console.log("Corriendo servidor en el puerto " + 3000)
});
