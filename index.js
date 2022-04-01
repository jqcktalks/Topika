// Topika - a free, open-sourced Discord bot to help encourage community engagement.
// Created & maintained by https://github.com/jqcktalks.

// https://buymeacoff.ee/dawson

///////////////////////////////////////////////////////////////////////////////////

// --- Get environment variables --- //
require('dotenv').config();

// --- Run our bot --- //
const { Client, Intents, Collection } = require("discord.js");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

module.exports = client;
client.commands = new Collection();

// --- Start our handlers --- //
require("./handlers/slash")(client);
require("./handlers/events")(client);
