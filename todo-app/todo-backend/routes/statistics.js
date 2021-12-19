const express = require('express');
const redis = require('../redis');
const router = express.Router();

/* GET stastics listing. */
router.get('/', async (_, res) => {
  const added_todos = await redis.getAsync('added_todos');
  added_todos === null ? redis.setAsync('added_todos', 0) :
  
  res.json({
    added_todos: added_todos || 0
  });
});

module.exports = router;