'use strict'

const launch = (req, res) => {
  res
    .say('oh no! fix me!')
    .send()
}

module.exports = {
  launch
}
