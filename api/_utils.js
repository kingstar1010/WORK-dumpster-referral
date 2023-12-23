import { URL } from 'url';

const allowedHosts = [
  process.env.VERCEL_URL,
  "yourdumpster.pro",
  "www.yourdumpster.pro",
  "localhost:3000",
  "ydp.clients.prod.freespacedev.com",
  "ydp.clients.dev.freespacedev.com",
];

export const allowCors = fn => async (req, res) => {
  const origin = req.headers.origin || req.headers.Origin;

  console.log(`Got request with origin '${origin}' and method '${req && req.method}'`);

  if (origin) {
    // Origin header only present when doing XHR/fetch, not normal page navigation
    const url = new URL(origin);
    const host = url.host.toLowerCase();
    if (allowedHosts.includes(host)) {
      res.setHeader('Access-Control-Allow-Credentials', true);
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin');
      res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
      res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
      );
      if (req.method.toUpperCase() === 'OPTIONS') {
        res.status(200).end();
        return;
      }
    }
  }
  return await fn(req, res)
}

export function resFail(res, status, message) {
  console.error(message);
  res.status(status).send(message);
}