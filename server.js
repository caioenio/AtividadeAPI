
//Importando todas as bibliotecas
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Tarefa = require('./src/model/tarefaModel');
const app = express();
port = process.env.PORT || 3000

// Conexão com com Banco MongoDb

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/db', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

//Configuração para pegar o vai ser informado via json ou url

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

// Importando as routas

const routes = require('./src/routes/tarefaRoute');
routes(app);

// startando o servidor na porta

app.listen(port);

console.log('API em funcionamento');


