const { Markup, Composer, Scenes } = require('telegraf')

const startScene = new Composer()
startScene.on("text", async (ctx) => {
    try {
        /*ctx.wizard.state.data = {}
        ctx.wizard.state.data.userName = ctx.message.from.username
        ctx.wizard.state.data.firstName = ctx.message.from.first_name
        ctx.wizard.state.data.lastName = ctx.message.from.last_name*/
        await ctx.replyWithHTML(
        "🇺🇦" + " Оформление кредита в Украине " + "🇺🇦" +
        "\n\n👉🏼 Чтобы получить займ небходимо перейти по одной из ссылок ниже и заполнить анкету на сайте. " +
        "В течении 5 минут деньги придут вам на карту." +
        '<i>' + "\n\n🙋‍♀️ Совет: чтобы увеличить вероятность и скорость одобрения займа, оставьте анкеты сразу в нескольких компаниях, а лучше во всех!\n\n" + '</i>' +
        "MicroCash - bit.ly/microcash_ua"+"\n🔹до 4000 грн.🔹до 30 дн.🔹1.7% в день\n\n"+
        "Твоя позика - bit.ly/tvoya_pozika_ua\n"+"🔹до 100 000 грн.🔹до 30 дн.🔹0.7% в день\n\n"+
        "ТСreditPlus - bit.ly/credit_plus_ua\n"+"🔹до 10000 грн.🔹до 30 дн.🔹0.01% в день\n\n"+
        "Novi Kredyty - bit.ly/NoviCredity_ua\n"+"🔹до 5000 грн.🔹до 60 дн.🔹1,7% в день\n\n"+
        "KUMO - bit.ly/KUMO_ua\n"+"🔹до 5000 грн.🔹до 60 дн.🔹1,7% в день\n\n"+
        "Loany - bit.ly/Loany_ua\n"+"🔹до 25000 грн.🔹до 180 дн.🔹1,2% в день\n\n"+
        "Е-cash - bit.ly/e-cash_ua\n"+"🔹до 15000 грн.🔹до 30 дн.🔹0,01% в день\n\n"+
        "VeroCash - bit.ly/verocash_ua\n"+"🔹до 5000 грн.🔹до 30 дн.🔹0,01% в день\n\n"+
        "MyWallet - bit.ly/mywallet_ua\n"+"🔹до 30000 грн.🔹до 30 дн.🔹0,1% в день\n\n"+
        "Євро Гроші - bit.ly/evro_groshi_ua\n"+"🔹до 10000 грн.🔹до 30 дн.🔹2,5% в день\n\n"+
        "MisterCash - bit.ly/MisterCash_ua \n"+"🔹до 15000 грн.🔹до 30 дн.🔹0,01% в день\n\n"+
        "Готівочка - bit.ly/gotivochka_ua \n"+"🔹до 9000 грн.🔹до 16 дн.🔹0,01% в день\n\n"+
        "MONETKA - bit.ly/monetka_ua \n"+"🔹до 4000 грн.🔹до 30 дн.🔹0,01% в день\n\n"+
        "Global Credit - bit.ly/global_credit_ua \n"+"🔹до 15000 грн.🔹до 30 дн.🔹0,01% в день\n\n"+
        "Zecredit - bit.ly/zecredit_ua \n"+"🔹до 7000 грн.🔹до 30 дн.🔹0,01% в день\n\n"+
        "CreditBox - bit.ly/creditbox_ua \n"+"🔹до 20000 грн.🔹до 30 дн.🔹2,3% в день\n\n"+
        "Koshelok - bit.ly/koshelok_ua\n"+"🔹до 15000 грн.🔹до 65 дн.🔹0,01% в день\n\n"+
        "CreditBox - bit.ly/creditbox_ua\n"+"🔹до 20000 грн.🔹до 30 дн.🔹2,3% в день\n\n"+
        "Быстрозайм - bit.ly/bistrozaim_ua\n"+"🔹до 15000 грн.🔹до 65 дн.🔹0,01% в день\n\n"+
        "Moneyveo - bit.ly/monyveo_ua\n"+"🔹до 17000 грн.🔹до 30 дн.🔹0,01% в день\n\n"+
        "Gofingo - bit.ly/gofingo_ua\n"+"🔹до 10000 грн.🔹до 30 дн.🔹2,5% в день\n\n"+
        "КАЧАЙ ГРОШІ - bit.ly/kachay_groshi_ua\n"+"🔹до 10000 грн.🔹до 30 дн.🔹1,9% в день\n\n"+
        "Forzacredit - bit.ly/forzacredit_ua\n"+"🔹до 5000 грн.🔹до 30 дн.🔹0,01% в день\n\n"+
        "Cashberry - bit.ly/cashberry_ua\n"+"🔹до 15000 грн.🔹до 30 дн.🔹0,01% в день\n\n"+
        "Money4you - bit.ly/money4you_ua\n"+"🔹до 12000 грн.🔹до 30 дн.🔹1,99% в день\n\n"+
        "CreditKasa - bit.ly/credit_kasa_ua\n"+"🔹до 20000 грн.🔹до 27 дн.🔹0,1% в день\n\n"+
        "E-groshi - bit.ly/e_groshi_ua\n"+"🔹до 10000 грн.🔹до 30 дн.🔹0,01% в день\n\n"+
        "Ccloan - bit.ly/ccloan_ua\n"+"🔹до 15000 грн.🔹до 30 дн.🔹0,01% в день\n\n"+
        "Компаньон Финанс - bit.ly/kf_ua\n"+"🔹до 15000 грн.🔹до 180 дн.🔹0,1% в день\n\n"+
        "Alexcredit - bit.ly/alexcredit_ua\n"+"🔹до 12000 грн.🔹до 30 дн.🔹0,01% в день"+
        "\n\nMycredit - bit.ly/my_credit_ua\n"+"🔹до 15000 грн.🔹до 64 дн.🔹0,01% в день"+
        "\n\nCreditplus - bit.ly/mycreditplus_ua"+"\n🔹до 20000 грн.🔹до 30 дн.🔹0,01% в день",
        {
            disable_web_page_preview: true
        })
         return ctx.wizard.next()
    } catch (e) {
        console.log(e)
    }
})

/* const titleScene = new Composer()
titleScene.on('text', async (ctx) => {
    try {
        ctx.wizard.state.data.title = ctx.message.text
        await ctx.replyWithHTML("CreditBox | Taksa http://bit.ly/CreditBox_UA – длиннный кредит от CreditBox! \n"
        +"<Подробнее: http://bit.ly/CreditBox_UA")
        return ctx.wizard.next()
    } catch (e) {
        console.log(e)
    }
}) */

const ukScene = new Scenes.WizardScene('ukWizard', startScene)
module.exports = ukScene