/* # Exclusively from RAVANA 
# script original owner gos to @lasiya99X 
# Copyright 2021 All rights reserved 
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command enthelum perupara nenba"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'rff ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text=${encodeURIComponent(match[1])}&text2=LiyaMol`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝐌𝐚𝐝𝐞 𝐛𝐲 💘𝐏𝐈𝐍𝐊𝐘-𝐁𝐎𝐓💘*' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'rff ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/epep?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text=${encodeURIComponent(match[1])}&text2=LiyaMol`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝐌𝐚𝐝𝐞 𝐛𝐲 💘𝐏𝐈𝐍𝐊𝐘-𝐁𝐎𝐓💘*' })

    }));
    
}
