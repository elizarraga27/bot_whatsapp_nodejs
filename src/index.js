// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const banco = require("./banco");
const stages = require("./stages");

venom.create().then((client) => start(client));
function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Hi') {
      client.sendText(message.from, 'Oi Sou Jarvi bot em programação para whatsapp 🕷');
    }
  });
}


function getStage(user){
  return banco.db[user].stage;
}


