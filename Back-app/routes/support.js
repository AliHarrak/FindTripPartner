const express = require('express');
const supportController= require('../controllers/support.controller');

const router = express.Router();

router.post("/support",supportController.save);

module.exports = router;