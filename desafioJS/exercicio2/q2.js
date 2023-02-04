function tabuada(n){
    let texto ='';
    for(let i = 0; i < 11; i++){
        if(i === 10){
            texto +=  n+' x '+i+' = '+ (n*i);
        }else{
            texto +=  n+' x '+i+' = '+ (n*i)+ ', ';
    }
    }
    return texto;

}

console.log(tabuada(5));
console.log(tabuada(8));