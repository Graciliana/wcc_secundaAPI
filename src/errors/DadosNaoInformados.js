class DadosNaoInformados  extends Error {
    constructor(){
        const mensagem = `Dados não informados`;
        super(mensagem);
        this.name = 'DadosNaoInformados';
        this.idErro = 4;
    }
}
module.exports = DadosNaoInformados;