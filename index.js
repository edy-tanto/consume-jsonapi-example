const jsonApiModels = require('json-api-models');
const axios = require('axios');

const models = new jsonApiModels.Store();

const config = {
  method: 'get',
  url: 'http://dummy.api.pse.turbin.id/api/v1/jsonapi/users/1/penyelenggara-sistem-elektronik?include=sistemElektronik.status',
  headers: {
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9kdW1teS5hcGkucHNlLnR1cmJpbi5pZFwvYXBpXC92MVwvanNvbmFwaVwvbG9naW4iLCJpYXQiOjE2MzQxOTUyMjIsImV4cCI6MTYzNDQxMTIyMiwibmJmIjoxNjM0MTk1MjIyLCJqdGkiOiJMeE4wakNDdjB5Y1Y5eXdpIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.PEE8Ztu2JIB5013n98FBU4viRrRi2EspJgJP9QBU-BQ'
  }
};

axios(config)
    .then(function (response) {
        models.sync(response.data);
        const penyelenggaraSistemElektronik = models.find('penyelenggaraSistemElektronik', '6');
        const daftarSistemElektronik = penyelenggaraSistemElektronik.sistemElektronik;
        const sistemElektronik = daftarSistemElektronik[0];

        console.log(sistemElektronik.status.status);
    })
    .catch(function (error) {
        console.log(error);
    });

