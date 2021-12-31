const express = require("express");
const { send } = require("express/lib/response");
const app = express();

const db = require("./config/db");

app.get("/", (req, res) =>res.send("respon  nodejs berhasil"));

db.authenticate().then(() =>
console.log("berhasil terkoneksi dengan database")
);



app.listen(4500, () => console.log("port berjalan di 4500"));