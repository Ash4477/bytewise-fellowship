import express from "express";

const app = express();

// app.get("/", (req, res) => {
//     res.send("Server is ready");
// });

// get a list of 4 jokes
app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Joke 1",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "Joke 2",
            content: "This is also a joke"
        },
        {
            id: 3,
            title: "Joke 3",
            content: "This is a joke too"
        },
        {
            id: 4,
            title: "Joke 4",
            content: "This is another joke"
        }
    ];
    res.send(jokes);
});


const port = process.env.PORT | 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});