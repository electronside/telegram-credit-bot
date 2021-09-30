const { Markup, Composer, Scenes } = require('telegraf')
const startScene = new Composer()

startScene.on('text', async (ctx) => {
    try {
        /*ctx.wizard.state.data = {}
        ctx.wizard.state.data.userName = ctx.message.from.username
        ctx.wizard.state.data.firstName = ctx.message.from.first_name
        ctx.wizard.state.data.lastName = ctx.message.from.last_name*/
        await ctx.replyWithHTML(
        "🇷🇺 Список оформления кредита в России 🇷🇺" +
        "\n\n👉🏼 Чтобы получить займ небходимо перейти по одной из ссылок ниже и заполнить анкету на сайте. " +
        "В течении 5 минут деньги придут вам на карту." +

        '<i>' + "\n\n🙋‍♀️ Совет: чтобы увеличить вероятность и скорость одобрения займа, оставьте анкеты сразу в нескольких компаниях, а лучше во всех!\n\n" + '</i>' +
        "Vivus - bit.ly/vivus_credit\n" +
        "🔹до 100 000 руб.🔹до 365 дн.🔹0,01% в день\n\n" +

        "Робот Займер - bit.ly/zaimer_credit\n" +
        "🔹до 30 000 руб.🔹до 30 дн.🔹1% в день\n\n" +

        "Веб-займ - bit.ly/veb_zaim_credit\n" +
        "🔹до 30 000 руб.🔹до 30 дн.🔹0,8% в день\n\n" +

        "Турбозайм - bit.ly/turbozaim_credit\n" +
        "🔹до 50 000 руб.🔹до 168 дн.🔹0,91% в день\n\n" +

        "Credit7 - bit.ly/my_credit_7\n" +
        "🔹до 30 000 руб.🔹до 30 дн.🔹0,72% в день\n\n" +

        "Мультизайм - bit.ly/multizaim\n" +
        "🔹до 60 000 руб.🔹до 140 дн.🔹0,65% в день\n\n" +

        "МФО До Зарплаты - bit.ly/dozarplati_credit\n" +
        "🔹до 100 000 руб.🔹до 365 дн.🔹0,01% в день\n\n" +

        "VIVA Деньги - bit.ly/viva_dengi\n" +
        "🔹до 50 000 руб.🔹до 365 дн.🔹0,2% в день\n\n" +

        "Webbankir - bit.ly/webbankir_credit\n" +
        "🔹до 30 000 руб.🔹до 31 дн.🔹0,9% в день\n\n",
        {
            disable_web_page_preview: true
        })
        return ctx.wizard.next()
    } catch (e) {
        console.log(e)
    }
})

const ruScene = new Scenes.WizardScene('ruWizard', startScene)
module.exports = ruScene