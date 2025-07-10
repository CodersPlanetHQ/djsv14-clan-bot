const { Events, ActivityType } = require('discord.js');
const chalk = require('chalk');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        const activities = [
            `${client.guilds.cache.size} servers`,
            `with ${client.users.cache.size} users`,
            '/help',
        ];

        let i = 0;
        setInterval(() => {
            client.user.setPresence({
                status: 'dnd',
                activities: [{
                    name: activities[i++ % activities.length],
                    type: ActivityType.Watching,
                }],
            });
        }, 15000);

        const inviteLink = `https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`;

        console.log(chalk.green.bold('----------------------------------------------------------------------'));
        console.log(chalk.green.bold('[') + chalk.blue.bold('BOT') + chalk.green.bold('] ') + chalk.white.bold('Successfully logged in as ') + chalk.cyan.bold(`${client.user.tag}`));
        console.log(chalk.green.bold('[') + chalk.blue.bold('BOT') + chalk.green.bold('] ') + chalk.white.bold('Bot ID: ') + chalk.cyan.bold(`${client.user.id}`));
        console.log(chalk.green.bold('[') + chalk.blue.bold('BOT') + chalk.green.bold('] ') + chalk.white.bold('Serving: ') + chalk.cyan.bold(`${client.guilds.cache.size} servers`) + chalk.white.bold(' with ') + chalk.cyan.bold(`${client.users.cache.size} users`));
        console.log(chalk.green.bold('[') + chalk.blue.bold('BOT') + chalk.green.bold('] ') + chalk.white.bold('Commands Loaded: ') + chalk.yellow.bold(`${client.commands.size}`));
        console.log(chalk.green.bold('[') + chalk.blue.bold('BOT') + chalk.green.bold('] ') + chalk.white.bold('Invite Link: ') + chalk.blue.underline(inviteLink));
        console.log(chalk.green.bold('----------------------------------------------------------------------'));
        console.log(chalk.green.bold('[') + chalk.blue.bold('BOT') + chalk.green.bold('] ') + chalk.white.bold('Bot is ready!'));
    },
};
