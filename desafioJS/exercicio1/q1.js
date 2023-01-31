function menor(a, b, c){
    if(a + b > c){
        return false;
    }else if(a + b === c){
        return 'igual';
    }else{
        return true;
    }
}
console.log(menor(4,3,5));
console.log(menor(0,3,8));
console.log(menor(4,4,8));