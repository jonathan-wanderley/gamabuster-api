const express = require('express');
const routes = require('./routes');
const db = require("./database");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.hasConnection();

app.use(routes);
app.use((req, res)=>{ res.status(404).send('404 Não encontrado') });

app.listen(3000, () => {
    console.log("🔥 Servidor rodando!");
})