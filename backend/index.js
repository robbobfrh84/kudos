const express = require('express')
const cors = require('cors')

const tests = require('./routes/tests')
const boards = require('./routes/boards')
const cards = require('./routes/cards')

const app = express()
const router = express.Router()

app.use("/", router)
app.use(express.json())
app.use(cors())

router.get('/', (req, res) => { 
  res.send('Welcome to Kudos Board API! See source code for more info about endpoints.')
})
app.use("/tests", tests)
app.use("/boards", boards);
app.use("/cards", cards);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});