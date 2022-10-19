const express = require('express');
const server = express();
const dotenv = require('dotenv');
const colors = require('colors');
dotenv.config();

const port = process.env.PORT;
const NOMBRECREADOR = process.env.NOMBRECREADOR;

server.get('/',(request, res)=>{
    res.send(`
    <fieldset>
    <legend>${NOMBRECREADOR}</legend>
    <p>
    el puerto que se esta usando es: ${port}
    </p>
    <img src="./gato.jpg" alt="" srcset="">
</fieldset>`).bgYellow.rainbow;
});

server.listen(port,()=>{
    console.log(`estoy en el puerto port ${port}`.rainbow.bgYellow);
})
