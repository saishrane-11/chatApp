const express = require('express');
const cors = require('cors');
const connectDb = require('./utils/db')
const app = express();
require('dotenv').config();
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
app.use(cors());

app.use(express.json());

const authRoutes = require('./routes/userRoutes');
app.use('/api/auth',authRoutes);


connectDb().then(
    app.listen(process.env.PORT, () => {
        console.log(`server started on port ` + process.env.PORT);
    })
)


