const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeLead(req, res){

    const params = Array(

    //getting data from form
        req.body.name,
        req.body.telefone,
        req.body.nascimento,
        req.body.cpf_cnpj,
        req.body.valor_investimento,
    );

    const query = "INSERT INTO db_suber(name, telefone, nascimento, cpf_cnpj, valor_investimento) VALUES(?, ?, ?, ?, ?)";

    connection.query(query, params, (err, results) => {
        if(results){
            res
                .status(201)
                .json({
                    sucess: true,
                    message: "Sucess",
                    data: results
                })
        } else {
            res 
                .status(400)
                .json({
                    sucess: false,
                    message: "Error"
                })
        }
    })
}

module.exports = {
    storeLead
}