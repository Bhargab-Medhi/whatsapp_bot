const Asena = require('../events');
const Bunny = require('../events');
const QueenAmdi = require('queenamdi-public-2');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const axios = require('axios');
const { errorMessage, infoMessage } = require('../helpers');

const Language = require('../language');
const Lang = Language.getString('scrapers');


Asena.addCommand({ pattern: 'yvd ?(.*)', fromMe: false , desc: Lang.SHOW_DESC,  deleteCommand: false}, async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });

  await axios
      .get(`https://docs-jojo.herokuapp.com/api/ytmp4?url=${match[1]}`)
      .then(async (response) => {
        const {
	      title,
        } = response.data[0].show
	const {
          quality,
          file_size,
          download,
        } = response.data[0].result
	 const {
          thumbnail,
        } = response.data[0].thumbnail
	
	const profileBuffer = await axios.get(thumbnail, {responseType: 'arraybuffer'})
        const msg = `*${"Name"}*: ${title}\n*${"Quality"}*: ${quality}\n*${"Size"}*: ${file_size}\n*${"Download"}*: ${download}`
       await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })
      .catch(
        async (err) => await message.client.sendMessage(message.jid, '*Not found!!😕*', MessageType.text, { quoted: message.data }),
      )
  }));
