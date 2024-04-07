function addTwo(num) {
    return num + 2;
  }
  
  function checkConsistentOutput(func, val) {
    var checkA = val + 2;
    var checkB = func(val);
  
    if (checkA === checkB) {
      return func(val);
    } else {
      return 'resultados inconsistentes';
    }
  }
  
  console.log(checkConsistentOutput(addTwo, 10));

  /* 
  function checkConsistentOutput(func,val) é substituido quando fazemos console.log, fica assim 

function checkConsistentOutput(addTwo,10) 

logo, declaramos a variavel checkA = val (o valor 10) + 2, que é igual a 12

na variavel checkB = func é o addTwo e val é o 10 entao fica checkB = addTwo(10); fazendo isso nós ativamos o num la de cima na function addTwo e o num passa a ser 10

return 10 (num) + 2;

logo o codigo continua:

se (if) checkA (12) for igual (===) que checkB (12)
devolve o valor de func(addTwo+10) que seria 12, 

caso contrario (else) devolve 'resultados inconsistentes'
[18:51]
tenta ver se vc consegue entender com essa explicaçao
*/

