
// require('dotenv').config();
// const express = require('express');
// const app = express();
// const router = require('./router/authRoute');
// const connectd = require('./Database/connectdatabase');

// app.use(express.json()); 
// app.use('/', router)


// connectd().then(() =>{
//              console.log('connected to servcer ')
// app.listen(5000, () =>{
//              console.log('server is running ');
// })

// })

const express = require('express');
const cors = require('cors');
const app = express();
const authre = require('./router/authRoute');
const contactroute = require('./router/contactroute')
const connectdatabse = require('./Database/connectdatabase');
const errorMiddleware = require('./validator/errorMiddleware');
const serviceroute = require('./router/serviceroute')
const adminRoute = require('./router/adminRoute')


var corsOptions = {
  
  origin: 'https://seervi-mandira.github.io',

  credentials: true,

  methods: "GET, POST, DELETE, PATCH" // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use(express.json());
app.use('/', authre);
app.use('/admins', contactroute)
app.use('/admin', adminRoute)
app.use('/', serviceroute)

app.use(errorMiddleware);



connectdatabse().then(() => {
  console.log('Connected to server');
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
});
