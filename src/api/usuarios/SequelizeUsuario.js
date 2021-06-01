const { adicionar, buscarPorPK, atualizar, remover } = require('../../models/agendamentos/SequelizeAgendamento');
const {listar} = require('../agendamentos/sequelizeAgendamentos');
const TabelaUsuario = require('./TabelaUsuarios');

module.exports = {
    async listar() {
        try {
            results = await TabelaUsuario.findAll({});
            return results;
        } catch (error) {
            throw error;
        }
    },

    async adicionar(usuario){
        try {
            results = await TabelaUsuario.create(usuario);
            return result;
        } catch (error) {
            throw error
        }
    },
    async buscarPorPk(id){
        try {
            usuario = await TabelaUsuario.findByPk(id);
            if(!usuario){

            }
        }
    },

    async buscarPorEmail(email){
        try {
            usuario = await TabelaUsuario.findOne({

            });
        },

    async atualizar(id, dados){
        try {
            result = await TabelaUsuario.update(

            )
        } catch (error) {
            throw error;
        }
    },

    async remover(id){
        try {
            result = await TabelaUsuario.remover(
                {
                    where: {
                        id:id
                    }
                }
            );
            return result
        }catch (error){
            throw error
        }
    }

}