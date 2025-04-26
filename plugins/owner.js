const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "✅", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER; // Fetch owner number from config
        const ownerName = config.OWNER_NAME;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/upmwpw.jpg' }, // Image URL from your request
            caption: `╭──〔  PRINCE-MDX  〕──╮
│  Owner Information:    
│  ╭───────────────╮
│  ┃ Name    : ${ownerName}
│  ┃ Number  : ${ownerNumber}
│  ┃ Version : 1.0.5
│  ╰───────────────╯
╰── ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ───╯ `, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363322606369079@newsletter',
                    newsletterName: 'PRINCE TECH',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        
    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
