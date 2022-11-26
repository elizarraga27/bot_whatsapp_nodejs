// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');
const banco = require("./banco");
const stages = require("./stages");

venom.create().then((client) => start(client));
function start(client) {
  client.onMessage((message) => {
   client.sendText(message.from, 
   stages.step[getStage("554491831196@c.us")].obj.execute());
   
  });
}


function getStage(user){
  return banco.db[user].stage;
}


