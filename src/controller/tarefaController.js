const mongoose = require('mongoose');
const Tarefa = mongoose.model('Tarefas');

// Criação das funcionalidades das tarefas

exports.criar = (req,res) => {
	const { descricao, status} = req.body
	let novaTarefa = new Tarefa({ descricao, status})
	novaTarefa.save((error, tarefa) =>{
		if(error){
			res.send(error);
		}
		res.send('Sua tarefa foi criada');
	})
}

exports.listar = (req,res) =>{
	Tarefa.find({}, (error,tarefas) =>{
		if(error){
			res.send(error);
		}
		res.json(tarefas);
	})
}

exports.atualizar = (req,res) => {
	Tarefa.findOneAndUpdate({_id: req.params.id }, req.body,{new: true} ,(error, tarefa) =>{
		if(error){
			res.send(error);
		}
		let resposta = {
			mensagem: 'Sua tarefa foi atualizada',
			data : tarefa
		}
		res.send(resposta);
	})
}	

exports.deletar = (req,res) => {
	Tarefa.remove({_id: req.params.id}, (error,tarefa) => {
		if(error){
			res.send(error);
		}
		let resposta = {
			mensagem: 'Tarefa deletada',
			data: tarefa
		}
		res.send(resposta);
	})
}	
