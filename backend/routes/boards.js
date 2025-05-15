const express = require('express')
const router = express.Router()


/* 🎯 GET a single board by ID */
router.get('/:boardId', (req, res) => {
  console.log('req:',req.originalUrl)
  res.send('🎯 GET a single board by ID: '+req.originalUrl+'... TO DO...')
})

/* 🗂️ GET all boards */
router.get('/', (req, res) => {
  res.send('🗂️ GET all /boards ... TO DO...')
})

/* 📫 POST create a new board */
router.post('/', (req, res) => {
  res.send('📫 POST create a new board / ... TO DO...')
})

/* ❌ DELETE a board */
router.delete('/:boardId', (req, res) => {
  res.send('❌ DELETE a board '+req.originalUrl+'... TO DO...')
})


module.exports = router