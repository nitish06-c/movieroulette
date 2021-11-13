const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    console.log('Testing');

    res.send('Testing out the app.get()');
});

app.listen(PORT, () => console.log(`Server is running on port: http:localhost:${PORT}`));
