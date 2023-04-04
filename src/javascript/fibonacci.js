function fibonacci(a) {
  let fibonacci = 0;
  let j = 1;
  let arrayfib = [];

  for (let i = 0; i < a + 3; i++) {
    let m = fibonacci;
    arrayfib.push(m);
    fibonacci = fibonacci + j;
    j = m;
  }
  return arrayfib.includes(a);
}

console.log(fibonacci(1));
