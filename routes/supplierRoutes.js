const express = require('express');
const router = express.Router();
const supplier_controller = require('../controllers/supplierController');
const { requireAuth } = require('../middleware/auth');

// GET suppliers homepage (requires authentication)
router.get('/', requireAuth, supplier_controller.supplier_list);

// GET request for creating a supplier (requires authentication)
router.get('/new', requireAuth, supplier_controller.supplier_create_get);

// POST request for creating supplier (requires authentication)
router.post('/new', requireAuth, supplier_controller.supplier_create_post);

// GET request to delete supplier (requires authentication)
router.get('/:id/delete', requireAuth, supplier_controller.supplier_delete_post);

// POST request to delete supplier (requires authentication)
router.post('/:id/delete', requireAuth, supplier_controller.supplier_delete_post);

// GET request to update supplier (requires authentication)
router.get('/:id/edit', requireAuth, supplier_controller.supplier_update_get);

// POST request to update supplier (requires authentication)
router.post('/:id/edit', requireAuth, supplier_controller.supplier_update_post);

// GET request for one supplier (requires authentication)
router.get('/:id', requireAuth, supplier_controller.supplier_detail);

module.exports = router;