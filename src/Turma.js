class Turma {

    #codigo = ''
    #nota = 0.0

    constructor(codigo, nota) {
        this.#codigo = codigo;
        this.#nota = nota;
    }
    
    aprovado() {
        return this.nota >= 6 ? true : false;
    }

    /* MÉTODOS GETTERS E SETTERS */
    get codigo () {
        return this.#codigo
    }

    set codigo (codigo) {
        this.#codigo = codigo
    }

    get nota () {
        return this.#nota
    }

    set nota (nota) {
        this.#nota = nota
    }
}

module.exports = Turma;