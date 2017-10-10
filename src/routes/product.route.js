'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/product.controller');
const authService = require('../services/auth.service');

router.get('/', controller.get);
router.post('/', authService.isAdmin, controller.post);
router.put('/:id',authService.isAdmin, controller.put);
router.delete('/', authService.isAdmin, controller.delete);

router.get('/:slug', controller.getBySlug);
router.get('/admin/:id', controller.getById);
router.get('/tags/:tag', controller.getByTag);

module.exports = router;
