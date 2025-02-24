const express = require('express');
const app = express();
const PORT = 3001;

const users = [
    { id: 1, name: 'Gino' },
    { id: 2, name: 'Pino' }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`user service su porta ${PORT}`);
});
