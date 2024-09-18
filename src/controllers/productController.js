// src/controllers/productController.js
import { createClient } from 'redis';
import { validationResult } from 'express-validator';

// Criando uma conexão com o Redis
const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

// Tratando erros de conexão
redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

// Função para buscar um produto pelo ID
export const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await redisClient.get(`product:${id}`);
    if (product) {
      return res.json(JSON.parse(product));
    }
    return res.status(404).json({ message: 'Product not found' });
  } catch (err) {
    return res.status(500).send(err);
  }
};

// Função para adicionar um produto ao Redis
export const addProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id, name, price } = req.body;
  const product = { id, name, price };

  try {
    await redisClient.setEx(`product:${id}`, 3600, JSON.stringify(product));
    res.status(201).json({ message: 'Product saved', product });
  } catch (err) {
    return res.status(500).send(err);
  }
};