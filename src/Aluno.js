class Aluno {

    nome = ''
    login = ''
    RA = 0

    constructor (nome, login, RA) {
        this.nome = nome;
        this.login = login;
        this.RA = RA;
    }

    /* MÉTODOS GETTERS E SETTERS */

    get nome () {
        return this.nome
    }

    set nome (nome) {
        this.nome = nome
    }

    get login () {
        return this.login
    }

    set login (login) {
        this.login = login
    }

    get RA () {
        return this.RA
    }

    set RA (RA) {
        this.RA = RA
    }
}

module.exports = Aluno;