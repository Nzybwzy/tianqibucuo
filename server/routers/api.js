/**
 * Created by nap on 17/4/10.
 */
const express = require('express');
const router = express.Router();

const controller = require('../controllers/api');

console.log(controller)

router.get('/api/*', controller.get);
router.post('/api/*', controller.post);
router.put('/api/*', controller.put);
router.patch('/api/*', controller.patch);
router.delete('/api/*', controller.delete);

module.exports = router;