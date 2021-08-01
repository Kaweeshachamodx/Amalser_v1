const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");

// Sentances
const QR_DESC = "It Converts Text to Neon Anonymous  Logo"
const NEED_TEXT = "*Must Enter Some Words*"

Asena.addCommand({pattern: 'hacker ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
  
    var webimage = await axios.get(`http://lolhuman.herokuapp.com/api/ephoto1/anonymhacker?apikey=6f3cf10b29c04421f7a8e943&text=${match[1]}`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '*Made by PINKY-BOT💘*'})

    }));
