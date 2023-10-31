import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM clientes";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q =
        "INSERT INTO clientes(`clienteNome`, `CEP`, `endereco`, `numero`, `fone`, `email`) VALUES(?)";

    const values = [
        req.body.clienteNome,
        req.body.CEP,
        req.body.endereco,
        req.body.numero,
        req.body.fone,
        req.body.email,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    });
};

export const updateUser = (req, res) => {
    const q =
        "UPDATE clientes SET `clienteNome` = ?, `CEP` = ?, `endereco` = ?, `numero` = ?, `fone` = ?, `email` = ? WHERE `idCliente` = ?";

    const values = [
        req.body.clienteNome,
        req.body.CEP,
        req.body.endereco,
        req.body.numero,
        req.body.fone,
        req.body.email,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM clientes WHERE `idClientes` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
};