'use strict'

const { questions } = require('../db/')
const { fullscreenTemplate } = require('./templates')
const _ = require('lodash')

const launch = (req, res) => {
  const questionOrder = _.shuffle(_.range(questions.length))
  const round = questions[questionOrder.pop()]
  const directive = fullscreenTemplate(round.image)

  res
    .say(`Welcome to star wars. ${round.question}?`)
    .session('answer', round.answer)
    .session('questionOrder', questionOrder)
    .directive(directive)
    .shouldEndSession(false)
    .send()
}

const answer = (req, res) => {
  // If we should not be here, redirect back to the the launch request
  if (!req.session('answer')) {
    return launch(req, res)
  }

  let msg
  if (req.slot('character').toLowerCase() === req.session('answer')) {
    msg = 'Correct!'
  } else {
    msg = 'That answer makes me a sad panda.'
  }

  const questionOrder = _.shuffle(req.session('questionOrder'))
  
  // If we have gone through all of the questions then stop.
  if (!questionOrder.length) {
    return res.say('All done!').send()
  }

  const round = questions[questionOrder.pop()]
  const directive = fullscreenTemplate(round.image)

  res
    .say(`${msg} Next character. ${round.question}`)
    .shouldEndSession(false)
    .session('answer', round.answer)
    .session('questionOrder', questionOrder)
    .directive(directive)
    .shouldEndSession(false)
    .send()
}

module.exports = {
  launch,
  answer
}
