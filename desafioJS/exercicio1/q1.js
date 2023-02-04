function menor(a, b, c){
    if((a + b) < c){
        return true;
    }else if((a + b) >= c){
        return false;
    }
}
console.log(menor(4,3,5));
console.log(menor(0,3,8));
