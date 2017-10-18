'use strict'

const AlexaResponse = require('alexa-app').response
const intentService = require('../../services/intents')

describe('#INTENTS', () => {
  describe('#answer', () => {
    it('Should call say with the expected message.', (done) => {
      const res = new AlexaResponse()
      res.session = () => {
        return res
      }
      const req = {}

      spyOn(res, 'say').and.callThrough()
      res.send = () => {
        expect(res.say).toHaveBeenCalledWith('Welcome to star wars. Who is luke skywalker\'s father?')
        done()
      }
      intentService.launch(req, res)
    })
  })
})
