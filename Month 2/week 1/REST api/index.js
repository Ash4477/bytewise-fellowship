const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');

const app = express();
const PORT = 8000;

// Mongoose Connection
mongoose.connect('mongodb://127.0.0.1:27017/bytewise-week-5')
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB Error', err));

// Schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

// Middleware
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    fs.appendFile('log.txt', `${Date.now()}: ${req.method}: ${req.path}\n`, (err, data) => {
        next();
    });
    next();
});

// Routes
app.get('/users', async (req, res) => {
    const allDbUsers = await User.find({});
    const html = `
    <ul>
        ${allDbUsers.map(user => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

// REST API
app.get('/api/users', async (req, res) => {

    // res.setHeader("X-MyName", "Ash"); // Custom Header
    // * It is good practice to add 'X-' to custom headers

    const allDbUsers = await User.find({});

    return res.json(allDbUsers);
});


app.post('/api/users', async(req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.email || !body.gender || !body.last_name || !body.job_title) {
        return res.status(400).json({msg: 'All fields are required'});
    }
    
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title,
    });

    return res.status(201).json({msg: 'success'});
});

app
.route('/api/users/:id')
.get( async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).json({error: 'User not found'});
    }
    return res.json(user);
})
.patch( async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, {lastName: 'changed'}); 
    // hardcoding last name to "changed", we actually do this from frontend
    return res.json({status: 'Success'});
})
.delete( async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: 'Success'});
});




app.listen(PORT, () => {
    console.log('Server started at port', PORT);
});