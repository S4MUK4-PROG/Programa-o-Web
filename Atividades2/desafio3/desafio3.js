function contarVogais(palavra) {
  let contador = 0;
  let texto = String(palavra).toLowerCase();
  let vogais = "aeiouáàâãéèêíïóôõúü";

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    for (let j = 0; j < vogais.length; j++) {
      if (letra === vogais[j]) {
        contador++;
        break;
      }
    }
  }

  return contador;
}

// Exemplo de teste:
console.log(contarVogais("programação")); // Retorna 5