const { Telegraf, Scenes, Markup, session } = require('telegraf')
require('dotenv').config()
const bot = new Telegraf(process.env.BOT_TOKEN)

const ukScene = require('./scenes/uk')
const ruScene = require('./scenes/ru')
const kzScene = require('./scenes/kz')

const stage = new Scenes.Stage([ukScene, ruScene, kzScene])
bot.use(session())
bot.use(stage.middleware())

bot.hears('🇺🇦 УКРАИНА 🇺🇦', ctx => ctx.scene.enter('ukWizard'))
bot.hears('🇷🇺 РОССИЯ 🇷🇺', ctx => ctx.scene.enter('ruWizard'))
bot.hears('🇰🇿 КАЗАХСТАН 🇰🇿', ctx => ctx.scene.enter('kzWizard'))

bot.start(async (ctx) =>  {
try {
    await ctx.replyWithHTML(
        '✋🏼 Привет! Я Бот 🤖 который поможет получить займ.\n'+ 'Не хватает финансов? Я выручу!\n' +
         'Выберите страну для займа 👇🏼', Markup.keyboard([
            ["🇺🇦 УКРАИНА 🇺🇦"],
            ['🇷🇺 РОССИЯ 🇷🇺'],
            ['🇰🇿 КАЗАХСТАН 🇰🇿']
        ]).oneTime().resize());
} catch (e) {
    console.log(e)
    }
})
bot.launch()