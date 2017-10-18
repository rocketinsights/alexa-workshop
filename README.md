# Boston node.js meetup Alexa Workshop

### Part 2

The goal of part 2 is to configure a new alexa skill in the alexa developer portal and have to interact with our 
code running locally.

### Prerequisites

* Completed part 1.

### Running our skill locally

We have added a few new commands of `yarn expose` and `yarn run-dev`. `yarn expose` will run [ngrok](https://ngrok.com/) which allows us to expose our local web server to the outside world. This is very helpful as it prevents us from having to keep deploying our code to an AWS Lambda. You will also notice that in the index.js file we now check to see if we are in development, and if so, we start up an express server. To get get up an running locally run the following commands:

* `yarn` (adds the required packages)
* `yarn start-dev` 
* In a new terminal `yarn expose` Starts up ngrok and exposes localhost:3000 to the outside world. You change this host and port via the .env file. 

### Configuring your Alexa skill

1. Sign into the [Alexa Developer Console](https://developer.amazon.com/login.html). _Note that you must sign in with the same amazon account you linked your echo device to._

2. After logging in go to the [Alexa Skill Kit](https://developer.amazon.com/edw/home.html#/skills/list) page.

3. Click the `Add a New Skill` button in the top right hand corner.

4. For the skill type leave it as `Custom Interaction Model`. For language leave it as `English`. Enter the name `Star Wars` for both the name and invocation name. Under global fields, select `Yes` for `Render Template`. Click save. Your screen should look like the following:
![Skill Info](https://s3.amazonaws.com/node-school-alexa-workshop/skill-information.png)

5. In my opinion the interaction model that amazon has created is a very elegant solution to a hard problem. See below for more thoughts on this. Lets start by configuring our intent schema. Our intent schema is JSON object that defines the various functions we have available in our skill. For now copy and paste this JSON object into the Intent Schema:

```
{
  "intents": [
    {
      "intent": "answer",
       "slots": [
        {
          "name": "character",
          "type": "character"
        }
      ]
    },
    {
      "intent": "AMAZON.StopIntent"
    },
    {
      "intent": "AMAZON.PauseIntent"
    },
    {
      "intent": "AMAZON.ResumeIntent"
    }
  ]
}
```

6. Next we need to defined our custom character slot. Slots are a valuable tool as they allow us to define predetermined values that are then passed into our functions as parameters. This is extremely helpful as it mitigates the developers need to parse out specific words from a users sentence. For our custom slot enter `character` with the values found in the `speechAssets/characterSlots.txt` file. Hit save. You can learn more about custom slots [here](http://blog.rocketinsights.com/alexa-unlock-the-power-of-custom-slots/).

7. The final step to the interaction model is filling out the utterances. The utterances section is where we map what the user says to a function in our intent schema. Since there are many ways in which a user may convey their wishes it is advisable to fill this section out with as many perumations as you can think of. For now we can just enter:

```
answer {character}
answer the character is {character}
```

8. Your sceen should now look like this:
![Interaction model](https://s3.amazonaws.com/node-school-alexa-workshop/interaction-model.png)

9. Click the `Next` button.

10. The final step is to connect your skill to your skill that is running locally. In a production environment this will most often be a lambda function. For now we want to select the `HTTPS` radio button.

11. In your terminal that is running ngrok you should find your ngrok URL. The line will look something like `Forwarding: https://170c49ff.ngrok.io -> http://localhost:3000` You want to cpy the `https://170c49ff.ngrok.io` __Note that your URL will be different__ Copy this value into the `Default` field. Your screen should look like this:
![Configuration](https://s3.amazonaws.com/node-school-alexa-workshop/configuration.png)

12. **Important do not fill out the SSL Cert section**. Skip to the `Test` section. After starting up your local skill with the command `yarn start-dev` type in `kylo ren`. If you get back a response then we are good to go!
