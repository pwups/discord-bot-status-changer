const { Client } = require('discord.js-selfbot-v13');

const client = new Client({
    checkUpdate: false
});

const reloadPresence = require('./config.js');
const keepAlive = require('./keepAlive.js');

keepAlive();

if (!process.env.TOKEN) {
    console.error("Add a token inside Secrets.");
    process.exit();
}

client.login(process.env.TOKEN);

console.clear();
client.on("ready", async () => {
    global.startTime = new Date();
    reloadPresence(client);
});
