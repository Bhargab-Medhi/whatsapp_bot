

const Amdi = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const Language = require('../language');
const Lang = Language.getString('scrapers');

const eng = `● *Bot Admins List* ●\n` + 
`● *Mr. B Bot Version: 1.2.0v* ●\n\n` +
`*1. Bhargab* : https://wa.me/918133847120\n` +
`*2. Büññy®* : https://wa.me/918876708209\n`

      

if (Config.LANG == 'EN') {
    if (Config.WORKTYPE == 'private') {
        Amdi.applyCMD({pattern: 'botmin', fromMe: true,  deleteCommand: false, desc: Lang.BOT_MIN}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }

    else if (Config.WORKTYPE == 'public') {
        Amdi.applyCMD({pattern: 'botmin', fromMe: false, desc: Lang.BOT_MIN}, (async (message, match) => {    
            await message.client.sendMessage(message.jid,eng, MessageType.text,{quoted: message.data});
        }));
    }
}
