module.exports = function(app){

	const tarefaController = require('../controller/tarefaController');

	// Criação das rotas

	app.route('/criar')
	.post(tarefaController.criar);

	app.route('/listar')
	.get(tarefaController.listar);

	app.route('/atualizar/:id')
	.post(tarefaController.atualizar);

	app.route('/deletar/:id')
	.delete(tarefaController.deletar);
}