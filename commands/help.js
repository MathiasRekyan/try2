const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`^meme`', 'Generates a random meme')
        .addField('`^ascii`', 'Converts text into ascii')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`^calc`', 'Calculate basic math')
        .addField('`^ping`', 'Get the bot\'s API ping')
        .addField('`^weather`', 'Checks weather forecast for provided location')
        .setTimestamp()

        const pages = [
                
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}