const express = require('express');
const app = express();
const port = 3000;

app.post('/u', (_, res) => {
    res.status(200).end();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});