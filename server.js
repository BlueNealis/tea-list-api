const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Tea List';
app.locals.teas = [ {id: 1, name:'Yunnan Gold', type:'black' , notes:['pepper','chocolate', 'round'] , where:'Yunnan province', how:'Steep at 212° for 3-5 minutes' },
  {id: 2, name:'Silver Needle' , type:'white' , notes:['nutty','floral','sweet'] , where: 'Fuding Fujian province', how:'Steep at 180° for 3 minutes' },
  {id: 3, name:'White Peony' , type:'white', notes:['floral','herbal', 'round'] , where:'Zhenghe town in Fujian Province', how:'Steep at 180° for 3 minutes' },
  {id: 4, name:'Irish Breakfast' , type:'black' , notes:['brisk', 'malt', 'oak', 'citrus' ] , where:'Sri Lanka and Assam', how: 'Steep at 212° for 3-5 minutes'},
  {id: 5, name:'Earl Grey' , type:'black' , notes:['floral','citrus', 'nutty'] , where:'Calabria, Italy', how:'Steep at 212° for 3-5 minutes' },
  {id: 6, name: 'Sencha', type:'green' , notes:['crisp','edamame','sweet', 'nutty'], where:'Shizuoka Japan', how:'Steep at 165° for 2 minutes'},
  {id: 7, name:'Jasmine Pearl', type:'green' , notes:['floral', 'sweet', 'clean', 'soft'] , where:'Fuding Fujian Province', how: 'Steep at 195° for 2-3 minutes'},
  {id: 8, name:'Hojicha' , type:'green' , notes:['nutty', 'mesquite', 'clean'] , where:'Japan', how: 'Steep at 180° for 2-3 minutes'},
  {id: 9, name:'Rooibos Vanilla Chai' , type:'Chai' , notes:['tangy', 'sweet', 'smooth', 'mellow'] , where:'', how:'Steep at 212° for 7-10 minutes'  },
  {id: 10, name:'Darjeeling', type:'oolong', notes:['floral','dried fruit', 'musk'] , where:'Darjeeling, India', how:' Steep at 212° for 3-4 minutes'  },
  {id: 11, name:'Jade Oolong' , type:'oolong' , notes:['green','floral','fresh', 'clean'], where:'Tung Ting Mountain Taiwan', how: 'Steep at 180° for 3-5 minutes' },
]

app.get('/', (request, response) => {
  response.send('This is Tea List!');
});
app.use(cors())
app.get('/api/v1/teas', (request, response) => {
  const teas = app.locals.teas;
  response.json({ teas });
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
