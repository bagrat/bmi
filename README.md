# BMI Calculator

This Serverless API calculates Body Mass Index (BMI) given the weight and
height of a person. You may play around with an already deploy version of the API using  [this link](https://2j62oej0ci.execute-api.eu-central-1.amazonaws.com/prod/bmi?weight=10&height=10).

The BMI calculator is served as an HTTP `GET` endpoint at `/bmi`. It accepts query parameters
`weight` and `height` and returns the BMI as a number in the response body.

To be able to test and deploy this API, please make sure you have
Node.js 12 installed along with your AWS configurations.

Then install the rest of required dependencies using this command:

```
$ make init
```

## Testing

To test the BMI calculator locally, please run the following command:

```
$ make test
```

## Deployment

To deploy the BMI calculator to AWS using Serverless, please run the following command:

```
$ make deploy
```
