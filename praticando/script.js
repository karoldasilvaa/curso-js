function carregar() {
const msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
const data = new Date()
const hora = data.getHours() 
const min = data.getMinutes()
msg.innerHTML= `Agora são ${hora} horas e ${min} minutos.`
if (hora >= 0 && hora < 12){
    img.src = 'fotodia.png'
    document.body.style.background = '#fea83a'
}
else if (hora >= 12 && hora < 18){
    img.src = 'fototarde.png'
    document.body.style.background = '#364b14'
}
else {
    img.src = 'fotonoite.png'
    document.body.style.background = '#090827'
}

}


// const quando a variavel for imutavel e o let quando ela for mudar esse cód com var não funciona 