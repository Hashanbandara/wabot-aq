let handler = function (m) {
  // this.sendContact(m.chat, '94718790419', 'DASUN RASANJANA', m)
  this.sendContact(m.chat, '0', '+94718790419', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
