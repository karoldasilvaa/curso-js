var amigo = {nome:'Karol', sexo:'F', peso:61.0, engordar(p = 0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} do sexo ${amigo.sexo} pesa ${amigo.peso}kg.`)