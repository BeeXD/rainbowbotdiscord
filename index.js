const { Client, version } = require('discord.js');
const { 
    token, 
    serverID, 
    roleID, 
    interval 
} = require('./config.json')
const bot = new Client();

bot.on("ready", async() => {
    console.log(`[ Client ] ${bot.user.tag} Is Now Online`);

    let guild = bot.guilds.cache.get(serverID) 
    if(!guild) throw `[ Error ] Server Peida Nashod: ${serverID}` 

    let role = guild.roles.cache.find(u => u.id === roleID) 
    if(!role) throw `[ Error ] Role Peida Nashod, Server Name: ${guild.name}` 
    
    if(interval < 60000) console.log(`\n[!!!] Khatarnake Havaset bashe`) 

    setInterval(() => {
        role.edit({color: 'RANDOM'}).catch(err => console.log(`[ Error ] An error occurred during the role change.`));
    }, interval)

    bot.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'Rainbow Color',
            type: 'PLAYING',
        }
    })
})


bot.login(token)


