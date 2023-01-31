//arrayMenos = array.sort((a,b) => b - a);
function ordenar_3_numeros(n1, n2, n3){
    let array = [n1, n2, n3];
    array = array.sort((a,b) => b - a);

    return array;
}

console.log(ordenar_3_numeros (7, 4, 8));
console.log(ordenar_3_numeros (-10, 3, 1));
