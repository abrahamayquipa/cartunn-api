import express from 'express';
import fs from 'fs';

const app = express.Router();
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

app.get('/products', (req, res) => {
    res.send(data);
});

export default app;