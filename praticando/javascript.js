function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById('txtano')
   var res = window.document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano) {
     window.alert('[ERRO] Verifique os dados e tente novamente!')
   }
   else{
     var fsex = window.document.getElementsByName('radsex')
     var idade = ano - Number(fano.value)
     var genero = ''
     var img = window.document.createElement('img')
     img.setAttribute('id', 'foto')
     if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade <= 10) {
            // criança
            img.setAttribute('src', 'bbh.png')
        }
        else if (idade < 21) {
            // jovem
            img.setAttribute('src', 'jovem-homem.png')
        }
        else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adulto.png')
        }
        else {
            //idoso
            img.setAttribute('src', 'idoso.png')
        }
     }
     else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade <= 10) {
            // criança
            img.setAttribute('src', 'bbm.png')
        }
        else if (idade < 21) {
            // jovem
            img.setAttribute('src', 'jovem-mulher.png')
        }
        else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adulta.png')
        }
        else {
            img.setAttribute('src', 'idosa.png')
        }
     }
     res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
     res.appendChild(img) // para aparecer a imagem 
     
   }
}