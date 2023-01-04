var num = [5, 8, 9, 3,]
num.push(1) //adicionar um valor na var no último índice

num.sort() // colocar os valores em ordem crescente

/* Obs: se colocar o push embaixo do sorte, fica em ordem crescente só os primeiro o que adicionou por último mesmo sendo menor fica no último índice */
console.log(`Nosso vetor é o ${num}`)

console.log(`O vetor tem ${num.length} posições`)

console.log(`O sengundo índice do vetor é o ${num[2]}`)

var pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado')
}

else {
    console.log(`O valor 9 está na posição ${pos}`) 
}

//Obs: se eu colocar um numero que não tem no vetor vai aperecer -1 que quer dizer que não tem esse número

//Simplificando

//var valores = [5, 9, 1, 3]
 //for=para - in=dentro                                           
//for(var pos=0;pos<valores.length;pos++) {      
    //console.log(`A posição ${pos} tem o valor ${valores}`)
//}

//Simplificando ainda mais

//var valores = [1, 6, 9, 8]
//valores.sort()
//for (var pos in valores) {
 //   console.log(`A posição ${pos} tem o valor ${valores}`)
//}







