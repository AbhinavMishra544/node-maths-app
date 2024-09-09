const express = require('express');
const {isNumeric} = require('./src/helpers/common');
const {authenticate} = require('./src/middleware/authenticate');
const app = express();
const port = 3000;

app.get('/sum', authenticate, (req, res) => {
  const { num1, num2 } = req.query;

  if (!isNumeric(num1) || !isNumeric(num2)) {
    return res.status(400).json({ error: 'Invalid input. Both parameters must be numeric.' });
  }

  const sum = parseFloat(num1) + parseFloat(num2);
  res.json({ sum });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
