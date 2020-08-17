# BMI Calculator

This Serverless API calculates Body Mass Index (BMI) given the weight and
height of a person. 

The BMI calculator is served as an HTTP `GET` endpoint at `/bmi`. It accepts query parameters
`weight` and `height` and returns the BMI as a number in the response body.
You may play around with an already deployed version of the API at [this
link](https://2j62oej0ci.execute-api.eu-central-1.amazonaws.com/prod/bmi?weight=10&height=10),
using cURL for example:

```
$ BMI_URL="https://2j62oej0ci.execute-api.eu-central-1.amazonaws.com/prod"
$ curl $BMI_URL'/bmi?weight=10&height=10'
```

## Development

To be able to update, test and deploy this API, please make sure you have
Node.js 12 installed along with your AWS configurations.

Then install the rest of required dependencies using this command:

```
$ make init
```

### Testing

To test the BMI calculator locally, please run the following command:

```
$ make test
```

### Deployment

To deploy the BMI calculator to AWS using Serverless, please run the following command:

```
$ make deploy
```
