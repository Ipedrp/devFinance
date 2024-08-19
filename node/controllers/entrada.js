import {db} from '../db.js';

export const getRegistro = (req, res) =>{
    
    const q = 'SELECT * FROM registros';

    db.query(q, (err, data) => {

        if(err){
            return res.json(err)
        }

        return res.status(200).json(data)

    })
};

export const getRegistroEntrada = (req, res) => {
    
    const q = 'SELECT * FROM registros WHERE tipo = "entrada"';

    db.query(q, (err, data) => {

        if(err){
            return res.json(err);
        }

        return res.status(200).json(data);

    });
};

export const getRegistroSaida = (req, res) => {
    
    const q = 'SELECT * FROM registros WHERE tipo = "saida"';

    db.query(q, (err, data) => {

        if(err){
            return res.json(err);
        }

        return res.status(200).json(data);

    });
};




export const addRegistro = (req, res) => {

    const q = 'INSERT INTO registros(`valor`, `descricao`, `tipo`) VALUE(?)';

    const values = [
        req.body.valor,
        req.body.descricao,
        req.body.tipo
    ];

    db.query(q, [values], (err) =>{

        if(err){
            return res.json(err);
        }

        return res.status(200).json("Registro cadastrado com sucesso!");
    })
}



export const updateProdutos = (req, res) =>{
    const q = "UPDATE registros SET `valor` = ?, `descricao` = ?, `tipo` = ?, WHERE `id` = ? ";
    
    const values = [
        req.body.valor,
        req.body.descricao,
        req.body.tipo
    ];

    db.query(q, [...values, req.params.id], (err) =>{

        if(err){
            return res.json(err);
        }

        return res.status(200).json("Registro atualizado com sucesso!");
    })
}

export const deleteProdutos = (req, res) => {

    const id = req.params.id;
    const q = 'DELETE FROM registros WHERE `id` = ?';

    db.query(q, [id], (err) =>{

        if(err){
            return res.json(err);
        }

        return res.status(200).json("Registro deletado com sucesso!");
    })
}