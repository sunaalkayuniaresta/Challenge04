const express = require("express");
const app = express();
const { readFile } = require("fs").promises;

app.use(express.static("public"));
// app.use('/public/images', express.static('images'));

app.get("/", async (request, response) => {
  response.send(await readFile("./public/index.html", "utf8"));
});
app.get("/home", async (request, response) => {
  response.send(await readFile("./public/index.html", "utf8"));
});
app.get("/cars", async (request, response) => {
  response.send(await readFile("./public/cari_mobil.html", "utf8"));
});
app.get("/example", async (request, response) => {
  response.send(await readFile("./public/index.example.html", "utf8"));
});

app.listen(process.env.PORT || 8000, () => console.log(`App available on http://localhost:8000`));
