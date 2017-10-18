'use strict'

const launch = (req, res) => {
  res
    .say('Welcome to star wars.')
    .send()
}

const answer = (req, res) => {
  res
    .say('It is working!')
    .send()
}

module.exports = {
  launch,
  answer
}
