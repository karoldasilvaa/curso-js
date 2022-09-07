const d = new Date();
let hora = d.getHours();
console.log(`Agora são ${hora} horas.`)
if (hora < 6) {
    console.log('Boa madrugada!')
}else if (hora <=12) {
    console.log('Bom dia!')
}else if (hora <=18) {
    console.log('Boa tarde!')
}else if (hora <= 23 || hora ==0 ) {
    console.log('Boa noite!')
}else {
    console.log('O dia só tem 24 horas')
}
   
// pode ser no lugar de const ou ler: var obs: const não pode mudar o valor já a var pode 
//getHours é para hora getDay para dia etc...