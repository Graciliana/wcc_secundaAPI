const SequelizeAgendamento = require('../models/SequelizeAgendamento');
const Agendamento = require('./Agendamento');
const SerializarAgendamento = require('../shared/Seriaçlizar').SerializarAgendamento;

module.exports = {
    carregarTodosAgendamentos: async(req, resp, next)=> {
        try {
            const results = await SequelizeAgendamento.listar();            
            
            resp.status(201).send(JSON.stringify(results));
        } catch (error) {
            resp.status(401).send(JSON.stringify({error: error.message}))
        }
    },
    carregarAgendamento: async(req, resp, next) => {
        try {
            const id =  req.params.id;
            const agendamento = new Agendamento({id: id});
            await agendamento.buscar();
            const serializador = new SerializarAgendamento(
                resp.getHeader('Content-Type')
                );

            resp.status(201).send(JSON.stringify(agendamento))
        } catch (error) {
            next(error)
        }
    },

    criarAgendamento: async (req, resp) => {
        try {
            const reqAgendamento =  req.body;
            const agendamento = new Agendamento(reqAgendamento);
            await agendamento.criar()
            resp.status(201).send(JSON.stringify(agendamento))
        }catch(error){
            resp.status(401).send(JSON.stringify({error: error.message}))
        }
    },

    
    alterarAgendamento: async(req, resp) => {
        try {
            const id = req.params.id;
            const dadosBody = req.body;
            const dados = Object.assign({}, dadosBody, {id:id})
            const agendamento = new Agendamento(dados);
            await agendamento.atualizar();
            resp.status(204).send()
        } catch (error) {   
            resp.status(400).send();
        }
    }
}