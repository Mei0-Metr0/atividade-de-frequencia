const Turma = require('./Turma');

class TurmaPresencial extends Turma {
    
    #frequencia = 0.0

    constructor(codigo, nota, frequencia) {
        super(codigo, nota)
        this.#frequencia = frequencia;
    }
    
    aprovado() {
        return super.aprovado() && this.frequencia >= 75;
    }

    get frequencia () {
        return this.#frequencia
    }

    set frequencia (frequencia) {
        this.#frequencia = frequencia
    }
}

module.exports = TurmaPresencial;