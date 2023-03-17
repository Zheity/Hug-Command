const { Client, ChatInputCommandInteraction, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require("discord.js")


module.exports = {
    name: "hug",
    description: "hug a member",
    category: "Fun",
    options: [
        {
            name: "user",
            description: "Mention a member.",
            type: 6,
            required: true,
        },
    ],

    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */

    run: async(client, interaction) => {

        let user = interaction.options.getUser('user')

        let lista1 = [
            'https://imgur.com/RgfGLNk.gif',
            'https://i.imgur.com/r9aU2xv.gif',
            'https://i.imgur.com/wOmoeF8.gif',
            'https://i.imgur.com/nrdYNtL.gif',
            'https://imgur.com/82xVqUg.gif'
        ];

        let lista2 = [
            'https://imgur.com/c3WzMZu.gif',
            'https://imgur.com/BPLqSJC.gif',
            'https://imgur.com/ntqYLGl.gif',
            'https://imgur.com/v47M1S4.gif',
            'https://imgur.com/6qYOUQF.gif'
        ];

        let random1 = lista1[Math.floor(Math.random() * lista1.length)];
        let random2 = lista2[Math.floor(Math.random() * lista2.length)];

        let embed = new EmbedBuilder()
            .setDescription(`**${interaction.user} Gave a hug to ${user}.**`)
            .setImage(`${random1}`)
            .setColor("#c5a0c1")

        let button = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('abracar')
                    .setLabel('Give back')
                    .setStyle(ButtonStyle.Primary)
                    .setDisabled(false)

            )

        let embed1 = new EmbedBuilder()
            .setDescription(`**${user} Returned the hug from ${interaction.user}.**`)
            .setColor("#c5a0c1")
            .setImage(`${random2}`);

        interaction.reply({ embeds: [embed], components: [button] }).then(() => {

            const filter = i => i.customId === 'abracar' && i.user.id === user.id;
            const collector = interaction.channel.createMessageComponentCollector({ filter, max: 1 });

            collector.on('collect', async i => {

                if (i.customId === 'abracar') {
                    i.reply({ embeds: [embed1] })
                }
            });
        })

    }
}