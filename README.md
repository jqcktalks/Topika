# Topika

Welcome to Topika, a free & open-sourced Discord bot to help encourage community engagement. You can either choose
to host the bot yourself, with the steps listed below, or use our hosted version, free of charge.

If you like the bot, please leave a star on the repository to let other users know you enjoyed, and if you **really** liked it, feel free to [buy me a coffee (donate)](https://buymeacoff.ee/dawson), it helps a lot!

Please note, the self-hosted version might not be as heavily updated as the main version, but you are free to make your own adjustments as you see fit, the code is very basic and easy to understand.

## Hosted

To invite the hosted version of Topika, which **cannot** be customized, click [here](https://topika.gg/invite). 

If you are looking for a customized version, please see the instructions below about how to self-host your own version of the bot.

## Self Hosted

In order to self host the bot, you will need to create an application on the [Discord Developer Portal](https://discord.com/developers/applications), making sure that all of the intents are enabled. 

You will also need to create an `.env` file in your project, with the following information, or alternatively, see the provided example file in `configuration/.env.example`.

`BOT_TOKEN` - This can be found in the [Discord Developer Portal](https://discord.com/developers/applications).

`CLIENT_ID`- This can also be found on the [Discord Developer Portal](https://discord.com/developers/applications) and is usually a string of **18** numbers.

`COLOR` - This can be either a word color, such as **PINK**, or a specific hexidecimal color. If you do not specify a value, the default color will be white.

`NAME` - This is the name that you want to be displayed, if you do not specify a value, the name 'Topika' will be used.

## Adding Topics

If you wish to add your own topics to the list, this can be done on both the hosted & self-hosted versions, meaning this is open to everybody. Simply follow the instructions below.

For those who choose to self host, you can simply edit the `data/topics.txt` file as you wish, adding all of your topics and then restart your bot.

For those who choose to use the hosted version, please create a **pull request** with your topics in `data/topics.txt` and provided they are good enough, they will get added to the bot.

Please note, all topics should be on **seperate** lines, or else this will cause issues and you will end up with multiple topics being outputted at once.