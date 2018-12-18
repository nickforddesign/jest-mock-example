const fs = require('fs')

const file = fs.readFileSync('example.ejs', 'utf-8')
const css = fs.readFileSync('css/style.css', 'utf-8')

module.exports = {
  file,
  css
}
