function agrupamento(array){
    let g1 = 0;
    let g2 = 0;
    let g3 = 0;
    let g4 = 0;
    let arr = []
    for(let i = 0; i < array.length; i++){
        if(array[i]>= 0 && array[i] <= 25){
            g1++;
        }else if(array[i]> 25 && array[i] <= 50){
            g2++;
        }else if(array[i] > 50 && array[i] <= 75){
            g3++;
        }else if(array[i]> 75 && array[i] <= 100){
            g4++;
        }
    }
    arr[0] = g1;
    arr[1] = g2;
    arr[2] = g3;
    arr[3] = g4;
    return arr;
}
let teste = [ 10, 5, 80, 60, 25, 99, 81, 92 ];
console.log(agrupamento(teste));