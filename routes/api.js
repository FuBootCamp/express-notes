// api.js routing api/notes
const router = require('express').Router();
// mount api/notes for getNotes and saveNote at index
const notesRouter = require('./notes');
router.use('/notes', notesRouter);

module.exports = router;

