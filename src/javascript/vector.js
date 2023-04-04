import data from "../data/dados.json" assert { type: "json" };

const readFile = (data) => {
  let sorted = data
    .sort((a, b) => a.valor - b.valor)
    .filter((element) => element.valor != 0);

  let media = sorted.reduce((acc, cur) => acc + cur.valor, 0) / sorted.length;

  let obj = {
    menor_faturamento: sorted[0].valor,
    maior_faturamento: sorted[sorted.length - 1].valor,
    dias_maior_faturamento_medio: 0,
  };

  data.forEach((element) => {
    if (element.valor > media) {
      obj.dias_maior_faturamento_medio++;
    }
  });

  return obj;
};
console.log(readFile(data));
