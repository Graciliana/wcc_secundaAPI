class NaoEncontrado  extends Error {
    constructor(model){
        const mensagem = `${model} não encontrado`;
        super(mensagem);
        this.name = 'NaoEncontrado';
        this.idErro = 5;
    }
}
module.exports = NaoEncontrado;