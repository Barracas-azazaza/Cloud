const {Router} = require('express');

var request = require('request');

const spotifyRoute = Router()


const postData = {
    "grant_type": "client_credentials",
    "client_id": "f899e37d222f41f7a0e75ce277ddca1a",
    "client_secret": "30318c279fc043d384082087850f3354"   
};

function updateToken(req, res){
    let client_id = req.params.client_id;
    let client_secret = req.params.client_secret;
    let spotifyUrl = 'https://accounts.spotify.com/api/token';

    var authOptions = {
        url: spotifyUrl,
        headers: {
            Authorization: 'Basic ' + new Buffer.from(client_id + ':' + client_secret).toString('base64')
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };


    request.post(authOptions, (err, httpResponse, body) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'No se pudo obtener el token',
                err
            })
        }

        res.json(body);

    });
}



spotifyRoute.post('/:client_id/:client_secret', [], updateToken);

module.exports = {
    spotifyRoute
}