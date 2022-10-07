const express = require('express');
const path = require('path');

const rootDir = require('../utility/path');

const router = express.Router();

router.get('/', (req, res, next) => {
	res.sendFile(path.join(rootDir, 'views', 'main.html'));
});


module.exports = router;