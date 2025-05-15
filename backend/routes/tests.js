const express = require('express')
const router = express.Router()

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
  // res.send('🧪 Welcome to the /tests endpoint! See source code for more info about endpoints.')
  const test = await prisma.test.findMany()
  res.json(test)
})

router.get('/test', (req, res) => {
  res.send('This is the tests/test endpoint.')
})

module.exports = router
