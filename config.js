const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "U6tBmKLZ#yWeWacF9I4w5PUOHmENJmJwz9oAZH2e_c2LcXXzd2Dk",
ALIVE_IMG: process.env.ALIVE_IMG || "https://iili.io/dmKqfTP.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello I'm alive now",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "public",
SUDO_NB: process.env.SUDO_NB || "22502331988",
OWNER_NAME: process.env.OWNER_NAME || "𝐋𝚯𝐔𝐊𝐒𝚯𝚴-𝐔𝚭𝐔𝚳𝚫𝐊𝚰",
BOT_NAME: process.env.BOT_NAME || "NARUTO-MD",
AUTO_VOICE: process.env.AUTO_VOICE || "true"

};

