'use strict'

const launch = (req, res) => {
  res
    .say('Welcome to movie quote.')
    .send()
}

module.exports = {
  launch
}
