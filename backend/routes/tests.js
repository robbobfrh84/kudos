const express = require('express');
const router = express.Router();

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const test = await prisma.test.findMany();
  res.json(test);
})

router.get('/test', (req, res) => {
  res.send('😊 This is the tests/test endpoint. No JSON returned here (...yet?)');
})

module.exports = router;
