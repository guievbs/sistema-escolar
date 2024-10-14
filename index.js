const Aluno = require("./models/Aluno");
const Turma = require("./models/Turma");
const TurmaPresencial = require("./models/TurmaPresencial");

// Criando aluno
const aluno1 = new Aluno("Maria Silva", "maria123", "RA001");
console.log("Aluno:", aluno1);

// Criando turma regular
const turma1 = new Turma("MAT101", 8);
console.log("Turma:", turma1, "Aprovado?", turma1.aprovado());

// Criando turma presencial
const turmaPresencial1 = new TurmaPresencial("FIS101", 6, 80);
console.log(
  "Turma Presencial:",
  turmaPresencial1,
  "Aprovado?",
  turmaPresencial1.aprovado()
);
