const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('🃏🃏🃏 Welcome to the /cards endpoint! See source code for more info about endpoints.')
})

/* 🃏🃏🃏 GET all cards for a board */
router.get('/:boardId', (req, res) => {
  res.send('🃏🃏🃏 GET all cards for a board... '+req.originalUrl+'... TO DO...')
})

/* 🌱 🃏 POST create a new card for a board */
router.post('/:boardId', (req, res) => {
  res.send('🌱 🃏 POST create a new card for a board... TO DO...')
})

/* 🗳️ GET votes for a card */
// 🔥 we removed /:boardId to start endpoint above. so this need to be reworked
// router.get('/:boardId/cards/:cardId/votes', (req, res) => {
//   res.send('🗳️ GET votes for a card... TO DO...')
// })

/* 🩹 PATCH votes for a card */
// 🔥 we removed /:boardId to start endpoint above. so this need to be reworked
// router.patch('/:boardId/cards/:cardId/votes', (req, res) => {
//   res.send('🩹 PATCH votes for a card... TO DO...')
// })

/* ❌ DELETE a card */
// 🔥 we removed /:boardId to start endpoint above. so this need to be reworked
// router.delete('/:boardId/cards/:cardId', (req, res) => {
//   res.send('❌ DELETE a card... TO DO...')
// })

module.exports = router


