const express = require('express');

const connectDB = require('./config/db');

const app = express();
const test = require('./routes/api/user');
const authRoute = require('./routes/api/auth');
const userRoute = require ('./routes/api/admin');
const purchaseRoute = require ('./routes/api/purchase');
const customerRoute = require ('./routes/api/user');
const cors = require('cors')
// Connect Database
connectDB();

app.use(cors())
app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.use(express.json())

app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use('/api/purchase',purchaseRoute);
app.use('/api/customer',customerRoute);




