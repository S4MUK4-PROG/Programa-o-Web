function fibonacci(n) {
  if (n <= 0) {
    console.log("Informe um número maior que zero.");
    return;
  }

  let a = 0;
  let b = 1;
  let termos = [];

  for (let i = 0; i < n; i++) {
    termos.push(a);
    let proximo = a + b;
    a = b;
    b = proximo;
  }

 
  console.log(termos.join(", "));
}

// Exemplo de teste:
fibonacci(7); // Imprime: 0, 1, 1, 2, 3, 5, 8