const router = require('express').Router();
const { db } = require('../../data/db.json');
const uuid = require('uuid');

// set up GET

router.get('/notes', (req, res) => {
  res.json(db);
});

// set up POST
router.post('/notes', (req, res) => {
  req.body.id = uuid.v4();
  res.send(req.body);
});  

// set up bonus
module.exports = router;