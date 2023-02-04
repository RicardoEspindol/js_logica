function estatistica(array){
    let total = 0;
    let maior = -1;
    let menor = 9999999;
    let arrayT = [];
    let quant = 0;
    for(let i =0;  i < array.length; i++){
        total += array[i];
        quant++;
        if(array[i] > maior){
            maior =  array[i];
        }
        if(array[i] < menor){
            menor = array[i];
        }
    }
    total = total / quant;
    arrayT[0]= maior;
    arrayT[1] = menor;
    arrayT[2] = total;

    return arrayT;

}
let a = [ 8, 4, 12 ];
let b = [ 5, 1, 9, 2, 3, 0, 1 ];

console.log(estatistica(a));
console.log(estatistica(b));