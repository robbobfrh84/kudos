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
  console.log('🌱 🃏 POST create a new card for a board... TO DO...')
  const { boardId } = req.params;
  const { title, description, gif, owner } = req.body;
  try {
    const card = await prisma.card.create({
      data: {
        title,
        description,
        gif,
        owner,
        board_id: parseInt(boardId),
      },
    });
    res.status(201).json(card);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

/* 🗳️ GET votes for a card */
// 🔥 we removed /:boardId to start endpoint above. so this need to be reworked
// router.get('/:boardId/cards/:cardId/votes', async (req, res) => {
//   res.send('🗳️ GET votes for a card... TO DO...')
// })

/* 🩹 PATCH votes for a card */
router.patch('/:cardId/board/:boardId', async (req, res) => {
  const { boardId, cardId } = req.params;
  const { votes } = req.body;
  try {
    if (isNaN(votes)) {
      return res.status(400).json({ message: 'Votes must be a number' });
    }
    const updatedCard = await prisma.card.update({
      where: { card_id: parseInt(cardId), board_id: parseInt(boardId) },
      data: { votes: parseInt(votes) },
    });
    if (!updatedCard) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.status(200).json({ votes: updatedCard.votes });
  } catch (error) {
    console.error('Error updating votes for card:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
})

/* ❌ DELETE a card */
router.delete('/:cardId/board/:boardId', async (req, res) => {
  console.log('❌ DELETE a card ✅');
  const { boardId, cardId } = req.params;
  try {
    await prisma.card.delete({
      where: { card_id: parseInt(cardId), board_id: parseInt(boardId) },
    });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

module.exports = router


