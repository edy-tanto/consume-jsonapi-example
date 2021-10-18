const jsonApiModels = require('json-api-models');
const axios = require('axios');

const models = new jsonApiModels.Store();

const config = {
  method: 'get',
  url: 'http://dummy.api.pse.turbin.id/api/v1/jsonapi/users/1/penyelenggara-sistem-elektronik?include=sistemElektronik.status',
  headers: {
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9kdW1teS5hcGkucHNlLnR1cmJpbi5pZFwvYXBpXC92MVwvanNvbmFwaVwvbG9naW4iLCJpYXQiOjE2MzQ1NjE2NjgsImV4cCI6MTYzNDc3NzY2OCwibmJmIjoxNjM0NTYxNjY4LCJqdGkiOiJPb3lWbWo2N3BnaklmaDd1Iiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.YHiWTqwhj6ngQfp5cFi_PH7nX0Kl9jWco5k0_Ur-UMY'
  }
};

axios(config)
    .then(function (response) {
        models.sync(response.data);
        const penyelenggaraSistemElektronik = models.find('penyelenggaraSistemElektronik', '6');
        const daftarSistemElektronik = penyelenggaraSistemElektronik.sistemElektronik;
        const sistemElektronik = daftarSistemElektronik[0];

        console.log(sistemElektronik.status.status);

        const daftarPenyelenggaraSistemElektronik = models.findAll('penyelenggaraSistemElektronik');
        daftarPenyelenggaraSistemElektronik.map((penyelenggaraSistemElektronik) => {
            const daftarSistemElektronik = penyelenggaraSistemElektronik.sistemElektronik;
            daftarSistemElektronik.map((sistemElektronik) => {
                console.log(penyelenggaraSistemElektronik.nama_bh + ' - ' + sistemElektronik.nama_sistem_elektronik);
            });
        });
    })
    .catch(function (error) {
        console.log(error);
    });

