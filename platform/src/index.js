import express from 'express';
const app = express();
import apiRegistry from './apiRegistry.json';

const Client = require('remote-modules').default;
const client = new Client({ ttl: 0, uri: 'http://localhost:3000' });


apiRegistry.forEach(async api => {

  app.get(`/api/${api.apiEndpoint}`, async (req, res, next) => {
    
    client.import().then(middlewares => {
      middlewares[`${api.middleware}`](req, res, next)
    }).catch((e) => {
      console.log('Error', e)
      next(e)
    });
  })
});

app.listen(5000, () => {
  console.log(`Server is listening on port: 5000`);
});

