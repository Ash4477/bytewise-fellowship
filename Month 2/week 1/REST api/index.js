const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require('fs');

const app = express();
const PORT = 8000;

// Middleware
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    fs.appendFile('log.txt', `${Date.now()}: ${req.method}: ${req.path}\n`, (err, data) => {
        next();
    });
    next();
});

// Routes
app.get('/users', (req, res) => {
    const html = `
    <ul>
        ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

// REST API
app.get('/api/users', (req, res) => {
    res.setHeader("X-MyName", "Ash"); // Custom Header
    // * It is good practice to add 'X-' to custom headers
    return res.json(users);
});


app.post('/api/users', (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.email || !body.gender || !body.last_name || !body.job_title) {
        return res.status(400).json({msg: 'All fields are required'});
    }
    users.push({...body, id: users.length + 1});

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
        return res.status(201).json({status: "success", id: users.length});
    });
});

app
.route('/api/users/:id')
.get((req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find( user => user.id === id);
    if (!user) {
        return res.status(404).json({error: 'User not found'});
    }
    return res.json(user);
})
.patch((req, res) => res.json({status: "Pending"}))
.delete((req, res) => res.json({status: "Pending"}));




app.listen(PORT, () => {
    console.log('Server started at port', PORT);
});