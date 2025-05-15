const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();


/* 🎯 GET a single board by ID */
router.get('/:boardId', async (req, res) => {
  console.log('🎯 GET a single board by ID: ✅');
  const { boardId } = req.params;
  try {
    const board = await prisma.board.findUnique({
      where: { board_id: parseInt(boardId) },
      include: {cards: true}
    });
    if (!board) {
      res.status(404).json({ error: 'Board not found' });
      return;
    }
    res.status(200).json({ board });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

/* 🗂️ GET all boards */
router.get('/', async (req, res) => {
  console.log('🗂️ GET all /boards ✅')
  try {
    const boards = await prisma.board.findMany();
    res.status(200).json({ boards });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

/* 📫 POST create a new board */
router.post('/', async (req, res) => {
  res.send('📫 POST create a new board / ... TO DO...');
})

/* ❌ DELETE a board */
router.delete('/:boardId', async (req, res) => {
  res.send('❌ DELETE a board '+req.originalUrl+'... TO DO...');
})


module.exports = router