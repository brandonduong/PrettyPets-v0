const AWS = require('aws-sdk')
const AWSAppSyncClient = require('aws-appsync').default;
require('cross-fetch/polyfill');

const mockCredentials = {
  "accessKeyId": "ASIAVJKIAM-AuthRole",
  "secretAccessKey": "fake"
}

const credentials = AWS.config.credentials || mockCredentials

exports.appsync = new AWSAppSyncClient({
  url: process.env.API_PRETTYPETS_GRAPHQLAPIENDPOINTOUTPUT,
  region: process.env.REGION,
  auth: {
    type: 'AWS_IAM',
    credentials: credentials,
  },
  disableOffline: true,
});
