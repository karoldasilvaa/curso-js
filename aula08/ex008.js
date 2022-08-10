var vel = Number(window.prompt('Digite sua velocidade:'))

if(isNaN(vel)) { 
    alert('Apenas números')
}
else
{ 
    if (vel>60) {
        alert('Velocidade alta')
    }
    else if (vel>30) {
        alert('Velocidade normal')
    }
    else {
        alert('Velocidade baixa')
    }
 
}

