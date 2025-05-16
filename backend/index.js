const express = require('express');
const cors = require('cors');

const tests = require('./routes/tests');
const boards = require('./routes/boards');
const cards = require('./routes/cards');

const app = express();

// ✅ Apply CORS FIRST
const allowedOrigins = ['http://localhost:5173', 'https://kudos-mfz5.onrender.com'];
app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true // needed for axios withCredentials
}));

// ✅ Then JSON parsing
app.use(express.json());

// ✅ Now define routes
app.get('/', (req, res) => {
  res.send('Welcome to Kudos Board API! See source code for more info about endpoints.');
});

app.use("/tests", tests);
app.use("/boards", boards);
app.use("/cards", cards);

// ✅ Listen
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
