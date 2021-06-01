const router = require('express').Router();
const servicoAgendamento = require('../../services/agendamentos');

router.get('/agendamentos', 
    servicoAgendamento.carregarTodosAgendamentos

);

router.get('/agendamentos/:id',
    servicoAgendamento.carregarAgendamento
);

router.put('/agendamentos/:id',
    servicoAgendamento.alterarAgendamento
);

router.post('/agendamentos',
    servicoAgendamento.criarAgendamento
);

router.delete('/agendamento/:id',
    servicoAgendamento.deletarAgendamento
);

module.exports = router;