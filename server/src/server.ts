import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('listagem de usuários');

  response.json({name: 'Donovan'});
});

app.listen(3333);
