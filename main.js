const Balls = require('discord.js')
const fs = require('fs')
const client = new Balls.Client()

client.on('ready', ready => {
    console.log("Smell Bot is now online!")
    console.log("Please note, I did this in a rush so I could go play siege, I was challenged and that is why I didn't take the time to clean the code, or make it 80x more effecient and clean. This is a BAD representation of my work.")
    console.log("--- LOGGING BEGINS ---")
});

client.on('message', async message => {
    const args = message.content.trim().split(/ +/g);
    if(message.content.startsWith("!smell")) {
        if(args[1]){
            const embed = new Balls.MessageEmbed()
            .setTitle("Please Read Below!")
            .setDescription(`<@${message.mentions.users.first().id}> smells like FUCKING SHIT!`)
            .setThumbnail(message.mentions.users.first().avatarURL())
            .setFooter(`Take a fucking shower you dirty bastard!`)

            message.channel.send(embed)
            console.log(`${message.author.username} ran the !smell command while also pinging ${message.mentions.users.first().username}`)
            message.delete()
        } else {
        const embed = new Balls.MessageEmbed()
        .setTitle("Please Read Below!")
        .setDescription(`<@${message.author.id}> smells like FUCKING SHIT!`)
        .setThumbnail(message.author.avatarURL())
        .setFooter(`Take a fucking shower you dirty bastard!`)

        message.channel.send(embed)
        console.log(`${message.author.username} ran the !smell command`)
        message.delete()
        }
    } else if(message.content.startsWith("!credits")) {
        message.channel.send(`My creator is Hyperz#0001`).then(msg => msg.delete({ timeout: 9000 }))
        message.delete()
        console.log(`${message.author.username} ran the !credits command and I responded with the creator of the bot (Hyperz#0001)`)
    }
});

client.login('your-bot-token')