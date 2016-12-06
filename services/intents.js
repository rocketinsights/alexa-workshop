'use strict'

const _ = require('lodash')

const movies = [
  {
    title: 'brave heart',
    quote: 'they can take our lives, but they will never take our freedom.'
  },
  {
    title: 'anchorman',
    quote: '60 percent of the time it works everytime.'
  },
  {
    title: 'dazed and confused',
    quote: 'alright, alright, alright.'
  },
  {
    title: 'old school',
    quote: 'Fill it up again! Fill it up again! Once it hits your lips, it is so good!'
  }
]

const launch = (req, res) => {
  const movie = movies[_.random(3)]
  res.session('title', movie.title)
  res
    .say(`Welcome to movie quote. Name title of the movie for the following quote. ${movie.quote}`)
    .shouldEndSession(false)
    .send()
}

const answer = (req, res) => {
  const guess = req.slot('movie')
  const correctAnswer = req.session('title')

  let msg
  if (guess === correctAnswer) {
    msg = 'Boom! You got it right!'
  } else {
    msg = `Sorry, the correct answer was: ${correctAnswer}`
  }

  res
    .say(msg)
    .send()
}

module.exports = {
  launch,
  answer
}
