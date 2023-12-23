import AWS from 'aws-sdk';
import { config } from '../assets/config.js';
import { allowCors, resFail } from './_utils.js';
import { makeBillPayloadViaParams } from './bill.js';

export default allowCors(function handler (req, res) {
  return put(req, res);
})

export async function put(req, res) {
  // TODO: Hard to mock this stuff when it's not in here, but it's also annoying
  // af to put it in here. AWS would cache this with the function if this weren't
  // in here...
  AWS.config.update({
    accessKeyId: process.env.YDGDR_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.YDGDR_AWS_SECRET_ACCESS_KEY,
    region: process.env.YDGDR_AWS_REGION,
    signatureVersion: 'v4',
  });
  const SES = new AWS.SES({apiVersion: '2010-12-01'});
  const FROM_EMAIL = process.env.FROM_EMAIL;
  const TO_EMAIL = process.env.TO_EMAIL;

  let reqData;
  try {
    reqData = typeof req.body === 'string'
      ? JSON.parse(req.body)
      : req.body;
  }
  catch(err) {
    return resFail(res, 400, `Failed JSON parse\n${err}`);
  }

  if (!reqData.name
    || !reqData.phone
    || !reqData.email
    || !reqData.address
    || !reqData.dumpsterLength
    || !reqData.rentalDurationDays
    || !reqData.dropoffDate
  ) {
    return resFail(res, 400, "Missing a property, not a valid request");
  }

  let rentalDurationDaysNum = parseInt(reqData.rentalDurationDays);
  if (isNaN(rentalDurationDaysNum)
    || rentalDurationDaysNum <= 0
    || rentalDurationDaysNum >= 14) {
    return resFail(res, 400, "Rental duration days was not a number/was invalid");
  }

  // Make the payment link
  // TODO: Really need to write a test for this call, or switch to Typescript
  const billPayload = makeBillPayloadViaParams(reqData.dumpsterLength, rentalDurationDaysNum);
  const paymentLink = `${config.built.API_ENDPOINT}/bill?p=${billPayload}`;
  const rentalAgreementLink = `${config.built.URL}/rental_agreement.pdf`;//_${reqData.dumpsterLength}yd.pdf`;

  // Build the email message
  const emailSubject = `[BOOKING REQUEST] For ${reqData.name}`;
  const emailBody = `A new booking request has been submitted!

== Contact Information ==
Name: ${reqData.name}
Phone Number: ${reqData.phone}
Email: ${reqData.email}

== Dumpster Request ==
Length: ${reqData.dumpsterLength} yards
Dropoff Address: ${reqData.address}
Dropoff Date: ${reqData.dropoffDate}
Rental Duration: ${reqData.rentalDurationDays} days

${reqData.comments
  ? `== Comments ==\n${reqData.comments}`
  : ''}


PAYMENT: ${paymentLink}
* A 3.5% surcharge on all credit card payments.

RENTAL AGREEMENT: ${rentalAgreementLink}

Need more help? Call 586.943.5752
`

  // Build the email
  const params = {
    Destination: {
     //BccAddresses: [], 
     //CcAddresses: [], 
     ToAddresses: [ TO_EMAIL ]
    }, 
    Message: {
     Body: {
      //Html: {}, 
      Text: {
       Charset: "UTF-8", 
       Data: emailBody
      }
     }, 
     Subject: {
      Charset: "UTF-8", 
      Data: emailSubject
     }
    }, 
    ReplyToAddresses: [
      reqData.email
    ],
    //ReturnPath: "", 
    //ReturnPathArn: "", 
    Source: FROM_EMAIL,
    //SourceArn: ""
  };

  // Send the avtual email
  try {
    await SES.sendEmail(params).promise();
  }
  catch(err) {
    return resFail(res, 500, `Unexpected SES.sendEmail error\n\n${err.toString()}`);
  }

  res.status(200).send('Success!');
}
