const express = require('express')
const router = express();
const controllerEmail = require('../../email/controller/index');

	router.post('/send', controllerEmail.send);

module.exports = router;