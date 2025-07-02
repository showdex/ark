const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // your frontend folder

app.post('/subscribe', (req, res) => {
  const { email } = req.body;
  console.log('New subscriber:', email);
  res.status(200).json({ message: 'Subscription received' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
