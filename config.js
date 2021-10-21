let fs = require('fs')
let chalk = require('chalk')
global.owner = ['6285718366706', '6285718366706']
global.autoread = false
global.selfmode = false
global.thumb = './thumb/itsuki.jpg'
global.fakereplyt = 'Yt Alan Botz WhatsApp'
global.mess = {
group : {
welcome : `Welcome @user\n\nSelamat datang di grup @subject`,
bye : `Bye @user`,
promote: '@user Sekarang admin!',
demote: '@user Sekarang bukan admin!'
},
error : 'Terjadi Kesalahan',
success: 'Sukses...'
}
global.server = false
global.prefix = '#'
global.author = '@cAlan'
global.packname = 'By Alan Botz'


// LIST APIKEY

global.APIs = { // API Prefix

  clph: 'https://recoders-area.caliph.repl.co',
  rikka: 'https://rikka-api.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  vh: 'http://api.vhtear.com',
  zeks: 'https://api.zeks.me',
  caliphAPI: 'https://api.caliph71.xyz'
}

global.APIKeys = { // APIKey Here
   'http://api.vhtear.com': 'YOUR-APIKEY',
   'https://api.lolhuman.xyz': 'YOUR-APIKEY',
  'https://api.xteam.xyz': 'YOUR-APIKEY'
,
  'https://api.zeks.me': 'rikkabotwa',
  'https://rikka-api.xyz': 'beta',
   'https://api.caliph71.xyz': 'beta'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
