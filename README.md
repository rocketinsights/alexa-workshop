# Boston node.js meetup Alexa Workshop

### Part 4

In this section we have added support for our `answer` intent. If you were paying attention in the last section we defined the `answer` intent in our intents schema. Specifically:

```
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
```

What this does it tells Amazon that when a user says any utterance that we mapped to this intent to call our intent called answer and pass in a slot called movie. For example in the utterance: `answer The movie is {movie}` we are telling amazone to call the intent `answer` anytime some says `The movie is _______`. Amazon is then smart enough to pull out the part of the sentence we care about, the movie title, and pass that to us as a parameter. This is really powerful!

Now if we look in our index.js file we will see this line: `app.intent('answer', intents.answer)` which tells essentially acting as a router. In our `services/intents.js` file we have now added some more goodness. Specifically things to check out are:

1. We now have a data structure for our movies and randomly pick one.
2. We now persist the correct answer, the movie title in the user's session.
3. We now actually give the user the movie quote as part of the response to opening.
4. We now leave the session open.

Check out the code and see if you can see where we do these four things.

Now that we have the basis for our skill lets decide as a group how we want to augment it!

