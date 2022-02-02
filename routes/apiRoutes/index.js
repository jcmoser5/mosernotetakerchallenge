const router = require('express').Router();
const uuid = require('uuid');
let { notes } = require('../../data/db.json');
const { validateNote, createNewNote, deleteNote } = require('../../lib/notes');
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
router.delete('/notes/:id', (req, res) => {
  const result = notes.find(note => note.id === req.params.id);

  if (!result) {
    res.status(400).send('There is no note with that id.');
  } else {
    notes = notes.filter(note => note.id !== req.params.id);
    deleteNote(notes);
    res.json('Note deleted.');
  }
});

module.exports = router;