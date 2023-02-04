function intervalo(n1, n2){
    let array = [];
    let j = 0;
    if(n1 < n2){
        for(let i = n1; i <= n2; i++){
            array[j] = i;
            j++;
        }
    }else{
        for(let i = n1 ; i >= n2; i--){
            array[j] = i;
            j++;
        }
    }
    return array;
}


console.log(intervalo(1,5));
console.log(intervalo(0, -5));