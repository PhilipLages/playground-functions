// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
    };
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }    
    let countNumber = 0;      
    for (index2 = 0; index2 < numbers.length; index2 += 1) {     
      if (numbers[index2] === numbers[index]) {        
        countNumber += 1;      
        };  
    }
      if (countNumber >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      };        
    };
  //  Lógica retirada do site https://www.florin-pop.com/blog/2019/04/jcc-create-a-phone-number/
  let phoneNumber = '(xx) xxxxx-xxxx';       
  numbers.forEach(item => {
    phoneNumber = phoneNumber.replace('x', item); 
  }); 
    return phoneNumber;
};   


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
