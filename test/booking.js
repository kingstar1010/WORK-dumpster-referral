import test from 'ava';
import express from 'express';
import request from 'supertest';
import AWS from 'aws-sdk-mock';
import { put } from '../api/booking.js';

test.before((t)=>{
  let app = express();
  app.use(express.json());
  app.put('/booking', put);
  t.context.app = app;
});

test('booking PUT - Fails when missing data', async (t) => {
  // act
  const resp = await request(t.context.app)
    .put('/booking')
    .send({
      name: 'My name'
    });

  // assert
  t.assert(resp.status >= 400 && resp.status < 500, '400 status code');
});

test.serial('booking PUT - Fails when email fails', async (t) => {
  // arrange
  AWS.mock('SES', 'sendEmail', () => {
    throw new Error('some error');
  });

  // act
  const resp = await request(t.context.app)
    .put('/booking')
    .send({
      name: 'My name',
      phone: '2223334444',
      email: 'a@a.com',
      address: 'address',
      dumpsterLength: 'dumpsterLength',
      dropoffDate: '1/2/22',
      rentalDurationDays: '7',
    });

  // assert
  t.assert(resp.status >= 500 && resp.status < 600, '500 status code');

  AWS.restore('SES');
});

test.serial('booking PUT - Succeeds', async (t) => {
  // arrange
  AWS.mock('SES', 'sendEmail', () => { return Promise.resolve() });

  // act
  const resp = await request(t.context.app)
    .put('/booking')
    .send({
      name: 'My name',
      phone: '2223334444',
      email: 'a@a.com',
      address: 'address',
      dumpsterLength: 'dumpsterLength',
      dropoffDate: '1/2/22',
      rentalDurationDays: '7',
    });

  // assert
  t.assert(resp.status >= 200 && resp.status < 300, '200 status code');

  AWS.restore('SES');
});
