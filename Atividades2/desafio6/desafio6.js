function ehPalindromo(texto) {
  let str = String(texto).toLowerCase();
  let inicio = 0;
  let fim = str.length - 1;

  while (inicio < fim) {
    if (str[inicio] !== str[fim]) {
      return false;
    }
    inicio++;
    fim--;
  }

  return true;
}


console.log(ehPalindromo("Arara")); // true
console.log(ehPalindromo("Casa"));  // false
