const express = require('express');

const routes = express.Router();

routes.get('/',function(req,res){
    res.json({
        evento: "Semana Omnistack",
        aluno: "Antonio Vinicius da Costa"
    });
});

module.exports = routes;

