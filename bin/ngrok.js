/**
 * Exposes localhost to the internet
 */
require('dotenv').config()
const { HOST, PORT } = process.env
const ngrok = require('ngrok')

ngrok.connect(PORT, (err, url, webInterface) => {
  if (err) {
    throw err
  }

  const logRepsonse = []

  logRepsonse.push(`\n-------------------------------------------`)
  logRepsonse.push('Status: online')
  logRepsonse.push(`Forwarding: ${url} -> http://${HOST}:${PORT}`)
  logRepsonse.push(`Web Interface: ${webInterface}`)
  logRepsonse.push(`Endpoint for Alexa: ${url}`)
  logRepsonse.push(`-------------------------------------------\n`)

  console.log(logRepsonse.join('\n'))
})
