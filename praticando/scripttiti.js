function tabuada() {
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('tabu')
    var res =  window.document.getElementById('result')
   
    if (num.value.length == 0) {
        window.alert('[ERRO] Preencha os dados!')
    } else {
       var n = Number(num.value)
       c = 1
       for (let nu = c; c <= 10; c++) {
       res.innerHTML += (`<li>${n} x ${c} = ${n*c}</li>`)
       
      
    }
       
      
    }
}