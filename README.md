# Boston node.js meetup Alexa Workshop

### Part 1

Welcome to the boston node.js Alexa workshop. In this seven part series we will create a spelling bee game for the Amazon Echo from scratch.

### Prerequisites

* Node.js 4.3.2 installed locally.
* Github account.
* Basical understanding of javascript.
* An AWS account to run the lambda function.
* An amazon echo device. (Echo, dot, tap)
* A smart phone.

### Getting started

* `npm install`
* `npm test`

This should run a single test that fails.

## 

`ffmpeg -i 012856731-wrong-answer-buzzer.wav -ac 2 -codec:a libmp3lame -b:a 48k -ar 16000 len-low.mp3`

Game Play

Open questions

* Game will always be first to 15?

Open tasks

* If the user resumes we need to know what step / question to ask them.
* We will probably need to DRY things up after the step above.
* Need to a no intent for when we ask if a player is ready. If they are not ready then we should tell them that they can pause the game by saying alexa pause.
* We need to add 'ready' to the yes intent or have it call play.

1. Setup.
2. Schema / alexa skill setup.
3. Deploy / configs.
4. Sessions.
5. Single player game play.
6. Multi player game play.
7. Next steps.