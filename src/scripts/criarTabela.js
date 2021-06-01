const TabelaSequelize = require('../models/agendamentos/TabelaAgendamento');

TabelaSequelize.sync()
    .then(()=> {
        console.log('Tabela criada')
    })
    .catch((error) => {
        console.log(error)
    });