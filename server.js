const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers',(req,res) => {
    res.send([
        {
            'id':1,
            'image':'https://placeimg.com/64/64/1',
            'name':'홍길동',
            'birthday':'19001212',
            'gender':'남자',
            'job':'직장인'
          },
          {
            'id':2,
            'image':'https://placeimg.com/64/64/2',
            'name':'나문희',
            'birthday':'19101212',
            'gender':'여자',
            'job':'가정주부'
          },
          {
            'id':3,
            'image':'https://placeimg.com/64/64/3',
            'name':'나요',
            'birthday':'19201212',
            'gender':'남자',
            'job':'무직'
          }
    ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));