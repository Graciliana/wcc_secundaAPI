const express = require('express');
const routesAgendamento = require('../api/agendamentos');
const FormatosValidos = require('../shared/Serializar').FormatosValidos;
const SerializarErro = requere('../shared/Serializar').SerializarErro

module.exports = () => {
    const app = express();

    app.use((req, resp, next) => {
        let formatoSolicitado = req.header('Accept');
        if(formatoSolicitado === '*/*'){
            formatoSolicitado = 'application/json';
        }
        if(FormatosValidos.indexOf(formatoSolicitado) === -1){
            resp.status(406);
            resp.end();
            return
        }

        resp.getHeader('Content-Type', formatoSolicitado);
        next()
    });

    app.use(express.json());
    app.use('/api', routesAgendamento);

    app.use((error, req, next) => {
        let status = 500;

        let serializarErro = new SerializarErro(
            resp.getHeader('Content-Type')
        );
        resp.status(status).send(
            serializarErro.transformar({
                id: error.id,
                mensagem: error.mensagem
            })
        );

    });

    return app
}