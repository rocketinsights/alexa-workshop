'use strict'
require('dotenv').config()
const AlexaApp = require('alexa-app').app
const app = new AlexaApp()
const logger = require('./services/logger')
const intents = require('./services/intents')
const { HOST, NODE_ENV, PORT } = process.env

app.launch((req, res) => {
  intents.launch(req, res)
})

app.intent('answer', intents.answer)

app.sessionEnded((req, res) => {
  logger.info('Session ended')
})

app.error = (exception, req, res) => {
  logger.info(exception)
  res.say('oh noes, we hit unexpected error.').send()
}

// Run express server for development in localhost
if (NODE_ENV === 'development') {
  const express = require('express')
  const expressApp = express()
  const apiRouter = express.Router()

  app.express({ router: apiRouter, endpoint: '/' })
  expressApp.use('/', apiRouter)
  expressApp.listen(PORT, HOST, () => console.log(`listening to http://${HOST}:${PORT}...`))
}

exports.handler = app.lambda()
