const express = require('express');

const app = express();

const path = require("path");

const port = 5000;
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use(express.static(path.join('client', 'public')));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
