// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } 
    return false;
  };


// Desafio 2
function calcArea(base, hight) {
  let area = (base * hight) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayOfStrings = string.split(' ');
  return arrayOfStrings;
};

// Desafio 4
function concatName(stringsArray) {
  let secondArray = [];  
  for (let index = 0; index < stringsArray.length; index += 1) {
    secondArray.push(stringsArray[stringsArray.length - 1], stringsArray[0]);
    break;
  };
  let string = secondArray.join(", ");  
  return string;
};

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
