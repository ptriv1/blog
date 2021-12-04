const router = require('express').Router();
const userRoutes = require('./userRoutes');
const routesPosts = require('./routesPosts');

router.use('/users', userRoutes);
router.use('/posts', routesPosts);

module.exports = router;