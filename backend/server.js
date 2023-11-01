const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_energizou"
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM clientes";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post('/create', (req, res) => {
    const sql = "INSERT INTO clientes (`clienteNome`,`CEP`,`endereco`,`numero`,`fone`,`email`) VALUES (?)";
    const values = [
        req.body.clienteNome,
        req.body.CEP,
        req.body.endereco,
        req.body.numero,
        req.body.fone,
        req.body.email
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("criado");
    })
})


app.listen(8081, ()=> {
    console.log("listening");
})