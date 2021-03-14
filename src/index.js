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
    if (strToArr.indexOf(openBracket[i]) !== -1) {
      openBracketIndices.push(strToArr.indexOf(openBracket[i]));
    }
  }
  for (let i = 0; i < closeBracket.length; i ++) {
    if (strToArr.indexOf(closeBracket[i]) !== -1) {
      closeBracketIndices.push(strToArr.indexOf(closeBracket[i]));
    }
  }
  if (openBracketIndices.length === closeBracketIndices.length) {
    return true;
  } else {
    return false;
  }
}
