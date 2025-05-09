const {getContextInfo} = require('./new')
const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({

    pattern: "menu",

    react: "📑",

    desc: "Get bot command list.",

    category: "main",

    use: '.menu',

    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{
let madeMenu = `
╭─〔 *ＰＲＩＮＣＥ ＭＤＸＩ* 〕─╮
│
│ ✦ *ᴄʀᴇᴀᴛᴏʀ* : *ᴘʀɪɴᴄᴇ 🇨🇲*
│ ✦ *ᴍᴏᴅᴇ* : [*${config.MODE}*]
│ ✦ *ᴘʀᴇғɪx* : *${config.PREFIX}*
│ ✦ *ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} GB / ${Math.round(require('os').totalmem / 1024 / 1024)} GB
│ ✦ *ᴠᴇʀsɪᴏɴ* : *2.0.0* 
│ ✦ *ᴜᴘᴛɪᴍᴇ* : *${runtime(process.uptime())}*
│ ✦ *ᴄᴏᴍᴍᴀɴᴅs* : *234*
│
╰───────────────────╯

╭─〔 *ＤＯＷＮＬＯＡＤＥＲ* 〕─╮
│
│ ➥ *ғʙ*
│ ➥ *ɪɴꜱᴛᴀ*
│ ➥ *sᴘᴏᴛɪғʏ*
│ ➥ *ᴠɪᴅᴇᴏ*
│ ➥ *ɢᴅʀɪᴠᴇ*
│ ➥ *ᴛᴡɪᴛᴛᴇʀ*
│ ➥ *ᴛɪᴋᴛᴏᴋ*
│ ➥ *ᴍᴇᴅɪᴀғɪʀᴇ*
│ ➥ *ᴘʟᴀʏ*
│ ➥ *ᴘʟᴀʏ2*
│ ➥ *ᴘʟᴀʏ3*
│ ➥ *ᴘʟᴀʏ4*
│ ➥ *ᴠɪᴅᴇᴏ*
│ ➥ *ᴠɪᴅᴇᴏ2*
│ ➥ *ᴠɪᴅᴇᴏ4*
│ ➥ *ᴍᴏᴠɪᴇ*
│ ➥ *ɢɪᴛᴄʟᴏɴᴇ*
│ ➥ *ʏᴛᴘᴏꜱᴛ*
│ ➥ *ᴘɪɴᴅʟ*
│
╰─────────────────╯

╭───〔 *ＧＲＯＵＰ* 〕───╮
│
│ ➥ *ʀᴇᴍᴏᴠᴇ*
│ ➥ *ᴅᴇʟᴇᴛᴇ*
│ ➥ *ᴀᴅᴅ*
│ ➥ *ᴋɪᴄᴋ*
│ ➥ *ᴋɪᴄᴋᴀʟʟ*
│ ➥ *ᴘʀᴏᴍᴏᴛᴇ*
│ ➥ *ᴡᴇʟᴄᴏᴍᴇ ᴏɴ*
│ ➥ *ᴡᴇʟᴄᴏᴍᴇ ᴏꜰꜰ*
│ ➥ *ᴅᴇᴍᴏᴛᴇ*
│ ➥ *ʜɪᴅᴇᴛᴀɢ*
│ ➥ *ᴛᴀɢᴀʟʟ*
│ ➥ *ɢᴇᴛᴘᴘ*
│ ➥ *ɪɴᴠɪᴛᴇ*
│ ➥ *ʀᴇᴠᴏᴋᴇ*
│ ➥ *ᴍᴜᴛᴇ*
│ ➥ *ᴜɴᴍᴜᴛᴇ*
│ ➥ *ʟᴇᴀᴠᴇ*
│ ➥ *ᴠᴄꜰ*
│ ➥ *ꜱᴀᴠᴇᴄᴏɴᴛᴀᴄᴛ*
│ ➥ *ɢɴᴀᴍᴇ*
│ ➥ *ɢᴅᴇsᴄ*
│ ➥ *ᴊᴏɪɴ*
│ ➥ *ɢɪɴғᴏ*
│ ➥ *ᴏᴘᴇɴᴛɪᴍᴇ*
│ ➥ *ᴄʟᴏsᴇᴛɪᴍᴇ*
│
╰──────────────╯
╭─〔 *ＳＥＴＴＩＮＧＳ* 〕─╮
│
│ ➥ *sᴇᴛᴛɪɴɢ*
│ ➥ *ᴀᴜᴛᴏʀᴇᴄᴏʀᴅɪɴɢ*
│ ➥ *ᴀᴜᴛᴏᴛʏᴘɪɴɢ*
│ ➥ *ᴀᴜᴛᴏʀᴇᴀᴄᴛ*
│ ➥ *ʜᴇᴀʀᴛʀᴇᡄᴄᴛ*
│ ➥ *ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ*
│ ➥ *ᴀᴜᴛᴏʀᴇᴘʟʏ*
│ ➥ *ᴀᴜᴛᴏꜱᴛᴀᴛᴜꜱʀᴇᴘʟʏ*
│ ➥ *ᴀᴜᴛᴏ-ꜱᴇᴇɴ*
│ ➥ *ʀᴇᴀᴅ-ᴍᴇꜱꜱᴀɢᴇ*
│ ➥ *sᴇᴛᴘʀᴇғɪx*
│ ➥ *sᴇᴛᴍᴏᴅᴇ*
│ ➥ *ɴᴘᴍ*
│ ➥ *ᴜᴘᴅᴀᴛᴇ*
│ ➥ *ᴘɪɴɢ*
│ ➥ *ᴏᴡɴᴇʀ*
│ ➥ *ᴀʙᴏᴜᴛ*
│ ➥ *sᴇᴛᴛɪɴɢs*
│ ➥ *ᴀʟɪᴠᴇ*
│
╰───────────────╯
╭──〔 *ＮＳＦＷ* 〕───╮
│
│ ➥ *ᴘᴏʀɴ*
│ ➥ *ʀᴀɴᴅᴏᴍᴘᴏʀɴ*
│ ➥ *xᴠɪᴅᴇᴏꜱ*
│ ➥ *xᴠɪᴅᴇᴏ*
│ ➥ *ʀᴀɴᴅᴏᴍxᴠɪᴅᴇᴏ*
│ ➥ *xᴠɪᴅᴇᴏ*
│
╰────────────────╯
╭──〔 *ＡＮＩＭＥ* 〕─╮
│
│ ➥ *ɢᴀʀʟ*
│ ➥ *ɴᴇᴋᴏ*
│ ➥ *ᴍᴇɢᴜᴍɪɴ*
│ ➥ *ᴍᴀɪᴅ*
│ ➥ *ᴀᴡᴏᴏ*
│ ➥ *ᴀɴɪᴍᴇ*
│ ➥ *ᴀɴɪᴍᴇɢɪʀʟ*
│ ➥ *ᴀɴɪᴍᴇɢɪʀʟ1*
│ ➥ *ᴀɴɪᴍᴇɢɪʀʟ2*
│ ➥ *ᴀɴɪᴍᴇɢɪʀʟ3*
│ ➥ *ᴀɴɪᴍᴇɢɪʀʟ4*
│
╰──────────────╯
╭─〔 *ＳＥＡＲＣＨ* 〕─╮
│
│ ➥ *ϙᴜɪᴢ*
│ ➥ *ʀɪᴅᴅʟᴇ*
│ ➥ *ϙᴜᴏᴛᴇ*
│ ➥ *ʏᴛꜱ*
│ ➥ *ᴛɪᴋᴛᴏꜱᴛᴀʟᴋ*
│ ➥ *ʏᴛꜱᴛᴀʟᴋ*
│ ➥ *ɢᴏᴏɢʟᴇ*
│ ➥ *ʀᴇᴘᴏ*
│ ➥ *ɴᴘᴍ*
│ ➥ *ᴍᴏᴠɪᴇɪɴғᴏ*
│ ➥ *ɢᴏᴏɢʟᴇ*
│ ➥ *ʙɪʙʟᴇ*
│ ➥ *ᴍᴏᴠɪᴇ*
│ ➥ *ᴡᴇᴀᴛʜᴇʀ*
│ ➥ *ssᴡᴇʙ*
│
╰───────────────╯
╭────〔 *ＡＩ* 〕───╮
│
│ ➥ *ɢᴘᴛ*
│ ➥ *ᴀɪ*
│ ➥ *ɢᴇᴍɪɴɪ*
│ ➥ *ɢᴇᴍɪɴɪᴘʀᴏ*
│ ➥ *ᴄʜᴀᴛɢᴘᴛ*
│ ➥ *ɢᴘᴛ3*
│ ➥ *ɢᴘᴛ4*
│ ➥ *ɢᴘᴛ4ᴏ*
│ ➥ *ғʟᴜx*
│ ➥ *ғʟᴜxᴀɪ*
│ ➥ *ɪᴍᴀɢɪɴᴇ*
│ ➥ *ɪᴍᴀɢɪɴᴇ2*
│
╰──────────────╯
╭──〔 *ＯＷＮＥＲ* 〕──╮
│
│ ➥ *ᴠᴠ*
│ ➥ *ᴠᴠ2*
│ ➥ *sᴀᴠᴇ*
│ ➥ *ᴘɪɴɢ*
│ ➥ *ᴀʟɪᴠᴇ*
│ ➥ *sᴇᴛᴛɪɴɢ*
│ ➥ *ᴏᴡɴᴇʀ*
│ ➥ *ʀᴇᴘᴏ*
│ ➥ *ꜱʏꜱᴛᴇᴍ*
│ ➥ *ᴜᴘᴅᴀᴛᴇ*
│ ➥ *ꜱᴛᴀᴛᴜꜱ*
│ ➥ *ʙʟᴏᴄᴋ*
│ ➥ *ᴜɴʙʟᴏᴄᴋ*
│ ➥ *ᴍᴏᴅᴇ*
│ ➥ *sᴇᴛᴘʀᴇғɪx*
│ ➥ *ɢᴇᴛᴘᴘ*
│ ➥ *ʙʀᴏᴀᴅᴄᴀsᴛ*
│ ➥ *ᴊɪᴅ*
│ ➥ *ɢᴊɪᴅ*
│ ➥ *ʀᴇꜱᴛᴀʀᴛ*
│
╰───────────────╯
╭──〔 *ＩＮＦＯ* 〕───╮
│
│ ➥ *ᴍᴇɴᴜ*
│ ➥ *ᴀʙᴏᴜᴛ*
│ ➥ *ʀᴇᴘᴏ*
│ ➥ *ᴀʟɪᴠᴇ*
│ ➥ *ꜱᴛᴀᴛᴜꜱ*
│ ➥ *ᴘɪɴɢ*
│ ➥ *ꜱʏꜱᴛᴇᴍ*
│ ➥ *ᴜᴘᴅᴀᴛᴇ*
│ ➥ *ᴘᴀɪʀ*
│
╰─────────────────╯
╭──〔 *ＣＯＮＶＥＲＴＥＲ* 〕──╮
│
│ ➥ *sᴛɪᴄᴋᴇʀ*
│ ➥ *ᴠsᴛɪᴄᴋᴇʀ*
│ ➥ *ᴀᴛᴛᴘ*
│ ➥ *ᴛᴛꜱ2*
│ ➥ *ᴘɪᴄ*
│ ➥ *ᴛʀᴛ*
│ ➥ *ᴛᴛs3*
│ ➥ *ʟᴏɢᴏ*
│ ➥ *ʀᴇᴍᴏᴠᴇʙɢ*
│ ➥ *ғᴀɴᴄʏ*
│ ➥ *ɪᴍɢꜱᴄᴀɴ*
│ ➥ *ᴛɪɴʏ*
│ ➥ *ᴛᴇᴍᴘᴍᴀɪʟ*
│ ➥ *ᴛᴇᴍᴘɴᴜᴍ*
│ ➥ *ʀɪɴɢᴛᴏɴᴇs*
│ ➥ *ᴜʀʟ*
│
╰────────────────╯
`
await conn.sendMessage(from,{image:{url:config.MENU3_IMG},             
caption:madeMenu,
   contextInfo: getContextInfo(m.sender)
                            },
 { quoted: mek });
}catch(e){
console.log(e)
reply(`${e}`)
}
})
