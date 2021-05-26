const router = require('express').Router();
const servicoAgendamento = require('../services');

router.get('/agendamentos', 
    servicoAgendamento.carregarTodosAgendamentos

});

router.get('/agendamento/:id',
    servicoAgendamento.carregarAgendamento
);

router.post('/agendamentos',
    servicoAgendamento.criarAgendamento
)

module.exports = router;