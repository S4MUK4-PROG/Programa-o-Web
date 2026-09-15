function ehPrimo(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Imprime os números primos de 2 até 50
console.log("Primos de 2 a 50:");
for (let i = 2; i <= 50; i++) {
  if (ehPrimo(i)) {
    console.log(i);
  }
}