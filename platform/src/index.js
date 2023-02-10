import express from 'express';
const app = express();
import apiRegistry from './apiRegistry.json';

apiRegistry.forEach(async api => {

  app.get(`/api/${api.apiEndpoint}`, async (req, res, next) => {
    const path = 'remoteLib/businessInfo';
    const middleware = (await import(path)).default;
    middleware(req, res, next);
  })
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});

