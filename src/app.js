const Aluno = require('./Aluno');
const Turma = require('./Turma');
const TurmaPresencial = require('./TurmaPresencial');

const aluno1 = new Aluno('João', 'joao123', 12345);
const turma1 = new Turma('T1', 7.5);
const turmaPresencial1 = new TurmaPresencial('T2', 6.8, 80);

console.log("Aluno:", aluno1.nome, aluno1.login, aluno1.RA);
console.log("Turma:", turma1.codigo, turma1.nota);
console.log("Turma Presencial:", turmaPresencial1.codigo, turmaPresencial1.nota, turmaPresencial1.frequencia);

console.log("Aprovado na turma:", turma1.aprovado());
console.log("Aprovado na turma presencial:", turmaPresencial1.aprovado());