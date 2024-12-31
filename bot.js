const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('messageCreate', async (message) => {
    if (message.content === '+pureontop') {
        const role = message.guild.roles.cache.find(r => r.name === 'Client Use MM');
        if (role) {
            try {
                await message.member.roles.add(role);
                message.channel.send('Great news! Your request has been approved, and you are now accepted. Feel free to proceed with our hitting services.');
            } catch (error) {
                console.error(error);
                message.channel.send('There was an error assigning the role.');
            }
        } else {
            message.channel.send('Role not found!');
        }
    }
});

// Log in using the bot token
client.login('MTMyMzMyMTg5MjgxNTM3MjM3OA.GqLFqT.pwt3C21OfBfn6KnkunItDipgN__byvm0-pnXx4');