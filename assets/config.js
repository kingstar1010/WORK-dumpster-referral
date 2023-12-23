export const hostname = 'https://localhost';
export const title = 'BASE TEMPLATE - Freespace.dev';
export const description = 'This is the default description for the template';

export const mobileBreakPoint = 768; //px
export const fsMobile = `(max-width : ${mobileBreakPoint}px)`;
export const fsDesktop = `(min-width : ${mobileBreakPoint}px)`;

const useEnv = process.env.BUILD_ENVIRONMENT
  || process.env.NEXT_PUBLIC_BUILD_ENVIRONMENT
  || 'development';
const host = process.env.VERCEL_URL
  || process.env.NEXT_PUBLIC_VERCEL_URL
  || 'ydgdr.clients.dev.freespacedev.com';
export const config = {
  all: {
    development: {
      URL: `https://${host}`,
      API_ENDPOINT: `https://${host}/api`,
    },
    production: {
      // Hardcode so it uses the nice URL
      URL: `https://yourdumpsterguydumpsterrentals.com`,
      // NOTE: The below requires CORS setup on the endpoints to work
      API_ENDPOINT: `https://${host}/api`,
    }
  },
  // The enviroment that was statically built into the application
  builtName: useEnv,
  built: null,
};
config.built = config.all[useEnv];

// Only for deubgging...
//const g = typeof global === 'undefined' ? window : global;
//g.config = config;