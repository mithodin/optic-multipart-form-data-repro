const express = require('express');
const app = express();
const port = 3000;

app.get('/a/b', (req, res) => {
   res.json({ hello: "world" });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});