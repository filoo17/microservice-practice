const express = require('express');
const app = express();
const PORT = 3002;

const messages = [
    { id: 1, user: 'Gino', message: 'Ciao pino' },
    { id: 2, user: 'Pino', message: 'Ciao gino' },
    { id: 3, user: 'Gino', message: 'Come stai?' },
    { id: 4, user: 'Pino', message: 'Bene' },
];

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.listen(PORT, () => {
    console.log(`message service su porta ${PORT}`);
});
