import express from 'express'

const app = express();
const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    res.send('Hello\n');
});

app.listen(PORT, () => {
    console.log("start server : http://localhost:3000")
});
