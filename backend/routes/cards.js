const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  res.send('🃏🃏🃏 Welcome to the /cards endpoint! See source code for more info about endpoints.')
})

/* 🃏🃏🃏 GET all cards for a board */
router.get('/:boardId', async (req, res) => {
  console.log('🃏🃏🃏 GET all cards for a board ✅');
  const { boardId } = req.params;
  try {
    const cards = await prisma.card.findMany({
      where: { board_id: parseInt(boardId) },  // * where: { board_id: parseInt(boardId) } as any, // 🔥 Original code had `as any` here, but drew and error.
    });
    res.status(200).json({ cards });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

/* 🌱 🃏 POST create a new card for a board */
router.post('/:boardId', async (req, res) => {
  res.send('🌱 🃏 POST create a new card for a board... TO DO...')
})

/* 🗳️ GET votes for a card */
// 🔥 we removed /:boardId to start endpoint above. so this need to be reworked
// router.get('/:boardId/cards/:cardId/votes', async (req, res) => {
//   res.send('🗳️ GET votes for a card... TO DO...')
// })

/* 🩹 PATCH votes for a card */
// 🔥 we removed /:boardId to start endpoint above. so this need to be reworked
// router.patch('/:boardId/cards/:cardId/votes', async (req, res) => {
//   res.send('🩹 PATCH votes for a card... TO DO...')
// })

/* ❌ DELETE a card */
// 🔥 we removed /:boardId to start endpoint above. so this need to be reworked
// router.delete('/:boardId/cards/:cardId', async (req, res) => {
//   res.send('❌ DELETE a card... TO DO...')
// })

module.exports = router


