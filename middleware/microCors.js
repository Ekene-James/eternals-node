const cors = require('micro-cors')()

function MyApi(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  // handling other requests normally after this
}

module.exports = cors(MyApi)

