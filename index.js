const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>CI/CD Pipeline</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          margin-top: 100px;
          background-color: #f0f0f0;
        }
        h1 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <h1>Hello, my name is Ananya</h1>
      <p>I have successfully implemented a CI/CD Pipeline 🚀</p>
    </body>
    </html>
  `);
});

app.listen(port, () => console.log(`App running on port ${port}`));
