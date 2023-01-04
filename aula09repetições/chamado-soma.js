          // FUNÇÃO DA MANEIRA TRADICIONAL
//function soma(n1, n2) {
      //return n1 + n2
///}

//console.log(soma(2, 6))



// function soma(n1=0, n2=0){
// return n1 + n2
// }

// console.log(soma(2))

// Os dois jeitos está certo só que se na primeira função se colocar só um número no console.log o resultado da que não tem número, já no segundo vai somar o 2 com zero que vai dar 2


// var v = function(x) {
//     return x*2
// }

// console.log(v(5))


// function fatorial(n) {
//     var fat = 1
//  for (var c = n; c > 1; c--) {
//     fat *= c 
//  }
//  return fat
// }

// console.log(fatorial(5))


// fatorial - número multiplicado pelo número anterior ex: 4x3x2x1
   


        // FUNÇÃO DE MANEIRA RECURSIVA
function fatorial(n) {
    if (n == 1) {
        return 1 
    }
    else {
        return n * fatorial(n-1)
    }
}

 console.log(fatorial(5))

























 