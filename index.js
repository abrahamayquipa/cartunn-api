import express from 'express';
import cors from 'cors';
import productsRouter from './product.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors());

const data = JSON.parse(readFileSync(join(__dirname, 'data.json'), 'utf-8'));

app.use('/api', productsRouter(data));

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
