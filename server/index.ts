import * as express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('12345');
});

app.listen(3001, () => {
    console.log("start server : http://localhost:3001")
});
