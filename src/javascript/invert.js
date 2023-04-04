const invert = (string) => {
  let newStr = "";

  for (let i = string.length - 1; i >= 0; i--) {
    newStr += string[i];
  }
  return newStr;
};

console.log(invert("uma string muito loca"));
