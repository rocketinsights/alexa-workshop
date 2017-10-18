const _ = require('lodash')

const fullscreenTemplateJSON = {
  "type": "Display.RenderTemplate",
  "template": { 
    "type": "BodyTemplate6",
    "token": "string",
    "backButton": "HIDDEN",
    "backgroundImage": {
      "contentDescription": "",
      "sources": [
        {
          "url": ""
        }
      ]
    },
    "title": "Star Wars Character",
    "textContent": {
      "primaryText": {
        "type": "PlainText",
        "text": ""
      }
    }
  }
}

const fullscreenTemplate = function (image) {
  let template = _.clone(fullscreenTemplateJSON)
  template.template.backgroundImage.sources[0].url = image

  return template
}

module.exports = {
  fullscreenTemplate
}