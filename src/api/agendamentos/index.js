const router = require('express').Router();
const servicoAgendamento = require('../../services/agendamentos');
const passport = require('passport');

router.get('/agendamentos', 
    passport.authenticate('bearer', {session: false}),
    servicoAgendamento.carregarTodosAgendamentos

);

router.get('/agendamentos/:idagendamento',
    passport.authenticate('bearer', {session: false}),
    servicoAgendamento.carregarAgendamento
);



router.put('/agendamentos/:id',
    passport.authenticate('bearer', {session: false}),
    servicoAgendamento.alterarAgendamento
);

router.post('/agendamentos',
    passport.authenticate('bearer', {session: false}),
    servicoAgendamento.criarAgendamento
);

router.delete('/agendamento/:id',
    passport.authenticate('bearer', {session: false}),
    servicoAgendamento.deletarAgendamento
);

module.exports = router;