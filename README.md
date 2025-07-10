# djsv14-clan-bot

This is a Discord bot project built with Discord.js v14, featuring a modular command handler and organized feature set.

## Features

*   **AntiNuke:** (Placeholder - Implement Anti-Nuke functionality)
*   **Moderation:** (Placeholder - Implement Moderation commands)
*   **Automod:** (Placeholder - Implement Automated Moderation rules)
*   **Logger:** (Placeholder - Implement Logging functionality)
*   **Utility:** (Placeholder - Implement Utility commands)
*   **Join To Create:** (Placeholder - Implement Voice Channel creation on join)
*   **Voice:** (Placeholder - Implement Voice-related commands and features)
*   **Custom Role:** (Placeholder - Implement Custom Role management)
*   **Welcomer:** (Placeholder - Implement Welcomer messages)
*   **Ticket:** (Placeholder - Implement Ticket system)

## Prerequisites

*   [Node.js](https://nodejs.org/) (v16 or higher)
*   [npm](https://www.npmjs.com/) (Node Package Manager)
*   A Discord Bot account (Create one at the [Discord Developer Portal](https://discord.com/developers/applications))

## Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/CodersPlanetHQ/djsv14-clan-bot
    cd djsv14-clan-bot
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` file:**

    Create a `.env` file in the root directory of the project and add your bot token and client ID:

    ```
    BOT_TOKEN=YOUR_BOT_TOKEN
    CLIENT_ID=YOUR_CLIENT_ID
    ```

    *   Replace `YOUR_BOT_TOKEN` with your actual bot token from the Discord Developer Portal.
    *   Replace `YOUR_CLIENT_ID` with your bot's client ID from the Discord Developer Portal.

4.  **Configure Intents:**

    *   Go to the Discord Developer Portal, select your bot, and navigate to the "Bot" tab.
    *   Enable the necessary intents under the "Privileged Gateway Intents" section.  The following intents are used in this project:
        *   `Guilds`
        *   `Guild Messages`
        *   `Message Content`
        *   `Guild Members`
        *   `Guild Voice States`
    *   **Note:** The `Message Content` intent may require bot verification.

5.  **Run the bot:**

    ```bash
    node index.js
    ```

## Directory Structure

```
djsv14-clan-bot/  (Root Bot Directory)
├── .env              # Environment variables (API keys, tokens)
├── README.md         # This file
├── index.js          # Main bot file
├── commands/         # Directory for commands
│   ├── AntiNuke/
│   │   └── example_antinuke_command.js  # Example AntiNuke command
│   ├── Moderation/
│   │   └── ban.js                     # Example Ban command
│   ├── Automod/
│   │   └── example_automod_command.js   # Example Automod command
│   ├── Logger/
│   │   └── example_logger_command.js    # Example Logger command
│   ├── Utility/
│   │   └── ping.js                      # Example Ping command
│   ├── JoinToCreate/
│   │   └── example_jointocreate_command.js # Example JoinToCreate command
│   ├── Voice/
│   │   └── example_voice_command.js     # Example Voice command
│   ├── CustomRole/
│   │   └── example_customrole_command.js  # Example CustomRole command
│   ├── Welcomer/
│   │   └── example_welcomer_command.js    # Example Welcomer command
│   └── Ticket/
│       └── example_ticket_command.js      # Example Ticket command
└── events/           # Directory for events
    └── ready.js                     # Example Ready event
```

