function calcularEstatisticas(notas) {
  if (!notas || notas.length === 0) {
    console.log("A lista de notas está vazia.");
    return;
  }

  let aprovados = 0;
  let soma = 0;
  let maiorNota = notas[0];

  for (let nota of notas) {
    soma += nota;

    if (nota >= 6) {
      aprovados++;
    }

    if (nota > maiorNota) {
      maiorNota = nota;
    }
  }

  let media = soma / notas.length;

  console.log("Aprovados: " + aprovados);
  console.log("Média: " + media.toFixed(1));
  console.log("Maior: " + maiorNota);
}

// Exemplo de teste:
const notasTurma = [7, 4, 9, 5, 8];
calcularEstatisticas(notasTurma);