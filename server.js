import express from 'express';
import cors from 'cors';

import { get as billGet } from './bill.js';
import { put as bookingPut } from './booking.js';

const app = express();
app.use(express.json());
app.use(cors({
  origin: [
    "https://yourdumpsterguydumpsterrentals.com",
    "http://localhost:3000",
    "https://ydgdr.clients.prod.freespacedev.com",
    "https://ydgdr.clients.dev.freespacedev.com",
  ]
}));

app.get('/bill', billGet);
app.put('/booking', bookingPut);
export default app;
listen(process.env.PORT || 3333, () => console.log(`Running server...`));

