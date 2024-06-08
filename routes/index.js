const router = require('express').Router();

// Mount the router.use for handle notes
const notesRouter = require('./notes');
router.use('/notes', notesRouter);
// console.log('Hey, routes/index.js passed');

module.exports = router;

