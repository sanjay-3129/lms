// const dotenv = require('dotenv');
// const aws = require('aws-sdk');
import aws from "aws-sdk";
// const crypto = require('crypto');
// import { crypto } from 'crypto';
// const { promisify } = require('util');
// import { promisify } from "util";
// const randomBytes = promisify(crypto.randomBytes);

// dotenv.config();

const region = "ap-south-1";
const bucketName = "lmstestbucketdev";
const accessKeyId = "AKIATY5OG4VUJUZRVMYK";
const secretAccessKey = "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";

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

async function generateUploadURL() {
  //   const rawBytes = await randomBytes(16);
  //   const fileName = rawBytes.toString('hex');
  const fileName = new Date().getTime().toString();

  const params = {
    Bucket: bucketName,
    Key: fileName,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise("putObject", params);
  return uploadURL;
}

export { s3, generateUploadURL };

// import * as AWS from 'aws-sdk';

// const configuration = {
//   secretAccessKey: secretAccessKey,
//   accessKeyId: accessKeyId,
//   region: region,
//   //   region: process.env.REACT_APP_AWS_REGION,
//   //   secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
//   //   accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID

//   // set setRegion(reg) {
//   //   this.region = reg;
//   // },
//   // set setSecretAccessKey(accessKey) {
//   //   this.secretAccessKey = accessKey;
//   // },
// };
// AWS.config.update(configuration);

// export default AWS;
