const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 8008;
const time = 500;

app.get("/numbers", async (req, res) => {
    const all_urls = req.query.urls.split(",");
    const numbers = [];
    for (const i of all_urls) {
        const response = await fetch(url, { timeout: time });
        if (response.status === 200) {
          const number = await response.json();
          numbers.push(...new Set(number.numbers));
        } 
    }
    res.json({ numbers });
  });
  app.listen(port, () => {
    console.log(`The number management service is now running on port ${port}`);
  });
