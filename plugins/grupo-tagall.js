let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `📄 *MENSAJE:* ${pesan}`
let teks = `╭━〔 *ACTÍVENSE NADA QUEBERIENTAS, CON CUERPO ROSTRO,ACTITUD Y CARISMA* 〕━⬣\n${oi}\n\n`
for (let mem of participants) {
teks += `┃⚡⊹ @${mem.id.split('@')[0]}\n`}
teks += `┃
╰━━━━━[ *𓃠* PIKACHU ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|niñas|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
