const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());


app.use(cors());

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  console.log(`Subscription request received for email: ${email}`);
  res.status(200).send('Subscribed successfully');
});

app.post('/api/sendWelcomeEmail', (req, res) => {
  const { email } = req.body;
  console.log(`Email sent to: ${email}`);

  res.status(200).send('Welcome email sent successfully');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
