function peso_ideal(n, str){
    if(str === 'm'){
        return (72.7 * n) - 58;
    }else{
        return (62.1 * n) - 44.7;
    }
}
console.log(peso_ideal(1.85, 'm'));
console.log(peso_ideal(1.80, 'f'));