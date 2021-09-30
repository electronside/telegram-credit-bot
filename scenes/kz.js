const { Markup, Composer, Scenes } = require('telegraf')
const startScene = new Composer()

startScene.on('text', async (ctx) => {
    try {
        /*ctx.wizard.state.data = {}
        ctx.wizard.state.data.userName = ctx.message.from.username
        ctx.wizard.state.data.firstName = ctx.message.from.first_name
        ctx.wizard.state.data.lastName = ctx.message.from.last_name*/
        await ctx.replyWithHTML(
        "🇰🇿 Список оформления кредита в Казахстане 🇰🇿" +
        "\n\n👉🏼 Чтобы получить займ небходимо перейти по одной из ссылок ниже и заполнить анкету на сайте. " +
        "В течении 5 минут деньги придут вам на карту.\n\n" +

        '<i>' + "🙋‍♀️ Совет: чтобы увеличить вероятность и скорость одобрения займа, оставьте анкеты сразу в нескольких компаниях, а лучше во всех!\n\n" + '</i>' +

        "Kviku - bit.ly/Kviku_KZ\n" + 
        "🔹до 2 млн тенге.🔹до 50 дн.🔹0.7% в день\n\n" +
        
        "Credit365 - bit.ly/Credit365_KZ\n" +
        "🔹до 145 000 тенге.🔹до 30 дн.🔹0,01% в день\n\n" +
        
        "Деньги Click - bit.ly/Money_Click_KZ\n" +
        "🔹до 145 000 тенге.🔹до 30 дн.🔹0,01% в день\n\n" *
        
        "I-credit - bit.ly/I-Credit_KZ\n" +
        "🔹до 135 000 тенге.🔹до 30 дн.🔹1% в день\n\n" +
        
        "Quick Money - bit.ly/Quick_Money_KZ\n" +
        "🔹до 130 000 тенге.🔹до 45 дн.🔹0,66% в день\n\n" +
        
        "Tengo KZ - bit.ly/TengoKZ\n" + 
        "🔹до 145 000 тенге.🔹до 30 дн.🔹0,1% в день\n\n" +
        
        "Ccloan - bit.ly/Ccloan_KZ\n" +
        "🔹до 130 000 тенге.🔹до 45 дн.🔹0,01% в день\n\n" +
        
        "Credito - https://bit.ly/Credito_KZ\n" +
        "🔹до 38 000 тенге.🔹до 37 дн.🔹0,66% в день\n\n" +
        
        "TurboMoney - https://bit.ly/Turbomoney\n" +
        "🔹до 100 000 тенге.🔹до 61 дн.🔹0,19% в день\n\n" +
        
        "«Честное слово» - https://bit.ly/Chestnoe_Slovo\n" +
        "🔹до 40 000 тенге.🔹до 10 дн.🔹0,1% в день\n\n" +
        
        "MoneyMan - https://bit.ly/Money_Man_KZ\n" +
        "🔹до 145 000 тенге.🔹до 31 дн.🔹0,01% в день\n\n" +
        
       "ОО «Займер» - https://bit.ly/Zaimer_KZ\n" +
        "🔹до 145 000 тенге.🔹до 30 дн.🔹0,01% в день\n\n" +
        
        "Creditplus - https://bit.ly/CreditPlus_KZ\n" +
        "🔹до 145 000 тенге.🔹до 30 дн.🔹0,01% в день\n\n" ,
        {
            disable_web_page_preview: true
        })
        return ctx.wizard.next()
    } catch (e) {
        console.log(e)
    }
})

const kzScene = new Scenes.WizardScene('kzWizard', startScene)
module.exports = kzScene