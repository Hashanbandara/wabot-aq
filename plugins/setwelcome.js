let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    else global.DATABASE._data.chats[m.chat].sWelcome = text
    m.reply('පිලිගැනීම සාර්තකව සකසා ඇත🇱🇰\n@user (අලුතෙන් ආපු කෙනා මෙන්ශන් වේ.)\n@subject (ඔබ සදහන් කල පනිවිඩය.)')
  } else throw 'Teksnya mana?'
}
handler.help = ['setwelcome <text>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

