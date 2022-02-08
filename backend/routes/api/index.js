const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js');
const {restoreUser} =  require('../../utils/auth');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use(restoreUser);
router.use('/spots', spotsRouter);

module.exports = router;
