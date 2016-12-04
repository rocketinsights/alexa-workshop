'use strict'

const AlexaResponse = require('alexa-app').response
const intentService = require('../../services/intents')

describe('#INTENTS', () => {
  describe('#launch', () => {
    it('Should call say with the expected message.', (done) => {
      const res = new AlexaResponse()
      const req = {}

      spyOn(res, 'say').and.callThrough()
      res.send = () => {
        expect(res.say).toHaveBeenCalledWith('Welcome to spelling bee.')
        done()
      }
      intentService.launch(req, res)
    })
  })
})
