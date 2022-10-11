const express = require('express');
const { Telegraf } = require('telegraf')
const axios = require('axios');
const { create } = require('./models/user.model');

//Carga del fichero de entorno
require('dotenv').config();

//Carga de la base de datos
require('./config/db');

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

//Configuración de BOT
app.use(bot.webhookCallback('/url_telegram'));
bot.telegram.setWebhook(`${process.env.BOT_URL}/url_telegram`)


app.post('/url/telegram', (req, res) => {
    res.send('Termina');
});

//MIDDLEWARE
bot.use(async (ctx, next) => {
    console.log(ctx.from);
    try {
        await create(ctx.from);
    } catch (err) {
        console.log('No se inserta el usuario');
    } finally {
        next();

    }
});


//COMANDOS
//test
bot.command('test', require('./commands/test'));

//tiempo
bot.command('tiempo', require('./commands/tiempo'));

//Donde
bot.command('donde', require('./commands/donde'));

//eventos Bot responde cont texto
bot.on('text', require('./nlu'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` Servidor escuchando en puerto ${PORT} `);
});

