'use strict'

const AlexaApp = require('alexa-app').app
const app = new AlexaApp()
const logger = require('./services/logger')
const intents = require('./services/intents')

app.launch((req, res) => {
  intents.launch(req, res)
})

app.sessionEnded((req, res) => {
  logger.info('Session ended')
})

app.error = (exception, req, res) => {
  logger.info(exception)
  res.say('oh noes, we hit unexpected error.').send()
}

exports.handler = app.lambda()
