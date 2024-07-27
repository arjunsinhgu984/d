const mongoose = require('mongoose');
const { Database } = require("quickmongo");
const Neptune = require("./src/structures/Client");
const client = new Neptune();

client.connect()
// Define snipes globally
client.snipes = new Map();

// Event handler for messageDelete
client.on("messageDelete", message => {
    client.snipes.set(message.channel.id, message);
});

module.exports = client;
client.db = new Database(client.config.mongourl);
client.db.connect()