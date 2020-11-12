const nomnoml = require('../dist/nomnoml');

const badInput = nomnoml.renderSvg('bad input')

module.exports = function (req, res) {
  res.writeHead(200, {'Content-Type': 'image/svg+xml'})
  try {
    var input = req.url.split('source=')[1]
    if (!input) throw new Error()
    console.log('rendering: ' + input)
    var source = decodeURIComponent(input)
    res.end(nomnoml.renderSvg(source))
  }
  catch (e) {
    res.end(badInput)
  }
}
