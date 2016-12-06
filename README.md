# Boston node.js meetup Alexa Workshop

### Part 3

Phew, one more configuration step and then back to the fun part! In this section we will walk through configuring your skill in the Alexa Developer Console. 

### Configuring your Alexa skill

1. Sign into the [Alexa Developer Console](https://developer.amazon.com/login.html). _Note that you must sign in with the same amazon account you linked your echo device to._

2. After logging in go to the [Alexa Skill Kit](https://developer.amazon.com/edw/home.html#/skills/list) page.

3. Click the `Add a New Skill` button in the top right hand corner.

4. For the skill type leave it as `Custom Interaction Model`. For language leave it as `English`. Enter the name `movie quote` for both the name and invocation name. Click save. Your screen should look the following:
![Skill Info](https://s3.amazonaws.com/alexa-workshop/skill-info.png)

5. In my opinion the interaction model that amazon has created is a very elegant solution to a hard problem. See below for more thoughts on this. Lets start by configuring our intent schema. Our intent schema is JSON object that defines the various functions we have available in our skill. For now copy and paste this JSON object into the Intent Schema:

```
{
  "intents": [
    {
      "intent": "answer",
       "slots": [
        {
          "name": "movie",
          "type": "movie"
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

6. Next we need to defined our custom move slot. Slots are a very valuable tool as they allow us to define predetermined values that are then passed into our functions as parameters. This is extremely helpful as it mitigates the developers need to parse out specific words from a users sentence. For our custom slot enter `movie` with the values `brave heart`, `wet hot american summer`, `dazed and confused`, `anchor man`, `old school`. Hit save.

7. The final step to the interaction model is filling out the utterances. The utterances section is where we map what the user says to a function in our intent schema. Since there are many ways in which a user may convey their wishes it is advisable to fill this section out with as many perumations as you can think of. For now we enter:

```
answer The answer is {movie}
answer {movie}
```

8. Your sceen should now look like this:
![Interaction model](https://s3.amazonaws.com/alexa-workshop/interation-model.png)

9. Click the `Next` button.

10. The final step is to connect your skill to your lambda function. Selct `AWS Lambda ARN` radio button.

11. Go back to the Lambda Service section of the AWS console and click on your function. In the upper right hand corner you will find your `arn` (amazon resource name). Copy that value and paste it into input field. Your screen should look like this:
![Configuration](https://s3.amazonaws.com/alexa-workshop/configuration.png)

12. Click next. Your skill is now linked! Say `Alexa open move quote`.
