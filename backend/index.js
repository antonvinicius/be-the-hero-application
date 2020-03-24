const express = require('express');

const app = express();

app.use(express.json())

app.get('/',function(req,res){
    res.json({
        evento: "Semana Omnistack",
        aluno: "Antonio Vinicius"
    });
});

app.listen(3333);