const express = require("express");
const { send } = require("express/lib/response");
const app = express();

const db = require("./config/db");

app.get("/", (req, res) =>res.send("respon  nodejs berhasil"));

db.authenticate().then(() =>
console.log("berhasil terkoneksi dengan database")
);

const User = require("./models/User");

app.post("/crud", async(req, res) => {
    try {
        const { username, email, password } = req. body;

        const newUser = new username({
            username, email, password
        });

        await newUser.save();

        res.json(newUser);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error")
    }
});

app.listen(4500, () => console.log("port berjalan di 4500"));