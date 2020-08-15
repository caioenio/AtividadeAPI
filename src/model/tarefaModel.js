const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Criação do esquema do banco

var Tarefa = new Schema ( {

	descricao: {
		type: String,
		required: "Por favor informe uma descrição para tarefa"
	},

	status: {
		type: [{
			type: String,
			enum: ['Pendente', 'Em andamento', 'Completa'],
			required: "Informe o estado da tarefa, sendo : Pendente/Em andamento/Completa"
    	}],
    	
	},
	Created_date : {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Tarefas', Tarefa)