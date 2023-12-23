import test from 'ava';
import express from 'express';
import request from 'supertest';
import fetchMock from 'fetch-mock';
import { get, makeBillPayloadViaParams, makeBillPayloadViaAmount } from '../api/bill.js';
fetchMock.config.overwriteRoutes = true;

function makeBillPayload(payload) {
  return encodeURIComponent(btoa(JSON.stringify(payload)));
}

test.before((t)=>{
  let app = express();
  app.use(express.json());
  app.get('/bill', get);
  t.context.app = app;
});

test.serial('bill GET - Fails when missing parameter', async (t) => {
  // act
  const resp = await request(t.context.app)
    .get(`/bill`);

  // assert
  t.assert(resp.status >= 400 && resp.status < 500, '400 status code');
});

test.serial('bill GET - Fails when failed to parse parameter', async (t) => {
  // act
  const resp = await request(t.context.app)
    .get(`/bill?p=fXs%3D`); //urlencoded base64 '}{', invalid json

  // assert
  t.assert(resp.status >= 400 && resp.status < 500, '400 status code');
});

test.serial('bill GET - Fails when missing data', async (t) => {
  // act
  const resp = await request(t.context.app)
    .get(`/bill?p=${makeBillPayload({ dumpsterLength: '17' })}`);

  // assert
  t.assert(resp.status >= 400 && resp.status < 500, '400 status code');
});

test.serial('bill GET - dumpsterLength invalid', async (t) => {
  // act
  const resp = await request(t.context.app)
    .get(`/bill?p=${makeBillPayload({ dumpsterLength: 'wrong', rentalDurationDays: 7 })}`);

  // assert
  t.assert(resp.status >= 400 && resp.status < 500, '400 status code');
});

test.serial('bill GET - rentalDurationDays invalid', async (t) => {
  // act
  const resp = await request(t.context.app)
    .get(`/bill?p=${makeBillPayload({ dumpsterLength: '17', rentalDurationDays: 'wrong' })}`);

  // assert
  t.assert(resp.status >= 400 && resp.status < 500, '400 status code');
});

test.serial('bill GET - manualAmount invalid', async (t) => {
  // act
  const resp = await request(t.context.app)
    .get(`/bill?p=${makeBillPayload({ manualAmount: 'wrong' })}`);

  // assert
  t.assert(resp.status >= 400 && resp.status < 500, '400 status code');
});

test.serial('bill GET - Sends right charge amount for manualAmount', async (t) => {
  // arrange
  fetchMock.mock('*', ()=>502);

  // act
  const resp = await request(t.context.app)
    .get(`/bill?p=${makeBillPayload({ manualAmount: 333 })}`);

  // assert
  const req = fetchMock.lastOptions().body;
  const sentPriceStr = req.get("ssl_amount");
  t.is(sentPriceStr, '333.00', 'correct price as formatted string');
  const sentPrice = parseFloat(sentPriceStr);
  t.is(sentPrice, 333, 'correct price');
});

test.serial('bill GET - Sends right charge amount for manualAmount with make function', async (t) => {
  // arrange
  fetchMock.mock('*', ()=>502);

  // act
  const resp = await request(t.context.app)
    .get(`/bill?p=${makeBillPayloadViaAmount(333)}`);

  // assert
  const req = fetchMock.lastOptions().body;
  const sentPriceStr = req.get("ssl_amount");
  t.is(sentPriceStr, '333.00', 'correct price as formatted string');
  const sentPrice = parseFloat(sentPriceStr);
  t.is(sentPrice, 333, 'correct price');
});

test.serial('bill GET - Sends right charge amount for dumpsterLength and rentalDurationDays', async (t) => {
  // arrange
  fetchMock.mock('*', ()=>502);

  // act
  const resp = await request(t.context.app)
    .get(`/bill?p=${makeBillPayload({ dumpsterLength: '22', rentalDurationDays: 7 })}`);

  // assert
  const req = fetchMock.lastOptions().body;
  const sentPriceStr = req.get("ssl_amount");
  t.is(sentPriceStr, '425.00', 'correct price as formatted string');
  const sentPrice = parseFloat(sentPriceStr);
  t.is(sentPrice, 425, 'correct price');
});

test.serial('bill GET - Sends right charge amount for dumpsterLength and rentalDurationDays make function', async (t) => {
  // arrange
  fetchMock.mock('*', ()=>502);

  // act
  const resp = await request(t.context.app)
    .get(`/bill?p=${makeBillPayloadViaParams('22', 7)}`);

  // assert
  const req = fetchMock.lastOptions().body;
  const sentPriceStr = req.get("ssl_amount");
  t.is(sentPriceStr, '425.00', 'correct price as formatted string');
  const sentPrice = parseFloat(sentPriceStr);
  t.is(sentPrice, 425, 'correct price');
});


test.serial('bill GET - Unknown Elavon failure', async (t) => {
  // arrange
  fetchMock.mock('*', ()=>502);

  // act
  const resp = await request(t.context.app)
    .get(`/bill?p=${makeBillPayload({ dumpsterLength: '22', rentalDurationDays: 7 })}`);

  // assert
  //t.log(resp);
  t.assert(resp.status >= 500 && resp.status < 600, `500 status code, was ${resp.status}`);
});

test.serial('bill GET - Success, returns 301 + location', async (t) => {
  // arrange
  fetchMock.mock('*', ()=>({
    status: 200,
    body: {
      sessionToken: 'testtoken1234'
    }
  }));

  // act
  const resp = await request(t.context.app)
    .get(`/bill?p=${makeBillPayload({ dumpsterLength: '22', rentalDurationDays: 7 })}`);

  // assert
  t.is(resp.status, 301, 'is a redirect');
  t.assert(resp.headers.location.includes('testtoken1234'));
});