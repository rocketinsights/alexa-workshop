# Boston node.js meetup Alexa Workshop

### Part 2

Congrats on getting this far! In this section we will cover deploying your skill to an AWS lambda. Note that in any real production environment we strongly encourage that you use an automated deployment process rather the process outlined below.

### Deploy skill to AWS lambda function

1. Sign into the AWS console and navigate to the [Lambda service](https://console.aws.amazon.com/lambda/home). Once there click `Create a Lambda Function`.

2. On the next screen select `Configure triggers` from the left hand navigation. (Yes, skip blueprint) Your screen should look like this:
![Configure trigger](https://s3.amazonaws.com/alexa-workshop/aws-configure-trigger.png)

3. On the `Configure function` screen name your function. In this workshop we are calling it movieQuote. Make sure `Node.js 4.3` is selected for the runtime. In the Lambda function code section select `Upload a .zip`.

4. Zip up the `node_modules` folder, `services` folder and `index.js` file.

5. Back in the AWS console hit the Upload button and select upload the .zip file you just created. In the Lambda function handler and role section leave it as `index.handler`. If you do not have an existing role with permissions for Lambda and Cloudwatch then select Create a custom role and create one first. Otherwise, select `Choose an existing role` and select a role that has the necessary permissions. (Lambda and cloudwatch) Your screen should look like this:
![Configure function](https://s3.amazonaws.com/alexa-workshop/aws-configure-function.png)

6. Click the `Next` button at the bottom of the page.

7. Verify the function in the review step, should look like the below image. If it does click `Create function`.
![Configure trigger](https://s3.amazonaws.com/alexa-workshop/aws-lambda.png)
