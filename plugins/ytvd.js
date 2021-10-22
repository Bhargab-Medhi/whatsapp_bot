
const bunny = require('../events')
const bunnys = require('queenamdi-public-2');
const { MessageType, Mimetype } = require('@adiwajshing/baileys')
const axios = require('axios')
const FormData = require('form-data');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const Config = require('../config');
let LOL = Config.WORKTYPE == 'public' ? false : true
const { fetchJson, getBuffer } = require('./fetcher')

const Language = require('../language')
const Lang = Language.getString('search')



bunny.applyCMD({ pattern: 'yvd ?(.*)', fromMe: LOL, desc: Lang.SPO_USAGE,  deleteCommand: false }, async (message, match) => {

  if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text, {quoted: message.data});    
  var load = await message.client.sendMessage(message.jid,Lang.GET_MODD,MessageType.text, {quoted: message.data});

  var apikey = await bunnys.api()

  get_result = await fetchJson('https://api.lolhuman.xyz/api/ytvideo2?apikey=' + apikey.key + `&url=${match[1]}`)
  get_result = get_result.result
    ini_txt = ""
        for (var x of get_result) {
        ini_txt += `📚 Title : ${x.title}\n`
        ini_txt += `🕺🏻 Thumbnail : ${x.thumbnail}\n`
        ini_txt += `📁 Size : ${x.size}\n`
        ini_txt += `⚙️ Link : ${x.link}\n\n`
        }

  await message.client.sendMessage(message.jid, '*❖ Mr. B Bot Search Engine ❖*\n' + Lang.SPOTIFY + '\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n' + ini_txt,MessageType.text, {quoted: message.data});
  return await message.client.deleteMessage(message.jid, {id: load.key.id, remoteJid: message.jid, fromMe: true})
})
