import express from 'express';

import path from 'path';
const __dirname = path.resolve();

const app = express();
const port = 3000;

app.use('/static', express.static('public'));
app.use(express.static('build'));

app.get('/', function (_, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
