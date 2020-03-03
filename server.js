const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/any',
            'name': 'John',
            'birthday': '961222',
            'gender': 'male',
            'job': 'College Student'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/64/64/any',
            'name': 'Jane',
            'birthday': '930128',
            'gender': 'female',
            'job': 'Developer'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/64/64/any',
            'name': 'James',
            'birthday': '950824',
            'gender': 'male',
            'job': 'QA'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));