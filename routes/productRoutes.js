const express = require('express');
const router = express.Router();
const product_controller = require('../controllers/productController');
const { requireAuth } = require('../middleware/auth');

// GET products homepage (requires authentication)
router.get('/', requireAuth, product_controller.product_list);

// GET request for creating a product (requires authentication)
router.get('/new', requireAuth, product_controller.product_create_get);

// POST request for creating product (requires authentication)
router.post('/new', requireAuth, product_controller.product_create_post);

// GET request to delete product (requires authentication)
router.get('/:id/delete', requireAuth, product_controller.product_delete_post);

// POST request to delete product (requires authentication)
router.post('/:id/delete', requireAuth, product_controller.product_delete_post);

// GET request to update product (requires authentication)
router.get('/:id/edit', requireAuth, product_controller.product_update_get);

// POST request to update product (requires authentication)
router.post('/:id/edit', requireAuth, product_controller.product_update_post);

// GET request for one product (requires authentication)
router.get('/:id', requireAuth, product_controller.product_detail);

module.exports = router;