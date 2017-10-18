'use strict'

const { questions } = require('../db/')

const _question = () => {
  // TODO - Randomize the questions and do not repeat the questions.
  return questions[0]
}

const launch = (req, res) => {
  const round = _question()
  res
    .say(`Welcome to star wars. ${round.question}?`)
    .session('answer', round.answer)
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
    msg = 'Wheeee'
  } else {
    msg = 'That answer makes me a sad panda.'
  }

  // TODO - Do not close the session, but ask another question until there have all been asked.
  res
    .say(msg)
    .send()
}

module.exports = {
  launch,
  answer
}
