var agora = new Date()
var diaSem = agora.getDay()

/*
    0 Domingo 
    1 Segunda 
    2 Terça 
    3 Quarta
    4 Quinta
    5 Sexta
    6 Sábado
    Os dias da semana no brasil começa no domingo 
*/

/*console.log(diaSem)*/  /*para ver o número do dia da semana*/

switch (diaSem) {
    case 0: 
        console.log('Domingo')
        break /* parar */
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
}

/* Condições Multiplas */
