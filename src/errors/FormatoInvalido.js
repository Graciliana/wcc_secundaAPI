class FormatoInvalido extends Error {
    constructor(contentType){
        const mensagem = `o Tipo ${contentType} é invalido! A API aceita somente JSON`;
        super(mensagem);
        this.name = 'FormatoInvalido';
        this.idErro = 6;
    }
}

module.exports = FormatoInvalido;