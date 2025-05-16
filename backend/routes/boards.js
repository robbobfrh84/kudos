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
      include: {cards: true } 
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
  console.log('📫 POST create a new board ✅');
  console.log("Incoming POST /boards request:", req.body);
  const { title, category, owner, image } = req.body;
  try {
    const board = await prisma.board.create({
      data: { title, category, owner, image },
    });
    res.status(201).json(board);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

/* ❌ DELETE a board */
router.delete('/:boardId', async (req, res) => {
  console.log('❌ DELETE a board ✅');
  const { boardId } = req.params;
  try {
    await prisma.board.delete({
      where: {
        board_id: parseInt(boardId),
      },
    });

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


module.exports = router