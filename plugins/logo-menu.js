const { cmd } = require("../command");

cmd({
  pattern: "logo",
  alias: ["logolist", "logos"],
  desc: "Show all available logo styles",
  category: "main",
  filename: __filename
}, 
async(conn, mek, m,{from, l, quoted, body, isCmd, umarmd, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

  let logoList = `
╭─❍【 𝐋𝐎𝐆𝐎 𝐋𝐈𝐒𝐓 】❍─╮
│
├─• neonlight
├─• blackpink
├─• dragonball
├─• 3dcomic
├─• america
├─• naruto
├─• sadgirl
├─• clouds
├─• futuristic
├─• 3dpaper
├─• eraser
├─• sunset
├─• leaf
├─• galaxy
├─• sans
├─• boom
├─• hacker
├─• devilwings
├─• nigeria
├─• bulb
├─• angelwings
├─• zodiac
├─• luxury
├─• paint
├─• frozen
├─• castle
├─• tatoo
├─• valorant
├─• bear
├─• typography
└─• birthday
  `.trim();

  await reply(logoList);
});