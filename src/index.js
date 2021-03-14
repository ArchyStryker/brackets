module.exports = function check (str, bracketsConfig){
  let strToArr = str.split("");
  let openBracket = [];
  let closeBracket = [];
  let openBracketIndices = [];
  let closeBracketIndices = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBracket.push(bracketsConfig[i][0]);
    closeBracket.push(bracketsConfig[i][1]);
  }
  for (let i = 0; i < openBracket.length; i ++) {
    let element = strToArr.indexOf(openBracket[i]);
    while (element !== -1)
    {
      openBracketIndices.push(element);
      element = strToArr.indexOf(openBracket[i], element + 1);
    }
  }
  for (let i = 0; i < closeBracket.length; i ++) {
    let element = strToArr.indexOf(closeBracket[i]);
    while (element !== -1)
    {
      closeBracketIndices.push(element);
      element = strToArr.indexOf(closeBracket[i], element + 1);
    }
  }
  if (openBracketIndices.length === closeBracketIndices.length) {
    return true;
  } else {
    return false;
  }
}
