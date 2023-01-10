var amigo = {nome:'Karol', idade:24, sexo:'F', peso:61.0,engordar(p = 0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} tem ${amigo.idade} anos do ${amigo.sexo} pesa ${amigo.peso}kg`)