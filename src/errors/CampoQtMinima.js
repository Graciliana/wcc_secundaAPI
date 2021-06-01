class CampoQtdMinima extends Error {
    constructor(campo){
        const mensagem = `O campo ${campo} não possui a quantidade minima de 8 caracteres`;
        super(mensagem);
        this.name = 'CampoQtdMinima';
        this.idErro = 3;
    }
}
module.exports = CampoQtdMinima;