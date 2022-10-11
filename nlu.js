const { Wit, log } = require("node-wit")
const fs = require('fs');
const googleTTS = require('google-tts-api');

module.exports = async (ctx) => {

    const client = new Wit({
        accessToken: process.env.WIT_TOKEN,
        logger: new log.Logger(log.DEBUG)
    });

    const response = await client.message(ctx.message.text);

    if (response.intents.length === 0) {
        ctx.reply('No te entiendo');
    } else {
        const intent = response.intents[0].name;
        //1- Rellenar los ficheros con saludos y despedidas (uno por fila)
        //2- A partir del intent, leer el fichero correspondiente.
        //3- Coger una frase aleatoria del fichero (split ('\n))
        //4- Responder con dicha frase.
        const content = fs.readFileSync(`./phrases/${intent}.txt`, 'utf-8');
        const frases = content.split('\n');
        const randowNum = Math.floor(Math.random() * frases.length);

        const url = googleTTS.getAudioUrl(frases[randowNum], {
            lang: 'es',
            slow: false
        });



        //ctx.reply(frases[randowNum]);
        ctx.replyWithAudio(url);
    }


}