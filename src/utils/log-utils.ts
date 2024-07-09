import { Request } from 'express';

const logRequest = (req: Request) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  };
  
  const logError = (error: any) => {
    console.error(`[${new Date().toISOString()}] ERROR: ${error.message}`);
  };

  export {logRequest, logError}