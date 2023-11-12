//Tarea 1
let distancia = prompt('Ingrese cantidad de metros para saber su medio de transporte')

if (distancia <= 1000){
    alert('Pie')
}
else if ((distancia <= 10000)&&(distancia >= 1001)){
    alert('bicicleta')
}
else if ((distancia <= 30000)&&(distancia >= 10001)){
    alert('colectivo')
}
else if ((distancia <= 100000)&&(distancia >= 30001)){
    alert('auto')
}
else {
    alert('avion')
}

//Tarea 2
const numeros = [1, 2, 3, 4, 5, 6]

let mayor = numeros[5]

alert('El numermo mas alto es '+ mayor)