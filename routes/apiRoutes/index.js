const router = require('express').Router();
const { db } = require('../../data/db.json');

// set up GET

router.get('/notes', (req, res) => {
  res.json(db);
});

// set up POST

// set up bonus
module.exports = router;