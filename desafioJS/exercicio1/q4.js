function dobro_triplo(n){
    if(n > 0){
        return n * 2;
    }else if(n === 0){
        return 'zero';
    }else{
        return n * 3;
    }
}
console.log(dobro_triplo(7));
console.log(dobro_triplo(-4));
console.log(dobro_triplo(0));