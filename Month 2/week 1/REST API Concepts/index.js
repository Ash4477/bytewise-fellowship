const express = require('express');
const {connectMongoDb} = require('./connection');

const {logReqRes}  = require('./middlewares');

const userRouter = require('./routes/user');

const app = express();
const PORT = 8000;



// Mongoose Connection
connectMongoDb('mongodb://127.0.0.1:27017/bytewise-week-5')
.then(() => console.log('MongoDb Connected'));

// Middleware
app.use(express.urlencoded({ extended: false }));

app.use(logReqRes('log.txt'));

// Routes
app.use('/api/users', userRouter);


app.listen(PORT, () => {
    console.log('Server started at port', PORT);
});