// src/routes/productRoutes.js
import express from 'express';
import { check } from 'express-validator';
import { getProduct, addProduct } from '../controllers/productController.js';

const router = express.Router();

// Rota para buscar um produto
router.get('/products/:id', getProduct);

// Rota para adicionar um produto
router.post('/products',
  [
    check('id').notEmpty().withMessage('ID is required'),
    check('name').notEmpty().withMessage('Name is required'),
    check('price').isNumeric().withMessage('Price must be a number')
  ],
  addProduct
);

export default router;
