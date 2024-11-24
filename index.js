const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from OEL WSL')
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

