import express from 'express';
import data from './data.json';

const router = express.Router();

router.get('/products', (req, res) => {
  res.json(data.products);
});

router.get('/favorites-list', (req, res) => {
  res.json(data['favorites-list']);
});

router.get('/notifications', (req, res) => {
  res.json(data.notifications);
});

router.get('/status-report', (req, res) => {
  res.json(data['status-report']);
});

router.get('/your-cart', (req, res) => {
  res.json(data['your-cart']);
});

router.get('/orders', (req, res) => {
  res.json(data.orders);
});

router.get('/returns-list', (req, res) => {
  res.json(data['returns-list']);
});

export default router;