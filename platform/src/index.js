import express from 'express';
const app = express();
import apiRegistry from './apiRegistry.json';

apiRegistry.forEach(async api => {
  const middleware = (await import('remoteLib/businessInfo')).default;

  app.get(`/api/${api.apiEndpoint}`, (req, res, next) => {
    middleware(req, res, next);
  })
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});

