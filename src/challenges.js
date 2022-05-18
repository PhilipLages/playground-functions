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
function highestCount(numbers) {
  let hightestNumber = numbers[0];
  let countNumber = 1;
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > countNumber) {
      hightestNumber = numbers[index];
      countNumber = 1; 
    } 
    for (let index2 = 1; index < numbers.length; index2 += 1) {
      if (hightestNumber === numbers[index2]) {
        countNumber += 1;
      };       
    };    
  };
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = mouse - cat1;
  let distance2 = mouse - cat2;
  if (distance1 < 0) {
    distance1 = distance1  * (-1);
  } else if (distance2 < 0) {
    distance2 = distance2  * (-1);   
  };
  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance1 > distance2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
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
