const { Router } = require('express');
const router = Router();

const { storeLead } = require('../controller/leadController');

router.post('/store/post', storeLead);

module.exports = router;











