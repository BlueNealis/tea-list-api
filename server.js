const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Tea List';
app.locals.teas = [ {id: 1, name:'Yunnan Gold', type:'black' , notes:['pepper','chocolate', 'round'] , where:'Yunnan province', how:'Steep at 212° for 3-5 minutes' },
  {id: 2, name:'Silver Needle' ,img:'https://images.pexels.com/photos/5988177/pexels-photo-5988177.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', type:'white' , notes:['nutty','floral','sweet'] , where: 'Fuding Fujian province', how:'Steep at 180° for 3 minutes' },
  {id: 3, name:'White Peony' , img:'https://images.pexels.com/photos/6103121/pexels-photo-6103121.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', type:'white', notes:['floral','herbal', 'round'] , where:'Zhenghe town in Fujian Province', how:'Steep at 180° for 3 minutes' },
  {id: 4, name:'Irish Breakfast' ,img:'https://images.pexels.com/photos/6087517/pexels-photo-6087517.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', type:'black' , notes:['brisk', 'malty', 'oak', 'citrus' ] , where:'Sri Lanka and Assam', how: 'Steep at 212° for 3-5 minutes'},
  {id: 5, name:'Earl Grey' , type:'black' , notes:['floral','citrus', 'nutty'] , where:'Calabria, Italy', how:'Steep at 212° for 3-5 minutes' },
  {id: 6, name: 'Sencha', img:'https://images.pexels.com/photos/8951989/pexels-photo-8951989.jpeg?auto=compress&cs=tinysrgb&w=800', type:'green' , notes:['crisp','edamame','sweet', 'nutty'], where:'Shizuoka Japan', how:'Steep at 165° for 2 minutes'},
  {id: 7, name:'Jasmine Pearl', img:'https://images.pexels.com/photos/3640820/pexels-photo-3640820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', type:'green' , notes:['floral', 'sweet', 'clean', 'soft'] , where:'Fuding Fujian Province', how: 'Steep at 195° for 2-3 minutes'},
  {id: 8, name:'Hojicha', img:'https://images.pexels.com/photos/11213970/pexels-photo-11213970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', type:'green' , notes:['nutty', 'mesquite', 'clean'] , where:'Japan', how: 'Steep at 180° for 2-3 minutes'},
  {id: 9, name:'Rooibos Vanilla Chai', type:'Chai' , notes:['tangy', 'sweet', 'smooth', 'mellow'] , where:'', how:'Steep at 212° for 7-10 minutes'  },
  {id: 10, name:'Darjeeling', type:'oolong', notes:['floral','dried fruit', 'musky'] , where:'Darjeeling, India', how:' Steep at 212° for 3-4 minutes'  },
  {id: 11, name:'Jade Oolong' , type:'oolong' , notes:['green','floral','fresh', 'clean'], where:'Tung Ting Mountain Taiwan', how: 'Steep at 180° for 3-5 minutes' },
  {id:12, name:'Chamomile', img:'https://images.pexels.com/photos/6103501/pexels-photo-6103501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', type:'herbal' , notes:['floral', 'nutty','apple'], where:'Nile River Valley, Egypt', how:'Steep at 212° for 5-10 minutes'},
  {id:13, name:'Yerba Mate',img:'https://images.pexels.com/photos/8279916/pexels-photo-8279916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', type:'herbal' , notes:['grass', 'wheat', 'herby'], where:'South America', how:'Steep at 150° for 3-5 minutes'},
  {id:14, name:'Rooibos' , img:'https://images.pexels.com/photos/6087602/pexels-photo-6087602.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', type:'herbal' , notes:['sweet', 'smooth', 'mellow'], where:'South Africa', how:'Steep at 212° for 5 minutes'},
  {id:15, name:'Pu-Erh', img:'https://images.pexels.com/photos/5977252/pexels-photo-5977252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', type:'pu-erh', notes:['rooty', 'earthy'], where:'Yunnan China', how:' Steep at 212° for 3-5 minutes.'},
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
