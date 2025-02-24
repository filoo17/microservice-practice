const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3001/users');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'user service non disponibile' });
    }
});

app.get('/messages', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3002/messages');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'message service non disponibile' });
    }
});

app.listen(PORT, () => {
    console.log(`api server su porta ${PORT}`);
});