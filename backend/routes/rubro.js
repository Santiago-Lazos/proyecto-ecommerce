const express = require('express');
const router = express.Router();
const rubroController = require('../controllers/rubroController');

router.get('/', rubroController.getAllRubros);

module.exports = router;
