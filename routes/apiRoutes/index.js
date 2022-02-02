const router = require('express').Router();
const uuid = require('uuid');
const { notes } = require('../../data/db.json');
const { validateNote, createNewNote } = require('../../lib/notes');
// set up GET

router.get('/notes', (req, res) => {
  res.json(notes);
});

// set up POST
router.post('/notes', (req, res) => {
  req.body.id = uuid.v4();

  if (!validateNote(req.body)) {
    res.status(400).send('Note needs to have a title and body text before it can be saved.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});  

// set up bonus
module.exports = router;