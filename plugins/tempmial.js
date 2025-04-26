const axios = require('axios');
const { cmd } = require('../command');

const BASE_URL = 'https://www.guerrillamail.com/ajax.php';
let userSessions = {};

// Hidden Signature
const PRINCE_CREDIT = Buffer.from('ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ').toString('base64');

cmd(
  {
    pattern: 'tempmail',
    react: '📧',
    alias: ['tm', 'mailtemp'],
    desc: 'Generate and check temporary emails.',
    category: 'utility',
    use: '.tempmail [new | inbox | read <ID>]',
    filename: __filename,
  },
  async (bot, message, senderInfo, { from, args, reply }) => {
    try {
      const action = args[0] ? args[0].toLowerCase() : 'new';

      if (action === 'new') {
        const response = await axios.get(`${BASE_URL}?f=get_email_address`, {
          headers: { 'User-Agent': 'Mozilla/5.0' },
        });

        const { email_addr, sid_token } = response.data;
        userSessions[from] = { email: email_addr, sid_token };

        const replyText = `📩 *Your temporary email:* ${email_addr}\n\nUse .tempmail inbox to check received emails.\n\n${Buffer.from(PRINCE_CREDIT, 'base64').toString()}`;
        
        await bot.sendMessage(from, { text: replyText }, { quoted: message });
        return;
      }

      if (!userSessions[from]) {
        return reply(`❌ No active temp mail. Use \`.tempmail new\`.\n\n${Buffer.from(PRINCE_CREDIT, 'base64').toString()}`);
      }

      const { email, sid_token } = userSessions[from];

      if (action === 'inbox') {
        const response = await axios.get(`${BASE_URL}?f=get_email_list&sid_token=${sid_token}&offset=0`, {
          headers: { 'User-Agent': 'Mozilla/5.0' },
        });

        const emails = response.data.list;

        if (!emails || emails.length === 0) {
          return reply(`📭 No emails received.\n\n${Buffer.from(PRINCE_CREDIT, 'base64').toString()}`);
        }

        let inboxText = '📬 *Received Messages:*\n\n';
        emails.forEach(email => {
          inboxText += `🔢 ID: ${email.mail_id}\n📧 From: ${email.mail_from}\n📌 Subject: ${email.mail_subject}\n\n`;
        });

        inboxText += `Use \`.tempmail read <ID>\` to read an email.\n\n${Buffer.from(PRINCE_CREDIT, 'base64').toString()}`;
        await bot.sendMessage(from, { text: inboxText }, { quoted: message });
        return;
      }

      if (action === 'read') {
        const emailID = args[1];
        if (!emailID) {
          return reply(`❌ Provide an email ID. Example: \`.tempmail read 12345\`\n\n${Buffer.from(PRINCE_CREDIT, 'base64').toString()}`);
        }

        const response = await axios.get(`${BASE_URL}?f=fetch_email&sid_token=${sid_token}&email_id=${emailID}`, {
          headers: { 'User-Agent': 'Mozilla/5.0' },
        });

        const emailData = response.data;

        if (!emailData || !emailData.mail_subject) {
          return reply(`❌ Invalid email ID.\n\n${Buffer.from(PRINCE_CREDIT, 'base64').toString()}`);
        }

        const emailText = `📧 *From:* ${emailData.mail_from}\n📌 *Subject:* ${emailData.mail_subject}\n📩 *Message:*\n${emailData.mail_body}\n\n${Buffer.from(PRINCE_CREDIT, 'base64').toString()}`;
        
        await bot.sendMessage(from, { text: emailText }, { quoted: message });
        return;
      }

      return reply(`❌ Invalid option. Use \`.tempmail new\`, \`.tempmail inbox\`, or \`.tempmail read <ID>\`\n\n${Buffer.from(PRINCE_CREDIT, 'base64').toString()}`);
      
    } catch (error) {
      console.error('Error with temp mail:', error);
      reply(`❌ Operation failed. Try again later.\n\n${Buffer.from(PRINCE_CREDIT, 'base64').toString()}`);
    }
  }
);