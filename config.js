const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "put sesson id",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/9b44e3266c065df601430.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi QUEEN-KYLIE-MD Is Online Now 💻\n*💻 Owner* - QUEEN-KYLIE-MD\n\n*💻 Owner Number* -94718913389",
SUDO_NB: process.env.SUDO_NB || "94718913389",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
AUTO_VOICE:"true"
};

