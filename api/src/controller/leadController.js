const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeLead(req, res){

    const params = Array(
    //getting data from form
        req.body.email,
        req.body.name,
        req.body.telefone,
        req.body.data_nascimento,
        req.body.cpf_cnpj,
        req.body.valor_investimento
    );

    const query = "INSERT INTO lead_user(email, name, telefone, data_nascimento, cpf_cnpj, valor_investimento) VALUES(?, ?, ?, ?, ?, ?)";

    connection.query(query, params, (err, results) => {
        console.log(err);
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
                    message: "Error",
                    data: err
                })
        }
    })
}

module.exports = {
    storeLead
}