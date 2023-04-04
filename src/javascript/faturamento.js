const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const faturamentopercent = {
  SP: 0,
  RJ: 0,
  MG: 0,
  ES: 0,
  Outros: 0,
};

let sum = Object.values(faturamento).reduce((acc, cur) => acc + cur, 0);

Object.keys(faturamento).forEach((element) => {
  faturamentopercent[element] =
    ((faturamento[element] * 100) / sum).toFixed(2) + "%";
});

console.log(faturamentopercent);
