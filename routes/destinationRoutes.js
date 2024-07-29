const express = require('express');
const router = express.Router();
const destinationController = require('../controllers/destinationController'); // Correct filename

router.get('/', destinationController.getDestinations);
router.post('/', destinationController.createDestination);

module.exports = router;
