'use strict'

const launch = (req, res) => {
  return res
    .say('oh no! fix me!')
    .send()
}

module.exports = {
  launch
}
