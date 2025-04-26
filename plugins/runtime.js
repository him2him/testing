const { getContextInfo } = require('./new');
const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { exec } = require('child_process');
const { runtime, sleep } = require('../lib/functions');
const path = require("path");

cmd({
    pattern: "runtime",
    alias: ["status", "botinfo", "uptime"],
    desc: "Check uptime, RAM usage, and more",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, {
    from, quoted, body, isCmd, command, args, q,
    isGroup, sender, senderNumber, botNumber2, botNumber,
    pushname, isMe, isOwner, groupMetadata, groupName,
    participants, groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
        
         // Custom image URL

        let status = `
╭─〔 *PRINCE-MDX STATUS* 〕─✧
│ *↯ Runtime:* ${runtime(process.uptime())}
│ *↯ RAM Usage:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)},GB / ${(os.totalmem() / 1024 / 1024).toFixed(2)},GB
│ *↯ Platform:* Linux
│ *↯ Owner:* ᴜꜱᴇʀꜱ
│ *↯ Bot Version:* 1.0.5
╰──────────────────✧

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ 
        `.trim();

        await conn.sendMessage(from, {
            image: { url: config.RUNTIME_IMG },
            caption: status,
            contextInfo: getContextInfo(m.sender)
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});