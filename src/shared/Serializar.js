const FormatoInvalido = require('../erros/FormatoInvalido');

class Serializar {
    json(dados){
        return JSON.stringify(dados);
    }

    transformar(dados){
        if(this.contentType === 'application/json'){
            return this.json(dados);
            
        }
    
        if(this.contentType === 'application/xml' ){
            return this.xml(dados);
        }

        throw new FormatoInvalido(this.contentType);
    }
}

class SerializarAgendamento extends Serializar {
    constructor(contentType){
        super();
        this.contentType = contentType;
        this.tag = 'Agendamento';
        this.tagList = 'Agendamentos';
    };
};
XML(dados){
    if(Array.isArray(dados)){
        dados = dados.map((item) => {
            return {
                [this.tag]: item
            }

        });
        this.tag = this.tagList;
    }
    return jsontoxml({
        [this.tag]: dados
    });
}
filtrarCampos(dados){
    const camposFiltrados = {};
    this.camposPermitidos.forEach((campo) => {
        if (dados.hasOwnProperty(campo)){
            camposFiltrados[campo] = dados[campo]
        }
    });
    return camposFiltrados;
}

filtrar(dados){
    let dadosFiltrados = this.filtrarCampos(dados);

    if(Array.isArray((dados)) {
        dadosFiltrados = dados.map((dado) => {
            return this.filtrarCampos(dado);
        });
    }
    return dadosFiltrados;
    
}




class SerializarErro extends Serializar {
    constructor(ContentType){
        super()
        this.contentType = contentType;
        this.camposPermitidos = [
            'id', 'mensagem'
        ]
        this.tag = 'Error';
        this.tagList = 'Errors';
    }
}


module.exports = {
    Serializar: Serializar,
    SerializarAgendamento: SerializarAgendamento,
    SerializarErro: SerializarErro,
    FormatoInvalido: ['application/json', 'application/xml']

}