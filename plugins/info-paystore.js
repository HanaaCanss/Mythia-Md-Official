let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '20'
let sp = '35'
let sv = '50'
//premium
let ph = '10'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let info = `
Hai kak mau sewa bot, untuk grup kamu?
Nah bisa banged ni kak kami juga menyediakan sewa bot yg murahβ¦.

Sewa bot:
π perbulan 5ribu
π permenen 10ribu 2grub
π permanen 3 grub atau lebih 20ribu

TERIMAKASIHβ¦

*β«Ήβ«Ί PAYMENT:*
β’ *Qris:* Minta Owner Bot!
β’ *Dana:* ${pdana}
β’ *Gopay:* ${pgopay}

ββββββ *πΎ Kebijakan* ββββββ
π£οΈ: Kak, Kok harganya mahal banget?
π¬: Mau tawar menawar? boleh, silahkan chat owner aja

π£οΈ: Scam ga nih kak?
π¬: Enggalah, Owner 100% Tepati janji #STAYHALAL

`
const sections = [
   {
	title: `${htjava} SEWA β¦-------`,
	rows: [
	    {title: "π πππ ππ§", rowId: '.order *Paket:* HEMAT β’ Sewa', description: 'π£πΏπΆπ°π²: ' + sh + 'k (1 bulan)' },
	    {title: "π π‘π’π₯π ππ", rowId: '.order *Paket:* NORMAL β’ Sewa', description: 'π£πΏπΆπ°π²: ' + sn + 'k (permanen 2 grub)' },
	{title: "π π¦π§ππ‘πππ₯", rowId: '.order *Paket:* STANDAR β’ Sewa', description: 'π£πΏπΆπ°π²: ' + ss + 'k (permanen 3 grup - 6grup)' },
	{title: "π π£π₯π’", rowId: '.order *Paket:* PRO β’ Sewa', description: 'π£πΏπΆπ°π²: ' + sp + 'k (permanen 7 grup - 10 grup)' },
	{title: "π π©ππ£", rowId: '.order *Paket:* VIP β’ Sewa', description: 'π£πΏπΆπ°π²: ' + sv + 'k (permanen 10 grup - 13grup)' },
	]
    }, {
    title: `${htjava} PREMIUM β¦-------`,
	rows: [
	    {title: "π πππ ππ§", rowId: '.order *Paket:* HEMAT β’ Premium', description: 'π£πΏπΆπ°π²: ' + ph + 'k (1 minggu)' },
	    {title: "π π‘π’π₯π ππ", rowId: '.order *Paket:* NORMAL β’ Premium', description: 'π£πΏπΆπ°π²: ' + pn + 'k (1 bulan)' },
	{title: "π π£π₯π’", rowId: '.order *Paket:* PRO β’ Premium', description: 'π£πΏπΆπ°π²: ' + pp + 'k (4 bulan)' },
	{title: "π π©ππ£", rowId: '.order *Paket:* VIP β’ Premium', description: 'π£πΏπΆπ°π²: ' + pv + 'k (8 bulan)' },
	{title: "π π£ππ₯π ππ‘ππ‘π§", rowId: '.order *Paket:* PERMANENT β’ Premium', description: 'π£πΏπΆπ°π²: ' + ppm + 'k (12 bulan)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "π Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
