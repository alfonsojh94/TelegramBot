const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'google',
    apiKey: process.env.GOOGLE_API_KEY,

};

module.exports = async (ctx) => {
    const direccion = ctx.message.text.split('/donde')[1];

    const geocoder = NodeGeocoder(options);
    const res = await geocoder.geocode(direccion);

    ctx.replyWithLocation(res[0].latitude, res[0].longitude);
}